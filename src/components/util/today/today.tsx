import {Component,} from "@stencil/core";

@Component({
  tag: 'presentable-today',
  styleUrl: 'today.scss',
  shadow: false
})
export class SlideComponent {

  render() {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('de-DE', options);
  }
}
