const menu_items = document.querySelectorAll(".menu__item");

for (let i=0; i<menu_items.length; i++){
  menu_items[i].addEventListener('click', function(event){
    event.preventDefault;
    for (let j=0; j<menu_items.length; j++){
      if (i!=j){
        menu_items[j].classList.remove('is-active');
      }
    }
    event.currentTarget.classList.toggle('is-active');
  })
}