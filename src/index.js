import {createKeyboard} from "./assets/scripts/createKeyboard";
import {click, mousedown, keydown, keyup, lang, shiftDown, shiftUp, mouseShiftDown, mouseShiftClick} from "./assets/scripts/keyInfo";
import {addClass} from "./assets/scripts/addClass";

import "../src/assets/CSS/style.css";
import "../src/assets/CSS/style.scss";

createKeyboard();
document.addEventListener('mousedown', (e) => mousedown(e));
document.addEventListener('mouseup', (e) => click(e));
document.addEventListener('keydown', (e) => keydown(e));
document.addEventListener('keyup', (e) => keyup(e));
document.addEventListener('keydown', (e) => lang(e));
document.addEventListener('keydown', (e) => shiftDown(e));
document.addEventListener('keyup', (e) => shiftUp(e));

document.addEventListener('mousedown', (e) => mouseShiftDown(e));
document.addEventListener('mouseup', (e) => mouseShiftClick(e));