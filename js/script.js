const log = document.getElementById('sprite');

document.addEventListener('keypress', logKey);

var position = 64;
const diff = 64;
var count = 0;
var count2 = 0;



function logKey(input) {


    if (input.key == "s") {


        document.getElementById('sprite').style.backgroundPosition = `${position}px 0px`;

        if (position < 256) {
            position = position + diff;
        } else {
            position = 64;
        }

        count += 8;

        document.getElementById('sprite').style.top = count + "px";
    }

    if (input.key == "a") {


        document.getElementById('sprite').style.backgroundPosition = `${position}px 192px`;


        if (position < 256) {
            position = position + diff;
        } else {
            position = 64;
        }

        count2 -= 8;

        document.getElementById('sprite').style.left = count2 + "px";

    }

    if (input.key == "d") {


        document.getElementById('sprite').style.backgroundPosition = `${position}px 128px`;


        if (position < 256) {
            position = position + diff;
        } else {
            position = 64;
        }

        count2 += 8;

        document.getElementById('sprite').style.left = count2 + "px";

    }

    if (input.key == "w") {

        document.getElementById('sprite').style.backgroundPosition = `${position}px 64px`;


        if (position < 256) {
            position = position + diff;
        } else {
            position = 64;
        }

        count -= 8;

        document.getElementById('sprite').style.top = count + "px";

    }

}