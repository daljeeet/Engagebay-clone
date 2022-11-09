AOS.init({
    offset: 500,
    duration: 1000,
})

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

  import foot from '../components/foot.js'
  import nav from '../components/nav.js'
  let navbar = document.getElementById('navbar');
  navbar.innerHTML=nav()
  let footer = document.getElementById('footer_sec')
  footer.innerHTML= foot()