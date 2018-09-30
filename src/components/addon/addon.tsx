import {Component, State, Element} from '@stencil/core';

@Component({
  tag: 'presentable-addon',
  styleUrl: 'addon.scss',
  shadow: true
})
export class PresentableAddonComponent {

  @State()
  selected = false;

  @Element()
  private host: HTMLElement;


  componentDidLoad() {
    this.host.setAttribute('slot', 'addons');
  }

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }

  render() {
    return this.selected ? <slot></slot> : '';
  }
}
