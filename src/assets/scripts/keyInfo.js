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

    export function lang (e) {
        if (e.ctrlKey && e.code == 'AltLeft') {
            let lang = document.querySelectorAll(".eng");
            console.log(lang);
            lang.forEach(element => {
                if (!element.classList.contains('hidden')) {
                    element.classList.add('hidden');
                    element.nextElementSibling.classList.remove("hidden");
                    element.nextElementSibling.firstElementChild.classList.remove("hidden");
                    for (let i=0; i<4; i++) { element.children[i].classList.add('hidden') }
                } else {
                    element.classList.remove('hidden');
                    element.firstElementChild.classList.remove('hidden');
                    element.nextElementSibling.classList.add("hidden");
                    for (let i=0; i<4; i++) { element.nextElementSibling.children[i].classList.add('hidden') }
                }
            })

        }
    }

    export function shiftDown (e) {
        let CapsLock = document.querySelector(".CapsLock");
        if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && !CapsLock.classList.contains('active')) {
            let shift = document.querySelectorAll(".eng");
            shift.forEach(element => {
                if (!element.classList.contains('hidden')) {
                    element.children[0].classList.add('hidden');
                    element.children[1].classList.remove('hidden');
                } else {
                    element.nextElementSibling.firstElementChild.classList.add("hidden");
                    element.nextElementSibling.children[1].classList.remove("hidden");
                }
            })
        }
    }

    export function shiftUp (e) {
        let CapsLock = document.querySelector(".CapsLock");
        if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && !CapsLock.classList.contains('active')) {
            let shift = document.querySelectorAll(".eng");
            shift.forEach(element => {
                if (!element.classList.contains('hidden')) {
                    element.children[0].classList.remove('hidden');
                    element.children[1].classList.add('hidden');
                } else {
                    element.nextElementSibling.firstElementChild.classList.remove("hidden");
                    element.nextElementSibling.children[1].classList.add("hidden");
                }
            })
        }
    }

    export function CapsLock (e) {
        let CapsLock = document.querySelector(".CapsLock");
        if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && !CapsLock.classList.contains('active')) {
            let shift = document.querySelectorAll(".eng");
            shift.forEach(element => {
                if (!element.classList.contains('hidden')) {
                    element.children[0].classList.remove('hidden');
                    element.children[1].classList.add('hidden');
                } else {
                    element.nextElementSibling.firstElementChild.classList.remove("hidden");
                    element.nextElementSibling.children[1].classList.add("hidden");
                }
            })
        }
    }




/*
let CodeRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
let CodeRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'];
let CodeRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'];
let CodeRow4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
let CodeRow5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
*/
