export let pressedKeys = {
    left: false,
    right: false,
    up: false,
    shift: false,
    space: false,

    handler(key = "", down_or_up) {
        if(key === " ") key = "Space"
        this[key.replace("Arrow","").toLowerCase()] = down_or_up
        this[key.replace("a","left")] = down_or_up
        this[key.replace("d","right")] = down_or_up
        this[key.replace('shift')] = down_or_up
        this[key.replace('space')] = down_or_up
    },
}

document.addEventListener("keydown", (e) => pressedKeys.handler(e.key, true), false);
document.addEventListener("keyup", (e) => pressedKeys.handler(e.key, false), false);