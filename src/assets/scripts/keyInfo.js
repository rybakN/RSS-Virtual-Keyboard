    export function keydown (e) {
        let key = document.querySelector('.'+e.code);
        key.classList.add("active");
    }

    export function keyup (e) {
        let key = document.querySelector('.'+e.code);
        key.classList.remove("active");
    }

    export function mousedown (e) {
        let key = e.path[2];
            if (key.classList.contains("key")) {
                key.classList.add('active');
            } else if (e.target.classList.contains("key")) {
                e.target.classList.add('active');
            } else console.log("ghbdtn");
    }
    
    
    export function click (e) {
        let key = e.path[2];
            if (key.classList.contains("key")) {
                key.classList.remove('active');   
            } else if (e.target.classList.contains("key")) {
                e.target.classList.remove('active');
            }
    }




/*
let CodeRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
let CodeRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'];
let CodeRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'];
let CodeRow4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
let CodeRow5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
*/
