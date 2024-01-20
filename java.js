'use strict'
var body = document.getElementsByTagName('body')[0];
var outerBox = document.getElementById('outerbox');
var circle = document.getElementById('circle');
var h1 = document.getElementById('h1');
var toggled = 0;

outerBox.addEventListener('click',function(){
    if(toggled){
    
    h1.classList.add('color');
    h1.innerText = ('DARK THEME')
    circle.style.marginLeft = '149px';
    body.classList.add('bck-clr');
    outerBox.style.backgroundColor = 'black';
    outerBox.style.border = '2px white solid';
    circle.style.backgroundColor = 'white';
    toggled = false;
}else{
    h1.classList.remove('color');
    h1.innerText = ('LIGHT THEME')
    circle.style.marginLeft = '1px';
    body.classList.remove('bck-clr');
    outerBox.style.backgroundColor = 'white';
    outerBox.style.border = '2px black solid';
    circle.style.backgroundColor = 'black';
    toggled = true;
}
    
})

