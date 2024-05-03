import { homepage } from "./public/pages/home";
import { menu } from "./public/pages/menu";

const homepageBtn = document.querySelector("#Home");
const menuBtn = document.querySelector("#Menu");

homepageBtn.addEventListener("click", homepage);
menuBtn.addEventListener("click", menu);

homepage();
