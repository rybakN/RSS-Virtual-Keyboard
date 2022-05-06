    export function keydown (e) {
        let key = document.querySelector('.'+e.code);
        if (e.code == "CapsLock") {
            if (key.classList.contains('active')) {
                key.classList.remove('active');
                CapsLockDown();
            } else { 
                key.classList.add('active');
                CapsLockUp();
            }
        } else { key.classList.add("active"); }
    }

    export function keyup (e) {
        let key = document.querySelector('.'+e.code);
        if (!key.classList.contains('CapsLock')) {
            key.classList.remove("active");
        }
    }

    export function mousedown (e) {
        let key = e.path[2];
        if (key.classList.contains("CapsLock") && key.classList.contains("key")) {
            if (key.classList.contains('active')) {
                key.classList.remove('active');
                CapsLockDown();
            } else {
                key.classList.add('active');
                CapsLockUp();
            }
        } else if (!key.classList.contains("CapsLock") && key.classList.contains("key")) {
            key.classList.add('active');
        } else if (e.target.classList.contains("key")) {
            e.target.classList.add('active');
        }
    }
    
    
    export function click (e) {
        let key = e.path[2];
            if (key.classList.contains("key") && !key.classList.contains("CapsLock")) {
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
        } else if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && CapsLock.classList.contains('active')) {
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
            CapsLockDown();
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
        } else if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && CapsLock.classList.contains('active')) {
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
            CapsLockUp();
        }
    }

    function CapsLockUp () {
        let lang = document.querySelector(".KeyQ");
        console.log(lang);
        console.log(lang.firstElementChild);
        if (!lang.firstElementChild.classList.contains('hidden')) {
            eng.forEach(element => {
                let capsKey = document.querySelector('.'+element);
                capsKey.firstElementChild.children[0].classList.add('hidden');
                capsKey.firstElementChild.children[1].classList.remove('hidden');   
                }
            )     
        } else {
            ru.forEach(element => {
                let capsKey = document.querySelector('.'+element);
                capsKey.lastElementChild.children[0].classList.add('hidden');
                capsKey.lastElementChild.children[1].classList.remove('hidden');
                }
            )
        }
    }

    function CapsLockDown () {
        let lang = document.querySelector(".KeyQ");
        if (!lang.firstElementChild.classList.contains('hidden')) {
            eng.forEach(element => {
                let capsKey = document.querySelector('.'+element);
                capsKey.firstElementChild.children[0].classList.remove('hidden');
                capsKey.firstElementChild.children[1].classList.add('hidden');   
                }
            )     
        } else {
            ru.forEach(element => {
                let capsKey = document.querySelector('.'+element);
                capsKey.lastElementChild.children[0].classList.remove('hidden');
                capsKey.lastElementChild.children[1].classList.add('hidden');
                }
            )
        }
        
    }


    const eng = ["KeyQ", "KeyW", "KeyR", "KeyT", "KeyE", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyL", "KeyK", "KeyJ", "KeyH", "KeyG", "KeyF", "KeyD", "KeyS", "KeyA", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"];
    const ru = ["KeyQ", "KeyW", "KeyR", "KeyT", "KeyE", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyL", "KeyK", "KeyJ", "KeyH", "KeyG", "KeyF", "KeyD", "KeyS", "KeyA", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Period", "Comma", "Semicolon", "Quote", "BracketRight", "BracketLeft"];
/*
let CodeRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
let CodeRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'];
let CodeRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'];
let CodeRow4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
let CodeRow5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
*/
