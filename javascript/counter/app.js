let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((item) => {
item.addEventListener('click', (e) => {
const classes = e.target.classList;

if(classes.contains('decrease')){
    count--;
}
else if(classes.contains('increase')){
    count++;
}
else{
    count = 0;
}
if (count > 0) {
    value.style.color = "green";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  if (count === 0) {
    value.style.color = '#222';
}
value.innerText = count
});
});