import {
  nextSlide,
  prevSlide,
  initializeSlider,
  showSlide,
} from "../slideshow";

export function homepage() {
  //creating/selecting html elements
  const h1 = document.createElement("h1");
  const slideshow = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const slideContainer = document.createElement("div");
  const app = document.querySelector("#app");
  const mainText = document.createElement("p");
  const next = document.createElement("a");
  const prev = document.createElement("a");

  //adding properties to elements
  slideshow.className = "slideshow";
  slideContainer.className = "slides";
  img1.src = "/images/burger.jpg";
  img2.src = "/images/salad.jpg";
  img3.src = "/images/spaghetti.jpg";
  prev.className = "prev";
  next.className = "next";

  //changing the content of html elements
  h1.textContent = "Lorem Ipsum";
  mainText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a tortor scelerisque, finibus eros non, aliquam est. Maecenas mollis tellus a nulla commodo, in feugiat nibh placerat. Integer laoreet placerat arcu et laoreet. Ut urna nisl, sagittis nec justo id, sollicitudin ornare nisi. Sed ultricies augue et rhoncus volutpat. Phasellus venenatis ligula ligula. Curabitur sed dui ac arcu posuere rutrum dictum nec libero. Integer a nisi in sem tincidunt efficitur.";
  prev.textContent = "<";
  next.textContent = ">";

  //appending elements
  slideContainer.appendChild(img1);
  slideContainer.appendChild(img2);
  slideContainer.appendChild(img3);

  slideshow.appendChild(prev);
  slideshow.appendChild(slideContainer);
  slideshow.appendChild(next);

  app.appendChild(h1);
  app.appendChild(mainText);
  app.appendChild(slideshow);

  const slideList = document.querySelectorAll(".slides img");

  //executing functions
  initializeSlider(slideList);
  prev.addEventListener("click", () => prevSlide(slideList));
  next.addEventListener("click", () => nextSlide(slideList));
}
