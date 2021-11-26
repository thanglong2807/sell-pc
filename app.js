let slide = document.getElementsByClassName("slide")[0].clientWidth;
let slideAuto = document.getElementsByClassName("slide-auto-a")[0];
let img = slideAuto.getElementsByTagName("img");
let directional = 0;
let max = slide * img.length;
max -= slide;
function next() {
    if(directional < max)directional += slide;
    else directional = 0;
    slideAuto.style.marginLeft = '-' + directional + 'px';
    
};
next();
function back() {
    if(directional == 0)directional = max;
    else directional -= slide;
    slideAuto.style.marginLeft = '-' + directional + 'px';
    
};
back();

setInterval(function(){
    next();
},3000)