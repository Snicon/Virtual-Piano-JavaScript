const kbdEls = document.querySelectorAll("kbd");

document.addEventListener("keypress", (event) => {
    switch (event.code) {
        case "KeyA":
            new Audio("./assets/A.mp3").play();
            break;
        case "KeyS":
            new Audio("./assets/S.mp3").play();
            break;
        case "KeyD":
            new Audio("./assets/D.mp3").play();
            break
        case "KeyF":
            new Audio("./assets/F.mp3").play();
            break
        case "KeyG":
            new Audio("./assets/G.mp3").play();
            break;
        case "KeyH":
            new Audio("./assets/H.mp3").play();
            break
        case "KeyJ":
            new Audio("./assets/J.mp3").play();
            break;
        case "KeyW":
            new Audio("./assets/W.mp3").play();
            break
        case "KeyE":
            new Audio("./assets/E.mp3").play();
            break
        case "KeyT":
            new Audio("./assets/T.mp3").play();
            break;
        case "KeyY":
            new Audio("./assets/Y.mp3").play();
            break
        case "KeyU":
            new Audio("./assets/U.mp3").play();
            break;
        default:
            console.log("Warning: This key does not do anything.")
    }
})