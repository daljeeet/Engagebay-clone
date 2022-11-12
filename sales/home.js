import nav from "../components/login_nav.js"
let navbar = document.getElementById('nav')
navbar.innerHTML = nav('Dashboard','Shubham','Deals','Tasks','Automations','Calendar')
let btn = document.getElementById('mark_contacts')
btn.onclick = function(){
    console.log('hello')
}