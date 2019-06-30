

const handleCarousel=()=>{
  let counter=0;
  const positions=[["left","center","right"],["center","right","left"],["right","left","center"]]
  const slides=document.querySelectorAll(".carousel__Element");
  const prevButton=document.querySelector(".carouselElement__button--prev");
  const nextButton=document.querySelector(".carouselElement__button--next");

  const updateSlides=(direction)=>{
    {direction=="next"?counter++:counter--}
    {counter<0?counter=positions.length-1:null}
    {counter>=positions.length?counter=0:null}
    slides.forEach((slide,index)=>{
        slide.className=`carousel__Element ${positions[counter][index]}`
    })
   
  }
  prevButton.addEventListener("click",()=>updateSlides("prev"))
  nextButton.addEventListener("click",()=>updateSlides("next"))
}







 
const handleMainMenu=()=>{
const mainMenu=document.querySelector(".main__header");
const moveMenu=(e)=>{
  const links=document.querySelectorAll(".nav__link");
  if(window.pageYOffset>=mainMenu.clientHeight){
    mainMenu.classList="main__header main__header--fixed"
  }else{
    mainMenu.classList="main__header"}}
window.addEventListener("scroll",moveMenu)
window.addEventListener("touchmove",moveMenu)
}


const handleClientSlider=()=>{
  
  const slider=document.querySelector(".clientsCotent__thumbnailSlider");
  const thumbs=document.querySelectorAll(".thumbnailSlider__element")
  const reviev=document.querySelector(".reviev__description");
  const revievname=document.querySelector(".reviev__name");
  const clientImage=document.querySelector(".imageSlider")
  const clients=[{name:"Betty Boo",function:"Pani kierowniczka",reviev:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi odio aperiam mollitia libero tenetur dolor consequuntur ipsam rem ducimus neque, minima ullam molestias atque ea harum asperiores aut enim!",image:"../images/client1.png",index:0},{name:"Ammy Doe",function:"CEO",reviev:"Lorem ipsuur adipisicing elit. Consequatur animi odio aperiam mollitia libero tenetur dolor consequuntur ipsam rem ducimus neque, minima ullam molestias atque ea harum asperiores aut enim!",image:"../images/worker1.png",index:1},{name:"Mark Blue",function:"CEO",reviev:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi odio aperiam mollitia libero tenetur dolor consequuntur ipsam rem ducimus neque, minima ullam molestiaiores aut enim!",image:"../images/worker2.png",index:2}]

  const updateClientSlider=(e)=>{
    
    if(e.target.dataset.index){
      
      thumbs.forEach((el)=>{
        el.classList.remove("thumbnailSlider__element--active")
      })
      e.target.classList.add("thumbnailSlider__element--active");
      reviev.textContent=clients[e.target.dataset.index].reviev;
      revievname.textContent=`${clients[e.target.dataset.index].name}, ${clients[e.target.dataset.index].function}`;
      clientImage.style.transform=`translate(-${e.target.dataset.index*33.33}%)`
      
    }
    
    
  }

  slider.addEventListener("click",updateClientSlider)
 
}

const mainNavButton=document.querySelector(".main__menuSwich")
const handleMainNavOn=()=>{
  mainNavButton.classList.toggle("on");
  const mainMenu=document.querySelector(".main__nav")
  mainMenu.classList.toggle("off")
}

mainNavButton.addEventListener("click",handleMainNavOn)


handleCarousel();
handleMainMenu();
handleClientSlider();