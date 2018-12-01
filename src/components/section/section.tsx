import {Component, Element, Method, State} from "@stencil/core";
import {SlideController} from "./SlideController";

@Component({
  tag: 'pr-section',
  styleUrl: 'section.scss',
  shadow: true
})
export class PresentableSectionComponent {

  @Element()
  host: HTMLElement;

  @State() selected: boolean = false;

  controller: SlideController;

  @Method()
  setSelected(value: boolean){
    this.controller.reset();
    this.selected = value;

    if (value){
      this.controller.select(0);
    }
  }

  @Method() hasNext(){
    return this.controller.hasNext();}
  @Method() hasPrev(){return this.controller.hasPrev();}
  @Method() next()   {this.controller.next();}
  @Method() prev ()  {this.controller.prev();}
  @Method() last() {this.controller.last();}
  @Method() first() {this.controller.first()}

  componentWillLoad() {
    this.controller = new SlideController(this.host);
  }

  render() {
    if (this.selected)
      return (<div class="section">
        <slot></slot>
      </div>)
  }
}
