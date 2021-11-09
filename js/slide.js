let span = document.getElementsByTagName('span');
let apartment = document.getElementsByClassName('apartment');
let apartment_page = Math.ceil(apartment.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

let mobile_view = window.matchMedia("(max-width: 769px)");
if (mobile_view.matches) {
    movePer = 50.36;
    maxMove = 504;
}

let right_mover = () => {
    l = l + movePer;
    if (apartment == 1) {
        l = 0
    } for (const i of apartment) {
        if (l > maxMove) {l = l - movePer} 
        i.style.left = '-' + l + '%';
    }
}

let left_mover = () => {
    l = l - movePer;
    if (l <= 0) {l = 0}
    for (const i of apartment) {
        if (apartment_page > 0) 
        i.style.left = '-' + l + '%';
    }
}
span[1].onclick = () => {
    right_mover();
}
span[0].onclick = () => {
    left_mover();
}