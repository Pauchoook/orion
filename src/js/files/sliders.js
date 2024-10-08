import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

export default function sliders() {
  const heroSlider = document.querySelector(".hero__slider");
  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 700,
      modules: [Pagination, Autoplay],
      autoplay: true,
      grabCursor: true,
      pagination: {
        el: ".hero__pagination-slider",
        clickable: true
      },
      autoplay: {
        delay: 3000
      }
    });
  }
}
