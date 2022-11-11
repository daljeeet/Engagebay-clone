AOS.init({
  offset: 300,
  duration: 1000,
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    dispalyOnInteraction: false,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let fcf = document.getElementById("Free_CRM_features");
let ms = document.getElementById("marketing_software");
let ss = document.getElementById("Sales_software");
let hds = document.getElementById("help_software");

let fcf1 = document.getElementById("fcf");
let ms1 = document.getElementById("ms");
let ss1 = document.getElementById("ss");
let hds1 = document.getElementById("hds");

fcf1.onclick = () => {
  ms.style.display = "none";
  fcf.style.display = "flex";
  ss.style.display = "none";
  hds.style.display = "none";

  ms1.style.borderBottom = "0";
  fcf1.style.borderBottom = "4px solid blue";
  ss1.style.borderBottom = "0";
  hds1.style.borderBottom = "0";
};

ss1.onclick = () => {
  ms.style.display = "none";
  fcf.style.display = "none";
  ss.style.display = "flex";
  hds.style.display = "none";

  ms1.style.borderBottom = "0";
  fcf1.style.borderBottom = "0";
  ss1.style.borderBottom = "4px solid blue";
  hds1.style.borderBottom = "0";
};

ms1.onclick = () => {
  ms.style.display = "flex";
  fcf.style.display = "none";
  ss.style.display = "none";
  hds.style.display = "none";

  ms1.style.borderBottom = "4px solid blue";
  fcf1.style.borderBottom = "0";
  ss1.style.borderBottom = "0";
  hds1.style.borderBottom = "0";
};

hds1.onclick = () => {
  ms.style.display = "none";
  fcf.style.display = "none";
  ss.style.display = "none";
  hds.style.display = "flex";

  ms1.style.borderBottom = "0";
  fcf1.style.borderBottom = "0";
  ss1.style.borderBottom = "0";
  hds1.style.borderBottom = "4px solid blue";
};

  import foot from '../components/foot.js'
  import nav from '../components/nav.js'
  let navbar = document.getElementById('navbar');
  navbar.innerHTML=nav()
  let footer = document.getElementById('footer_sec')
  footer.innerHTML= foot()

  let indexPg = document.getElementById('display')
  let drpdown = document.getElementById('free_tools_hover')
 indexPg.addEventListener('mouseover',function(){
   drpdown.style.display = 'none'

 })
