    export const eng = ["KeyQ", "KeyW", "KeyR", "KeyT", "KeyE", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyL", "KeyK", "KeyJ", "KeyH", "KeyG", "KeyF", "KeyD", "KeyS", "KeyA", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"];
    export const ru = ["Backquote", "KeyQ", "KeyW", "KeyR", "KeyT", "KeyE", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyL", "KeyK", "KeyJ", "KeyH", "KeyG", "KeyF", "KeyD", "KeyS", "KeyA", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Period", "Comma", "Semicolon", "Quote", "BracketRight", "BracketLeft"];
    const engShift = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "BracketLeft", "BracketRight", "Semicolon", "Quote", "Backslash", "Comma", "Period", "Slash"];
    const ruShift = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backslash", "Slash"];

    import {inputKeyboard, log} from "./input";
    
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
        shiftKeyDown (e);
        langSwitch (e);
        inputKeyboard (e);
    }

    export function keyup (e) {
        let key = document.querySelector('.'+e.code);
        if (!key.classList.contains('CapsLock')) {
            key.classList.remove("active");
        }
        shiftKeyUp (e);
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
        mouseShiftDown(e);
        inputKeyboard (e);
    }
    
    
    export function click (e) {
        let key = e.path[2];
        if (key.classList.contains("key") && !key.classList.contains("CapsLock")) {
            key.classList.remove('active');   
        } else if (e.target.classList.contains("key")) {
            e.target.classList.remove('active');
        }
        mouseShiftClick(e);
    }

    function langSwitch (e) {
        if (e.ctrlKey && (e.code == 'AltLeft' || e.code == 'AltRight')) {
            let lang = document.querySelectorAll(".eng");
            if (!document.querySelector(".CapsLock").classList.contains("active")) {
                lang.forEach(element => {
                    if (!element.classList.contains('hidden')) {
                        localStorage.lang = "ru";
                        element.classList.add('hidden');
                        element.nextElementSibling.classList.remove("hidden");
                        element.nextElementSibling.firstElementChild.classList.remove("hidden");
                        for (let i=0; i<4; i++) { element.children[i].classList.add('hidden') }
                    } else {
                        localStorage.lang = "eng";
                        element.classList.remove('hidden');
                        element.firstElementChild.classList.remove('hidden');
                        element.nextElementSibling.classList.add("hidden");
                        for (let i=0; i<4; i++) { element.nextElementSibling.children[i].classList.add('hidden') }
                    }
                })
            } else {
                lang.forEach(element => {
                    localStorage.lang = "ru";
                    if (!element.classList.contains('hidden')) {
                        element.classList.add('hidden');
                        element.nextElementSibling.classList.remove("hidden");
                        element.nextElementSibling.firstElementChild.classList.remove("hidden");
                        for (let i=0; i<4; i++) { element.children[i].classList.add('hidden') }
                    } else {
                        localStorage.lang = "eng";
                        element.classList.remove('hidden');
                        element.firstElementChild.classList.remove('hidden');
                        element.nextElementSibling.classList.add("hidden");
                        for (let i=0; i<4; i++) { element.nextElementSibling.children[i].classList.add('hidden') }
                    }
                })
                CapsLockUp();
            }
        }
    }

    function shiftKeyDown (e) {
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

    function shiftKeyUp (e) {
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

    export function CapsLockUp () {
        let lang = document.querySelector(".KeyQ");
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

    function mouseShiftDown (e) {
        let key = e.path[2];
        let caps = document.querySelector(".CapsLock");
        if (e.target.classList.contains("key")) {
            key = e.target;
        }
        if (caps.classList.contains("active") && (key.classList.contains("ShiftLeft") || key.classList.contains("ShiftRight"))) {
            if (!key.firstElementChild.classList.contains("hidden")) {
                eng.forEach(element => {
                    let capsKey = document.querySelector('.'+element);
                    capsKey.firstElementChild.children[0].classList.remove('hidden');
                    capsKey.firstElementChild.children[1].classList.add('hidden');   
                })
                engShift.forEach(element => {
                    let capsKey = document.querySelector('.'+element);
                    capsKey.firstElementChild.children[0].classList.add('hidden');
                    capsKey.firstElementChild.children[1].classList.remove('hidden');   
                })
            } else {
                ru.forEach(element => {
                    let capsKey = document.querySelector('.'+element);
                    capsKey.lastElementChild.children[0].classList.remove('hidden');
                    capsKey.lastElementChild.children[1].classList.add('hidden');   
                })
                ruShift.forEach(element => {
                    let capsKey = document.querySelector('.'+element);
                    capsKey.lastElementChild.children[0].classList.add('hidden');
                    capsKey.lastElementChild.children[1].classList.remove('hidden');   
                })
            }
            
        } else if (!caps.classList.contains("active") && (key.classList.contains("ShiftLeft") || key.classList.contains("ShiftRight"))) {
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

    function mouseShiftClick (e) {
        let key = e.path[2];
        let caps = document.querySelector(".CapsLock");
        if (e.target.classList.contains("key")) {
            key = e.target;
        }
        if (caps.classList.contains("active") && (key.classList.contains("ShiftLeft") || key.classList.contains("ShiftRight"))) {
            if (!key.firstElementChild.classList.contains("hidden")) {
                eng.forEach(element => {
                    let capsKey = document.querySelector('.'+element);
                    capsKey.firstElementChild.children[0].classList.add('hidden');
                    capsKey.firstElementChild.children[1].classList.remove('hidden');   
                })
                engShift.forEach(element => {
                    let capsKey = document.querySelector('.'+element);
                    capsKey.firstElementChild.children[0].classList.remove('hidden');
                    capsKey.firstElementChild.children[1].classList.add('hidden');   
                })
            } else {
                ru.forEach(element => {
                    let capsKey = document.querySelector('.'+element);
                    capsKey.lastElementChild.children[0].classList.add('hidden');
                    capsKey.lastElementChild.children[1].classList.remove('hidden');   
                })
                ruShift.forEach(element => {
                    let capsKey = document.querySelector('.'+element);
                    capsKey.lastElementChild.children[0].classList.remove('hidden');
                    capsKey.lastElementChild.children[1].classList.add('hidden');   
                })
            }
            
        } else if (!caps.classList.contains("active") && (key.classList.contains("ShiftLeft") || key.classList.contains("ShiftRight"))) {
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

    


    