
let color_arr=["Blue","Brown","Cyan","Gold","Green","Grey","Maroon","Orange","Pink","Purple","Red","Magenta","Peach","Teal"]





let arr_divv=document.querySelectorAll(".total_count")

for(let i=0;i<5;i++){
    let num=Math.floor(Math.random() * color_arr.length-1)
    arr_divv[i].style.color=color_arr[num]
}



let arr_div=document.querySelectorAll(".boxes")
for(let i=0;i<arr_div.length;i++){
    if(i==0 || i==arr_div.length-1){
      appen(arr_div[i])
    }else{
        appen2(arr_div[i])
    }
}



function appen(give_div){
for(let i=0;i<20;i++){
let parent=give_div
let child=document.createElement("div")
child.className="content_apped"
let btn=document.createElement("button")
btn.className="delete"
btn.addEventListener("click",function(){
    remove(child) 
})
btn.innerHTML=`
<i class="fa-solid fa-trash"></i>
`
child.append(btn)
parent.append(child)

}
}

function appen2(give_div){
for(let i=0;i<20;i++){
let parent=give_div
let child=document.createElement("div")
child.className="content_apped2"
child.addEventListener("click",function(){
    show()
})
let btn=document.createElement("button")
btn.className="delete"
btn.addEventListener("click",function(){
    remove(child) 
})
btn.innerHTML=`
<i class="fa-solid fa-trash"></i>
`
child.append(btn)
parent.append(child)
            
}
}

function remove(child){
    child.remove()
}

window.addEventListener("click",function(event){
 
    console.log(event.target)

})

function show(){
    let  one=document.getElementById("sales_cards")
    one.style.display="none"
    let two=document.getElementById("big_div")
    two.style.display="block"
}


let hh=document.getElementById("close")

hh.addEventListener("click",close)


function close(){
        let  one=document.getElementById("sales_cards")
    one.style.display="grid"
    let two=document.getElementById("big_div")
    two.style.display="none"
}



let image_arr=["https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-13.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-11.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-6.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-3.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-16.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-13.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-8.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-16.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-6.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-17.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-5.svg",
"https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-17.svg" ]