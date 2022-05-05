


    document.addEventListener('keydown', function (event) {
        let activeKey = document.querySelector('.'+event.code);
        if (event.code == "CapsLock" || event.code == "ShiftRight" || event.code == "ShiftLeft") {
            let caseDown = document.querySelectorAll(".caseDown");
            caseDown.forEach(element => {
                if (!element.classList.contains("hidden")) {
                    element.classList.add("hidden");
                    element.nextElementSibling.classList.remove("hidden");
                }
            });
        }

        if (event.ctrlKey && event.code == 'AltLeft') {
            console.log("ZALUpA");
            let langKey = document.querySelectorAll(".eng");
            langKey.forEach(element => {
                if (!element.classList.contains("hidden")) {
                    element.classList.add("hidden");
                    element.nextElementSibling.classList.remove("hidden");
                    let caseDown = document.querySelectorAll(".caseDown");
                    caseDown.forEach(element => {
                        if (!element.classList.contains("hidden")) {
                            element.classList.add("hidden");
                        } else {
                            element.classList.remove("hidden");
                        }
                    });
                }
            })
        }

        activeKey.classList.add('active');
        let textarea = document.querySelector(".wrapper__textarea");
        textarea.value += event.key;
    });
    
    document.addEventListener('keyup', function (event) {
            let activeKey = document.querySelector('.'+event.code);
            activeKey.classList.remove('active');   
    });
    
    document.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('key') || e.target.closest(".eng") || e.target.closest(".rus")) {
            e.target.classList.add('active');
            let textarea = document.querySelector(".wrapper__textarea");
            textarea.value += 'asss';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('key')) {
            e.target.classList.remove('active');   
        }
    });

    document.addEventListener('keydown', (e) => {
        let activeKey = document.querySelector('.'+event.code);
        if (e.target.classList.contains('key')) {
            e.target.classList.remove('active');   
        }
    });




/*
let CodeRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
let CodeRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'];
let CodeRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'];
let CodeRow4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
let CodeRow5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
*/
