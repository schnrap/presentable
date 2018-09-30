import {Component, Listen, Element} from '@stencil/core';
import {SlideController} from "./slideController";

@Component({
  tag: 'presentable-presentation',
  styleUrl: 'presentation.scss',
  shadow: true
})
export class PresentablePresentationComponent {

  static readonly NEXT_SLIDE_KEY_CODES = [34,39,32];
  static readonly PREVIOUS_SLIDE_KEY_CODES = [33,37];

  @Element()
  host: HTMLStencilElement;

  slideController:SlideController;

  componentWillLoad() {
    this.slideController = new SlideController(this.host);
  }
  componentDidLoad() {
    this.slideController.resetSlides();
  }

  @Listen('body:keydown')
  handleKeydown(event: KeyboardEvent){
    if (PresentablePresentationComponent.NEXT_SLIDE_KEY_CODES.indexOf(event.keyCode) !== -1) {
      this.slideController.next()
    } else if ((PresentablePresentationComponent.PREVIOUS_SLIDE_KEY_CODES.indexOf(event.keyCode) !== -1)) {
      this.slideController.prev();
    }
    this.host.forceUpdate();
    this.host.querySelector('presentable-header').setAttribute('page-number', this.slideController.pageNumber.toString());
  }

  render() {
    return (
      <div class="container">
        <div class="canvas">
          {this.slideController.showPager && <header><slot name="header"></slot></header>}
          <main><slot name="slides"></slot></main>
          {this.slideController.showPager && <footer><slot name="footer"></slot></footer>}
        </div>
        <div class="addons"><slot name="addons"></slot></div>
      </div>
    );
  }
}
