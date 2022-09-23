const colors = ["green", "red", "blue", "rgb(133, 122, 200)", "#f15025"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
// get a random nber btn 0-4
const randomnber = Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor = colors[randomnber];
color.innerText = colors[randomnber];
color.style.color = colors[randomnber];

});