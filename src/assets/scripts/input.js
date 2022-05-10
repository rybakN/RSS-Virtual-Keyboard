import {keyboard} from "./createKeyboard";

const keyInput = ['ArrowLeft', 'ArrowDown', "ArrowUp",'ArrowRight', "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "BracketLeft", "BracketRight", "Semicolon", "Quote", "Backslash", "Comma", "Period", "Slash", "KeyQ", "KeyW", "KeyR", "KeyT", "KeyE", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyL", "KeyK", "KeyJ", "KeyH", "KeyG", "KeyF", "KeyD", "KeyS", "KeyA", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Period", "Comma", "Semicolon", "Quote", "BracketRight", "BracketLeft"];

export function stopInput(e) {
    e.preventDefault();
}

export function inputKeyboard (e) {
    let keyCode;
    if (e.type == "mousedown") {
        let key = e.path[2].classList.contains("key");
        if (key) {
            let keyClass = e.path[2].classList.value.split(' ');
            keyCode = keyClass[1];
        } else if (e.target.classList.contains("key")) {
            let keyClass = e.target.classList.value.split(' ');
            keyCode = keyClass[1];
        }
    } else if (e.type == "keydown") {
        keyCode = e.code;
    }

    let contains = keyInput.includes(keyCode);
    let lang = document.querySelector(".eng").classList.contains("hidden");
    let big = document.querySelector(".ShiftLeft").classList.contains("active") || document.querySelector(".ShiftRight").classList.contains("active") || document.querySelector(".CapsLock").classList.contains("active");
    let small = (document.querySelector(".ShiftLeft").classList.contains("active") || document.querySelector(".ShiftRight").classList.contains("active")) && document.querySelector(".CapsLock").classList.contains("active");
    let count = document.getElementById("textarea").selectionStart;
    
    if (!lang && !big && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (keyCode == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key1);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                }
            }
        }
    } else if (!lang && big && !small && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (keyCode == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key2);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                }
            }
        }
    } else if (!lang && small && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (keyCode == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key1);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                }
            }
        }
    } else if (lang && !big && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (keyCode == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key3);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                }
            }
        }
    } else if (lang && big && !small && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (keyCode == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key4);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                }
            }
        }
    } else if (lang && small && contains) {
        for (let i=0; i<keyboard.length; i++) {
            for (let j=0; j<keyboard[i].length; j++) {
                if (keyCode == keyboard[i][j].code) {
                    let value = document.getElementById("textarea").value.split('');
                    value.splice(count,0,keyboard[i][j].key3);
                    document.getElementById("textarea").value = value.join("");
                    count++;
                    document.getElementById("textarea").selectionStart = count;
                    document.getElementById("textarea").selectionEnd= count;
                }
            }
        }
    } else if (keyCode == "Space") {
        let value = document.getElementById("textarea").value.split('');
        value.splice(count,0," ");
        document.getElementById("textarea").value = value.join("");
        count++;
        document.getElementById("textarea").selectionStart = count;
        document.getElementById("textarea").selectionEnd= count;
    } else if (keyCode == "Tab") {
        let value = document.getElementById("textarea").value.split('');
        for (let i=0; i<4; i++) {
            value.splice(count,0," ");
            document.getElementById("textarea").value = value.join("");
            count++;
        }
        document.getElementById("textarea").selectionStart = count;
        document.getElementById("textarea").selectionEnd= count;
    } else if (keyCode == "Enter") {
        let value = document.getElementById("textarea").value.split('');
        value.splice(count,0,"\n");
        document.getElementById("textarea").value = value.join("");
        count++;
        document.getElementById("textarea").selectionStart = count;
        document.getElementById("textarea").selectionEnd= count;
    } else if (keyCode == "Backspace") {
        let value = document.getElementById("textarea").value.split('');
        value.splice(count-1,1);
        document.getElementById("textarea").value = value.join("");
        count = (count > 0) ? count-1 : 0;
        document.getElementById("textarea").selectionStart = count;
        document.getElementById("textarea").selectionEnd= count;
    } else if (keyCode == "Delete") {
        let value = document.getElementById("textarea").value.split('');
        value.splice(count,1);
        document.getElementById("textarea").value = value.join("");
        document.getElementById("textarea").selectionStart = count;
        document.getElementById("textarea").selectionEnd= count;
    }
}