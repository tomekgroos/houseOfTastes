

const box = document.querySelector('.testDiv');


window.onload = () => {
    
    setTimeout(() => {
        box.classList.add('changeTestDiv-bottom');
    }, 1000);

    setTimeout(() => {
        box.classList.add('changeTestDiv-leftAndRight');
    }, 2000);

    setTimeout(() => {
        box.classList.add('changeTestDiv-top');
    }, 3000);
    
}