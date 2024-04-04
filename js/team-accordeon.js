const items = document.querySelectorAll('.team__item');
const title = document.querySelector('.team__item-title')


for (let i=0; i<items.length; i++){

  items[i].addEventListener("click", function(el){
    for (let j=0; j<items.length; j++){
      if (j != i){
        items[j].classList.remove('is-active');
      }
    }
    el.currentTarget.classList.add('is-active');  
})
};
