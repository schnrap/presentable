import {AnimationController} from "./animationController";

export class SlideController {

  static readonly SLIDE_TAG_NAME = 'presentable-slide';

  /**
   * index of the currently active slide
   */
  private index = 0;
  slides: any[];
  get slide () {
    return this.slides[this.index];
  }

  get showPager () {
    return this.showHeader
  }

  get showHeader () {
    const slide = this.slide;
    return slide && !slide.getAttribute('no-header');
  }

  get showFooter () {
    const slide = this.slide;
    return slide && !slide.getAttribute('no-footer');
  }

  get pageNumber () {
    return this.index + 1;
  }

  private animationController: AnimationController;

  constructor(private host: HTMLElement){
    this.initSlides();
  }

  initSlides(){
    this.animationController = new AnimationController();
    this.slides = Array.from(this.host.querySelectorAll(SlideController.SLIDE_TAG_NAME)) as any[];
    if (this.slides.length === 0){
      console.error('Failed to find valid slides');
    }
  }

  resetSlides() {
    this.setIndex(0);
  }

  setIndex(index: number = 0){
    this.slides.forEach(slide => slide.deselect());
    this.slides[index] && this.slides[index].select();
    this.index = index;
    this.animationController.setSlide(this.slides[index]);
  }

  next() {
    this.step(1);
  }

  prev() {
    this.step(-1);
  }

  step (interval: number){
    if (this.slides.length === 0 || interval === 0) return;

    const methods = {
      next: this.animationController.next.bind(this.animationController),
      prev: this.animationController.prev.bind(this.animationController),
      nextSlide: this.nextSlide.bind(this),
      prevSlide: this.prevSlide.bind(this)
    };

    const stepppingMethod = interval > 0 ? methods.next : methods.prev;
    const slideMethod = interval > 0 ? methods.nextSlide : methods.prevSlide;

    let currentSlidesHasAnimationsLeft = false;
    for(let i = 0; i < Math.abs(interval); i++){
      currentSlidesHasAnimationsLeft = stepppingMethod();
    }

    if(!currentSlidesHasAnimationsLeft){
      slideMethod()
    }
  }

  selectSlide(index: number){
    //deselection
    this.slides[this.index].deselect();

    //selection
    this.animationController.setSlide(this.slides[index]);
    this.slides[index].select();
    this.index = index;

  }

  private nextSlide() {
    if (this.slides.length > this.index + 1){
      this.selectSlide(this.index + 1);
    }
  }

  private prevSlide() {
    if (this.index > 0){
      this.selectSlide(this.index - 1);

    }
  }

}
