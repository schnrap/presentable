import {Component, Prop, Element, Listen, Method, Event} from '@stencil/core';
import {SectionController} from "./SectionController";
import {EventEmitter} from "../../../node_modules/@stencil/core/dist/client/declarations/stencil.core";

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

  @Prop() disableNavigation: boolean = false;

  @Prop()
  author: string;

  @Prop()
  name: string;

  @Prop()
  subtitle: string;

  @Prop()
  animated: boolean;

  @Prop()
  date: number = Date.now();

  @Element()
  host: HTMLStencilElement;

  @Event()
  onSlideChange: EventEmitter;

  controller: SectionController;

  @Listen('body:keydown')
  handleKeydown(event: KeyboardEvent){
    if (this.KEY_NEXT.indexOf(event.keyCode) !== -1) {
      this.controller.next()
    } else if ((this.KEY_PREV.indexOf(event.keyCode) !== -1)) {
      this.controller.prev();
    } else if ((this.KEY_UP.indexOf(event.keyCode) !== -1)) {
      this.controller.prevSection();
    } else if ((this.KEY_DOWN.indexOf(event.keyCode) !== -1)) {
      this.controller.nextSection();
    } else
      return;
    this.onSlideChange.emit();
  }


  componentDidLoad() {
    this.controller = new SectionController(this.host);

    if(!document["presentation"]){
      document["presentation"] = this;
    }

    if (this.animated){
      const slides: Array<HTMLElement> = Array.from(this.host.querySelectorAll('pr-slide'));
      slides.forEach(slide => slide.setAttribute('flow-in', '1'))
    }
  }

  @Method()
  slide(id: string) {
    const slide = this.host.querySelector('#'+id);
    console.log(slide);
    console.log(slide.parentElement);
    console.log(id);
  }

  render() {
    return (<div class="container">
      <slot></slot>


      {!this.disableNavigation ?
      <div class="">
        <i class="pr-btn pr-next" onClick={() => this.controller.nextSection()}>&rang;</i>
        <i class="pr-btn pr-prev" onClick={() => this.controller.prev()}>&lang;</i>
        <i class="pr-btn pr-down" onClick={() => this.controller.next()}>&lang;</i>
      </div>
      :''}
    </div>)
  }
}
