
export class AnimationController{

  index: number = -1;
  //animations: HTMLElement[];

  constructor(private host: HTMLElement){}

  get animations() {
    return Array.from(this.host.querySelectorAll('.pr-animate')) as any[]
  }

  public hasNext() {
    return this.hasAnimations() && this.animations[this.index+1];
  }

  public hasAnimations() {
    return !!this.animations.length;
  }

  public hasPrev() {
    return this.index > 0;
  }

  public prev () {
    if(!this.hasPrev()) console.error('no prev animation available');

    this.animations[this.index].classList.remove('pr-animated');
    this.index--;
  }

  public next() {
    if(!this.hasNext()) console.error('no next animation available');

    console.log(this.index+1, this.animations.length);
    this.animations[this.index+1].classList.add('pr-animated');
    this.index++;
  }

  public reset () {
    this.animations.forEach(animation => {
      animation.classList.remove('pr-animated');
    });
    this.index = -1;
  }

}
