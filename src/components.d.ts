/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  FlowDirection,
} from './components/slide/FlowDirection';


export namespace Components {

  interface PrPresentation {
    'KEY_DOWN': any;
    'KEY_NEXT': number[];
    'KEY_PREV': any;
    'KEY_UP': any;
    'animated': boolean;
    'author': string;
    'date': number;
    'disableNavigation': boolean;
    'name': string;
    'slide': (id: string) => void;
    'subtitle': string;
  }
  interface PrPresentationAttributes extends StencilHTMLAttributes {
    'KEY_DOWN'?: any;
    'KEY_NEXT'?: number[];
    'KEY_PREV'?: any;
    'KEY_UP'?: any;
    'animated'?: boolean;
    'author'?: string;
    'date'?: number;
    'disableNavigation'?: boolean;
    'name'?: string;
    'subtitle'?: string;
  }

  interface PrSection {
    'first': () => void;
    'hasNext': () => boolean;
    'hasPrev': () => true | void;
    'last': () => void;
    'next': () => void;
    'prev': () => void;
    'setSelected': (value: boolean) => void;
  }
  interface PrSectionAttributes extends StencilHTMLAttributes {}

  interface PrSlide {
    'flowIn': boolean;
    'hasNext': () => void;
    'hasPrev': () => void;
    'next': () => void;
    'prev': () => void;
    'setSelected': (value: boolean, flowDirection?: FlowDirection) => void;
    'url': string;
  }
  interface PrSlideAttributes extends StencilHTMLAttributes {
    'flowIn'?: boolean;
    'url'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'PrPresentation': Components.PrPresentation;
    'PrSection': Components.PrSection;
    'PrSlide': Components.PrSlide;
  }

  interface StencilIntrinsicElements {
    'pr-presentation': Components.PrPresentationAttributes;
    'pr-section': Components.PrSectionAttributes;
    'pr-slide': Components.PrSlideAttributes;
  }


  interface HTMLPrPresentationElement extends Components.PrPresentation, HTMLStencilElement {}
  var HTMLPrPresentationElement: {
    prototype: HTMLPrPresentationElement;
    new (): HTMLPrPresentationElement;
  };

  interface HTMLPrSectionElement extends Components.PrSection, HTMLStencilElement {}
  var HTMLPrSectionElement: {
    prototype: HTMLPrSectionElement;
    new (): HTMLPrSectionElement;
  };

  interface HTMLPrSlideElement extends Components.PrSlide, HTMLStencilElement {}
  var HTMLPrSlideElement: {
    prototype: HTMLPrSlideElement;
    new (): HTMLPrSlideElement;
  };

  interface HTMLElementTagNameMap {
    'pr-presentation': HTMLPrPresentationElement
    'pr-section': HTMLPrSectionElement
    'pr-slide': HTMLPrSlideElement
  }

  interface ElementTagNameMap {
    'pr-presentation': HTMLPrPresentationElement;
    'pr-section': HTMLPrSectionElement;
    'pr-slide': HTMLPrSlideElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
