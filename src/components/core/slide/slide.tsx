import {Component, State, Element, Method, Prop} from '@stencil/core';

@Component({
  tag: 'presentable-slide',
  styleUrl: 'slide.scss',
  shadow: true
})
export class PresentableSlideComponent {

  @State()
  selected = false;

  @Element()
  private host: HTMLElement;

  @Prop()
  noHeader:boolean;

  @Prop()
  noFooter:boolean;


  componentDidLoad() {
    this.host.setAttribute('slot', 'slides');
  }

  @Method()
  select() {
    this.selected = true;
  }

  @Method()
  deselect() {
    this.selected = false;
  }

  render() {
    return this.selected ? <slot></slot> : '';
  }
}
