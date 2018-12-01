import {PresentableSlideComponent} from "../slide/slide";
import {FlowDirection} from "../slide/FlowDirection";

export class SlideController {

  private index: number = 0;
  private slides: PresentableSlideComponent[];

  get currentSlide () {
    return this.slides[this.index];
  }

  constructor(private host){
    this.init();
  }

  private init() {
    this.slides = Array.from(this.host.querySelectorAll('pr-slide')) as any[];
    if (this.slides.length === 0){
      console.error('Failed to find valid slides');
    }
  }

  public hasNext() {
    if (this.currentSlide && this.currentSlide.hasNext()){
      return true
    }
    if (this.slides.length > 0 && this.index < this.slides.length-1){
      return true
    }
    return false;
  }

  public hasPrev() {
    return this.index > 0 || this.currentSlide && this.currentSlide.hasPrev();
  }

  public next() {
    if (this.currentSlide.hasNext()){
      this.currentSlide.next();
    } else {
      this.select(this.index+1);
    }
  }

  public prev() {
    if (this.currentSlide.hasPrev()){
      this.currentSlide.next();
    } else {
      this.select(this.index-1);
    }
  }

  public first(){
    this.select(0);
  }

  public last() {
    this.select(this.slides.length-1);
  }

  public select(index){
    const flowDirection = index === 0 ? FlowDirection.RIGHT : FlowDirection.DOWN;
    this.currentSlide && this.currentSlide.setSelected(false);
    this.index = index;
    this.currentSlide.setSelected(true, flowDirection);
  }

  reset() {
    this.slides.forEach(slide => {
      slide.setSelected(false);
    });
    this.index = -1;
  }
}
