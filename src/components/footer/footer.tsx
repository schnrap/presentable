import {Component, State, Element, Prop} from '@stencil/core';

@Component({
  tag: 'presentable-footer',
  styleUrl: 'footer.scss',
  shadow: true
})
export class PresentableFooterComponent {

  @State()
  content: HTMLElement;

  @Prop()
  pageNumber: number = 0;

  @Element()
  private host: HTMLElement;


  componentDidLoad() {
    this.host.setAttribute('slot', 'footer');
    this.parseContent(this.host.querySelector('template'));
  }


  parseContent(template: HTMLTemplateElement) {
    if (template){
      const clone = document.importNode(template.content, true);

      Array.from(clone.querySelectorAll('*'))
        .filter(tag => tag.childNodes.length === 1)
        .forEach(tag => {
          let textContent = tag.textContent;
          const regex = /\{\{([^}]+)\}\}/g;
          const matches = textContent.match(regex) || [];

          matches && matches.forEach(match => {
            const replacement = (match === '{{page}}') ? this.pageNumber : eval(match);

            textContent = textContent.replace(match, replacement);
          });

          tag.textContent = textContent;
        });

      this.content = document.createElement('div');
      this.content.appendChild(clone);

    }
  }

  render() {
    this.parseContent(this.host.querySelector('template:not([type=style])'));
    if (this.content){
      return (
        <div>
          <style innerHTML={this.host.querySelector('template[type=style]').innerHTML}></style>
          <div innerHTML={this.content.innerHTML}>
          </div>
        </div>
      );
    }
    return '';
  }
}
