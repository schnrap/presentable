export class TemplateParser {

  data: object = {};
  template:HTMLTemplateElement;

  constructor(private update: Function) {
  }

  public setData(data: object) {
    this.data = {...this.data, ...data};
  }

  public parse() {
    const clone = document.importNode(this.template.content, true);
    Array.from(clone.querySelectorAll('*'))
      .filter(tag => tag.childNodes.length === 1)
      .forEach(tag => {
        let textContent = tag.textContent;

        // TODO:

        tag.textContent = textContent;
      });

    const content = document.createElement('div');
    content.appendChild(clone);
    this.update(content)
  }

  setTemplate(template: HTMLTemplateElement) {
    this.template = template;
    this.parse();
  }

}
