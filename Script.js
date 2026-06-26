/*==========================================
    BENGKEL LAS GUNAWAN
    SCRIPT.JS
==========================================*/

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.8s";

});


/* ===========================
   NAVBAR SCROLL
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.style.background = "#111";

        navbar.style.padding = "10px 0";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.45)";

        navbar.style.padding = "15px 0";

        navbar.style.boxShadow = "none";

    }

});


/* ===========================
   AOS
=========================== */

AOS.init({

    duration:1000,

    once:true

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ===========================
   COUNTER
=========================== */

const counters=document.querySelectorAll("h3");

const speed=120;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

const inc=Math.ceil(target/speed);

if(count<target){

count+=inc;

counter.innerText=count+"+";

setTimeout(update,15);

}else{

counter.innerText=target+"+";

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

if(!isNaN(parseInt(counter.innerText))){

observer.observe(counter);

}

});


/* ===========================
   BACK TO TOP
=========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topBtn.id="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="orange";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ===========================
   TYPING EFFECT
=========================== */

const heroTitle=document.querySelector(".hero h1");

const originalText=heroTitle.innerText;

heroTitle.innerHTML="";

let i=0;

function typing(){

if(i<originalText.length){

heroTitle.innerHTML+=originalText.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();


/* ===========================
   IMAGE HOVER
=========================== */

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.05)";

img.style.transition=".4s";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});


/* ===========================
   BUTTON RIPPLE
=========================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

let x=e.clientX-button.offsetLeft;

let y=e.clientY-button.offsetTop;

let ripple=document.createElement("span");

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ===========================
   SCROLL PROGRESS BAR
=========================== */

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="5px";
progress.style.background="orange";
progress.style.width="0%";
progress.style.zIndex="99999";

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(scrollTop/height)*100;

progress.style.width=scrolled+"%";

});


/* ===========================
   CONSOLE
=========================== */

console.log("Bengkel Las Gunawan Website Loaded Successfully");