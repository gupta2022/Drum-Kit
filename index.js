document.querySelector(".w.drum").addEventListener("click",Clickedw);
document.querySelector(".a.drum").addEventListener("click",Clickeda);
document.querySelector(".s.drum").addEventListener("click",Clickeds);
document.querySelector(".d.drum").addEventListener("click",Clickedd);
document.querySelector(".j.drum").addEventListener("click",Clickedj);
document.querySelector(".k.drum").addEventListener("click",Clickedk);
document.querySelector(".l.drum").addEventListener("click",Clickedl);
document.addEventListener("keydown",function(event){
  switch (event.key) {
    case 'w':
          Clickedw();
          break;
    case 'a':
          Clickeda();
          break;
    case 's':
          Clickeds();
          break;
    case 'd':
          Clickedd();
          break;
    case 'j':
          Clickedj();
          break;
    case 'k':
          Clickedk();
          break;
    case 'l':
          Clickedl();
          break;
  }
  //Callback as return
});

function Clickedw(){
  var audio= new Audio("sounds/crash.mp3");
  var activeButton=document.querySelector(".w");
  activeButton.classList.add("pressed");
  audio.play();
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
function Clickeda(){
  var audio= new Audio("sounds/kick-bass.mp3");
  var activeButton=document.querySelector(".a");
 activeButton.classList.add("pressed");
  audio.play();
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
function Clickeds(){
  var audio= new Audio("sounds/snare.mp3");
  var activeButton=document.querySelector(".s");
  activeButton.classList.add("pressed");
  audio.play();
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
function Clickedd(){
  var audio= new Audio("sounds/tom-1.mp3");
  var activeButton=document.querySelector(".d");
  activeButton.classList.add("pressed");
  audio.play();
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
function Clickedj(){
  var audio= new Audio("sounds/tom-2.mp3");
  var activeButton=document.querySelector(".j");
  activeButton.classList.add("pressed");
  audio.play();
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
function Clickedk(){
  var audio= new Audio("sounds/tom-3.mp3");
  var activeButton=document.querySelector(".k");
  activeButton.classList.add("pressed");
  audio.play();
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
function Clickedl(){
  var audio= new Audio("sounds/tom-4.mp3");
  var activeButton=document.querySelector(".l");
  activeButton.classList.add("pressed");
  audio.play();
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
