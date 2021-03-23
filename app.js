
const colorsName = [ 'red', 'blue', 'lightblue', 'green', 'violet', 'yellow', 'orange', 'darkorange', 'brown', 'gray', 'lightgray' ];

const container = document.querySelector('section');
const heading = document.querySelector('h2');
const bacground = document.querySelector('#selectecolor');

for( let color of colorsName){
    let box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);

    box.style.backgroundColor = color;

    box.addEventListener('click', function(){
        heading.innerText = "Your Favorite Color Is: ";
        bacground.innerText = box.style.backgroundColor;
        bacground.style.backgroundColor = box.style.backgroundColor;
    });

    
}
