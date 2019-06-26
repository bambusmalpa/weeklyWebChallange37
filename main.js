
const handleCarousel=()=>{
var carouselButtons = document.querySelectorAll(".glider__buttonGroup");

carouselButtons.forEach(group=>{
    group.addEventListener("click",()=>{
    const buttons=group.querySelectorAll("button");
    buttons.forEach(el=>{
        el.click()
    })
    
})})


window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider__left'), {
        slidesToShow: 1.0001,
        slidesToScroll: 1,
        scrollLock:true,
        rewind:true,
        Default: 0.5,
        arrows: {
            prev: '.glider-prev-left',
            next: '.glider-next-left'
          }
    })
   new Glider(document.querySelector('.glider__center'), {
        slidesToShow: 1.0001,
        slidesToScroll: 1,
        rewind:true,
       
        draggable: true,
        
        arrows: {
            prev: '.glider-prev-center',
            next: '.glider-next-center'
          }
    })
    new Glider(document.querySelector('.glider__right '), {
        slidesToShow: 1.0001,
        slidesToScroll: 1,
        scrollLock:true,
        Default: 0.5,
        rewind:true,
        arrows: {
            prev: '.glider-prev-right',
            next: '.glider-next-right'
          }
    })

  })}
handleCarousel();
 

const mainMenu=document.querySelector(".home__header");
const moveMenu=(e)=>{
  const links=document.querySelectorAll(".nav__link");
  if(window.pageYOffset>=mainMenu.clientHeight){
    mainMenu.classList="home__header home__header--fixed"
  }else{
    mainMenu.classList="home__header"
    
  }

}
window.addEventListener("scroll",moveMenu)