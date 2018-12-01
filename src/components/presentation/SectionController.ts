import {PresentableSectionComponent} from "../section/section";

export class SectionController {

  sections: PresentableSectionComponent[];
  index: number = -1;

  get currentSection () {
    return this.sections[this.index];
  }

  constructor(private host: HTMLElement) {
    this.init();
  }

  init(){
    this.sections = Array.from(this.host.querySelectorAll('pr-section')) as any[];
    if (this.sections.length === 0){
      console.error('Failed to find valid sections');
    } else {
      this.select(0);
    }

  }

  public next() {
    if(this.currentSection.hasNext()) {
      this.currentSection.next();
    } else if(this.sections.length > this.index +1) {
      this.select(this.index+1);
    } else {
      console.error('last section reached');
    }
  }
  public prev() {
    if(this.currentSection.hasPrev()){
      this.currentSection.prev();
    } else if(this.index > 0) {
      this.select(this.index-1);
      this.currentSection.last();
    } else {
      console.error('first slide reached');
    }
  }

  public nextSection() {
    if (this.sections.length > this.index+1){
      this.select(this.index+1);
    } else {
      console.error('last section reached');
    }
  }

  public prevSection() {
    if (this.index > 0){
      this.select(this.index-1);
    } else {
      console.error('first section reached');
    }
  }

  private select (index: number){
    this.currentSection && this.currentSection.setSelected(false);
    this.index = index;
    this.currentSection.setSelected(true);
  }
}
