import {Component, Method, Prop, Element, State, Watch} from "@stencil/core";
import {AnimationController} from "./AnimationController";
import {TemplateParser} from "./TemplateParser";

@Component({
  tag: 'pr-slide',
  styleUrl: 'slide.scss',
  shadow: true
})
export class PresentableSlideComponent {

  @State()
  selected: boolean;

  @Prop()
  url: string;

  @State()
  content: HTMLElement;

  controller: AnimationController;
  parser: TemplateParser;

  @Element()
  host: HTMLElement;

  componentWillLoad() {
    this.controller = new AnimationController(this.host);
    this.parser = new TemplateParser((content) => {
      this.content = content
    });

    if (!this.url) {
      const template = this.host.querySelector('template');
      this.parser.setTemplate(template);
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
  setSelected(value: boolean) {
    this.controller.reset();
    this.selected = value;
  }

  @Method() next() { this.controller.next();}
  @Method() prev() { this.controller.prev()}
  @Method() hasNext(){ this.controller.hasNext()}
  @Method() hasPrev(){ this.controller.hasPrev()}

  render() {
    return (
      <div class={this.selected ? 'selected slide' : 'slide'}>
        <div innerHTML={this.content && this.content.innerHTML}></div>
      </div>);
  }

}
