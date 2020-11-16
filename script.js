let menu_icon_btn = document.querySelector('.menu_icon');

menu_icon_btn.addEventListener('click', ()=> {
	let menu_move = document.querySelector('.wrapper_nav');
	menu_move.classList.toggle('active');
});	


addEventListener('load', function(){

 	let wrapper_header = document.querySelector('.wrapper_header');

   addEventListener('scroll', () => {

    let scrollDistance = window.scrollY;

    if (scrollDistance > 69) {
      wrapper_header.classList.add('scrolled');
    } else if (scrollDistance < 70){
      wrapper_header.classList.remove('scrolled');
    }
  
    

  });
});


