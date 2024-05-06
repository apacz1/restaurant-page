import { homepage } from "./public/pages/home";
import { menu } from "./public/pages/menu";
import { aboutpage } from "./public/pages/about";

const homepageBtn = document.querySelector("#Home");
const menuBtn = document.querySelector("#Menu");
const aboutBtn = document.querySelector("#About");

homepageBtn.addEventListener("click", homepage);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", aboutpage);

homepage();
