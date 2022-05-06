import {createKeyboard} from "./assets/scripts/createKeyboard";
import {click, mousedown, keydown, keyup, lang} from "./assets/scripts/keyInfo";
import {addClass} from "./assets/scripts/addClass";

import "../src/assets/CSS/style.css";
import "../src/assets/CSS/style.scss";

//createInput();
createKeyboard();
document.addEventListener('mousedown', (e) => mousedown(e));
document.addEventListener('click', (e) => click(e));
document.addEventListener('keydown', (e) => keydown(e));
document.addEventListener('keyup', (e) => keyup(e));
document.addEventListener('keydown', (e) => lang(e));