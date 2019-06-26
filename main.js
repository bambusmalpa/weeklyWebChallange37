
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

 
const handleMainMenu=()=>{
const mainMenu=document.querySelector(".home__header");
const moveMenu=(e)=>{
  const links=document.querySelectorAll(".nav__link");
  if(window.pageYOffset>=mainMenu.clientHeight){
    mainMenu.classList="home__header home__header--fixed"
  }else{
    mainMenu.classList="home__header"}}
window.addEventListener("scroll",moveMenu)}


const handleClientSlider=()=>{
  
  const slider=document.querySelector(".clientsCotent__thumbnailSlider");
  const thumbs=document.querySelectorAll(".thumbnailSlider__element")
  const reviev=document.querySelector(".reviev__description");
  const revievname=document.querySelector(".reviev__name");
  const clientImage=document.querySelector(".imageSlider")
  const clients=[{name:"Betty Boo",function:"Betty Boo",reviev:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi odio aperiam mollitia libero tenetur dolor consequuntur ipsam rem ducimus neque, minima ullam molestias atque ea harum asperiores aut enim!",image:"../images/client1.png",index:0},{name:"Ammy Doe",function:"CEO",reviev:"Lorem ipsuur adipisicing elit. Consequatur animi odio aperiam mollitia libero tenetur dolor consequuntur ipsam rem ducimus neque, minima ullam molestias atque ea harum asperiores aut enim!",image:"../images/worker1.png",index:1},{name:"Mark Blue",function:"CEO",reviev:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi odio aperiam mollitia libero tenetur dolor consequuntur ipsam rem ducimus neque, minima ullam molestiaiores aut enim!",image:"../images/worker2.png",index:2}]

  const updateClientSlider=(e)=>{
    
    if(e.target.dataset.index){
      console.log(thumbs)
      thumbs.forEach((el)=>{
        el.classList.remove("thumbnailSlider__element--active")
      })
      e.target.classList.add("thumbnailSlider__element--active");
      reviev.textContent=clients[e.target.dataset.index].reviev;
      revievname.textContent=`${clients[e.target.dataset.index].name}, ${clients[e.target.dataset.index].function}`;
      clientImage.style.transform=`translate(-${e.target.dataset.index*33.33}%)`
      console.log(e.target.dataset.index*100)
    }
    
    
  }

  slider.addEventListener("click",updateClientSlider)
 
}





handleCarousel();
handleMainMenu();
handleClientSlider();