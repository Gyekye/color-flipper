const colors = ['green','red','rgba(21,222,34,45)','#f2d4f5','#DAF7A6','#D35400','LightCoral','LightSalmon'];

// targeting elements

let btn = document.getElementById('btn');
let color = document.querySelector('.color');

// event listener
btn.addEventListener('click',function(){
    let randomNumber =  getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}