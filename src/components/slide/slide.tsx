import {Component, Element, Method, Prop, State, Watch} from "@stencil/core";
import {AnimationController} from "./AnimationController";
import {TemplateParser} from "./TemplateParser";
import {FlowDirection} from "./FlowDirection";

@Component({
  tag: 'pr-slide',
  styleUrl: 'slide.scss',
  shadow: false
})
export class PresentableSlideComponent {

  @State()
  selected: boolean;

  @Prop()
  url: string;

  @Prop()
  flowIn: boolean;

  @State()
  content: HTMLElement;

  controller: AnimationController;
  parser: TemplateParser;

  @Element()
  host: HTMLElement;

  private _flowDirection: FlowDirection;
  get flowDirection() {
    if (this.flowIn) {
      switch (this._flowDirection) {
        case FlowDirection.DOWN:
          return 'pr-flow-down';
        case FlowDirection.UP:
          return 'pr-flow-up';
        case FlowDirection.RIGHT:
          return 'pr-flow-right';
        case FlowDirection.LEFT:
          return 'pr-flow-left';
      }
    }
    return '';
  }

  componentWillLoad() {
    this.controller = new AnimationController(this.host);
    this.parser = new TemplateParser((content) => {
      this.content = content
    });

    if (!this.url) {
      const template = this.host.querySelector('template');
      this.parser.setTemplate(template);
    } else {
      this.urlChanged();
    }
  }

  @Watch('url')
  async urlChanged() {
    if (this.url) {
      fetch(this.url).then(function(response) {
        return response.text()
      })
      .then((html) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        const template = doc.querySelector('template');
        this.parser.setTemplate(template);
      })
      .catch(function(err) {
        console.log('Failed to fetch slide content', err);
      });
    }
  }

  @Method()
  setSelected(value: boolean, flowDirection?: FlowDirection) {
    this.controller.reset();
    this._flowDirection = flowDirection || this._flowDirection;
    this.selected = value;
  }

  @Method() next() { this.controller.next();}
  @Method() prev() { this.controller.prev()}
  @Method() hasNext(){ this.controller.hasNext()}
  @Method() hasPrev(){ this.controller.hasPrev()}

  render() {
    return (
      <div class={this.selected ? 'selected slide ' + this.flowDirection : 'slide ' + this.flowDirection}>
        <div innerHTML={this.content && this.content.innerHTML}></div>
      </div>);
  }

}
