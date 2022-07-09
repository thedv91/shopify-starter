class SlideShow extends HTMLElement {
  constructor() {
    super();
    const slide = this.querySelector("[id^='wrap-slider']");
    console.log(12, slide);
  }
}

customElements.define('slider-component', SlideShow);
