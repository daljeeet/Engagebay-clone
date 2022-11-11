import drpdown from '../components/page_links.js'

let dropdown = document.getElementById('mrkt_dropdown')
dropdown.innerHTML=drpdown()
window.addEventListener('click',function(e){
    let toggle_div = document.getElementById('mrkt_dropdown')
    let btn = document.getElementById('marketing_content')
    let img = document.getElementById('mrkt_logo_img')
    let text = document.getElementById('mrkt_active')
    let drpdown = document.getElementById('mrkt_dropdown')
    if(e.target==btn||e.target==img||e.target==text||e.target==drpdown){
    }else{
        toggle_div.style.display='none'
    }
})
let mrktBtn = document.getElementById('marketing_content')
mrktBtn.onclick=function(){
    let toggle_div = document.getElementById('mrkt_dropdown')
    if(toggle_div.style.display===''||toggle_div.style.display=='none'){
        toggle_div.style.display='flex'
    }else{
        toggle_div.style.display='none'

    }
}
let one = document.getElementById('marketing_page')
    let two = document.getElementById('sales_page')
    let three = document.getElementById('service_page')
    let four = document.getElementById('live_chat_page')