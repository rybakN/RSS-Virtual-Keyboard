import {createKeyboard} from "./assets/scripts/createKeyboard";
import {click, mousedown, keydown, keyup} from "./assets/scripts/keyInfo";
import {addClass} from "./assets/scripts/addClass";
import {stopInput} from "./assets/scripts/input";

import "../src/assets/CSS/style.css";
import "../src/assets/CSS/style.scss";

createKeyboard();
document.getElementById("textarea").addEventListener('keydown', (e) => stopInput(e));
document.addEventListener('mousedown', (e) => mousedown(e));
document.addEventListener('mouseup', (e) => click(e));
document.addEventListener('keydown', (e) => keydown(e));
document.addEventListener('keyup', (e) => keyup(e));