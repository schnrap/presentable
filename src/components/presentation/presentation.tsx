import {Component, Prop, Element, Listen} from '@stencil/core';
import {SectionController} from "./SectionController";

/**
 *
 */
@Component({
  tag: 'pr-presentation',
  styleUrl: 'presentation.scss',
  shadow: true
})
export class PresentablePresentationComponent {

  @Prop() KEY_NEXT: number[] = [34,39,32];
  @Prop() KEY_PREV = [33,37];
  @Prop() KEY_UP = [38];
  @Prop() KEY_DOWN = [40];

  @Prop()
  author: string;

  @Prop()
  name: string;

  @Prop()
  subtitle: string;

  @Prop()
  date: number = Date.now();

  @Element()
  host: HTMLStencilElement;

  controller: SectionController;

  @Listen('body:keydown')
  handleKeydown(event: KeyboardEvent){
    if (this.KEY_NEXT.indexOf(event.keyCode) !== -1) {
      this.controller.next()
    } else if ((this.KEY_PREV.indexOf(event.keyCode) !== -1)) {
      this.controller.prev();
    } else if ((this.KEY_UP.indexOf(event.keyCode) !== -1)) {
      this.controller.prev();
    } else if ((this.KEY_DOWN.indexOf(event.keyCode) !== -1)) {
      this.controller.next();
    }
  }

  componentDidLoad() {
    console.log('Initializing Presentable...', this.host);
    this.controller = new SectionController(this.host);
  }

  render() {
    return (<div class="presentation">
      <slot></slot>
    </div>)
  }
}
