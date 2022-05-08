import {keyboard} from "./createKeyboard";

const keyInput = ['ArrowLeft', 'ArrowDown', "ArrowUp",'ArrowRight', "Tab","Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "BracketLeft", "BracketRight", "Semicolon", "Quote", "Backslash", "Comma", "Period", "Slash", "KeyQ", "KeyW", "KeyR", "KeyT", "KeyE", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyL", "KeyK", "KeyJ", "KeyH", "KeyG", "KeyF", "KeyD", "KeyS", "KeyA", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Period", "Comma", "Semicolon", "Quote", "BracketRight", "BracketLeft"];

export function stopInput(e) {
    e.preventDefault();
}

export function inputKeyboard (e) {
    let contains = keyInput.includes(e.code);
    let key = document.querySelector("."+e.code);
    let lang = document.querySelector(".eng").classList.contains("hidden");
    let big = document.querySelector(".ShiftLeft").classList.contains("active") || document.querySelector(".ShiftRight").classList.contains("active") || document.querySelector(".CapsLock").classList.contains("active");
    let small = (document.querySelector(".ShiftLeft").classList.contains("active") || document.querySelector(".ShiftRight").classList.contains("active")) && document.querySelector(".CapsLock").classList.contains("active");
    let count = document.getElementById("textarea").selectionStart;
    
    if (!lang && !big && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (e.code == keyboard[i][j].code) {
                    if ()
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key1);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                    console.log(document.getElementById("textarea").selectionStart);
                }
            }
        }
    } else if (!lang && big && !small && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (e.code == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key2);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                    console.log(document.getElementById("textarea").selectionStart);
                }
            }
        }
    } else if (!lang && small && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (e.code == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key1);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                    console.log(document.getElementById("textarea").selectionStart);
                }
            }
        }
    } else if (lang && !big && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (e.code == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key3);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                    console.log(document.getElementById("textarea").selectionStart);
                }
            }
        }
    } else if (lang && big && !small && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (e.code == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key4);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                    console.log(document.getElementById("textarea").selectionStart);
                }
            }
        }
    } else if (lang && small && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (e.code == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key3);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                    console.log(document.getElementById("textarea").selectionStart);
                }
            }
        }
    }
}