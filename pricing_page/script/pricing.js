import navbar from '../../components/nav.js'
import foot from '../../components/foot.js'
let nav_div = document.getElementById("navbar")
nav_div.innerHTML=navbar()
let footer_div = document.getElementById('footer_div')
footer_div.innerHTML=foot()
let div1=document.getElementById("one")
let div2=document.getElementById("two")
let div4=document.getElementById("four")
let price0=["250 Contacts","Email Marketing","Autoresponders","Email Broadcast","Sequences","Lead Grabbers","Landing Pages","CRM","Helpdesk","Live Chat"]
 let price1=["750 Contacts","Email Templates","Web Pop-ups","Landing Page Builder","Lead Scoring","SMS Marketing","3rd Party Integrations","Social Suite","Tag Manager"]
 let price3=["Unlimited Contacts","Marketing Automation","Web Analytics","Proposal Analytics","SSO","Role Management","Goals","Custom Reporting","Dedicated Account Manager","Uptime SLA","Phone Support",]
let name=["FREE","BASIC","PRO"]
let arr1=[price0,price1,price3]
let arr=[div1,div2,div4]

for(let i=0;i<3;i++){
let child0=document.createElement("div")
child0.innerHTML=`
<div class="show_worth center">${name[i]}</div>
<div class="actual_price1"><p class="actual_price center">$<span>0</></p></div>
<p class="month center">per user / month</p>
`
let price=arr1[i]
let ul0=document.createElement("ul")
for(let i=0;i<price.length;i++){
let li0=document.createElement("li")
li0.innerHTML=`
<div class="red">
<i class="fa-solid fa-check" style="font-size: 10px;"></i>
</div>
${price[i]}
`
ul0.append(li0)
}
child0.append(ul0)

let div_btn=document.createElement("div")
let btn0=document.createElement("button")
btn0.innerHTML=`
SIGN UP NOW
<i class="fa-solid fa-arrow-right-long"></i>
`
div_btn.append(btn0)
    arr[i].append(child0, div_btn)
}



let div_btn3=document.createElement("div")


let div3=document.getElementById("three")
let btn3=document.createElement("button")
btn3.innerHTML=`
SIGN UP NOW
<i class="fa-solid fa-arrow-right-long"></i>
`
 let price2=["5000 Contacts","Marketing Automation","Push Notifications","Site Messages","Broadcast A/B Testing","Landing Page A/B Testing","Custom Domain","Call Records","Service Automation","Products","Proposal",]
let child2=document.createElement("div")
child2.id="gold"
let ul2=document.createElement("ul")
for(let i=0;i<price2.length;i++){
let li2=document.createElement("li")
li2.innerHTML=`
<div class="red gold">
<i class="fa-solid fa-check" style="font-size: 10px;"></i>
</div>
${price2[i]}
`
ul2.append(li2)
}
child2.innerHTML=`
<div class="show_worth center" id="gold_growth">GROWTH</div>
<div class="actual_price1"><p class="actual_price center">$<span>0</></p></div>
<p class="month center">per user / month</p>
`
child2.append(ul2)

let div_btn=document.createElement("div")
let btn1=document.createElement("button")
btn1.innerHTML=`
SIGN UP NOW
<i class="fa-solid fa-arrow-right-long"></i>
`
div_btn.append(btn1)
 div3.append(child2, div_btn)




 let image_arr=["https://images.g2crowd.com/uploads/report_medal/image/2047/medal.svg?1627568902611",
 "https://images.g2crowd.com/uploads/report_medal/image/2040/medal.svg?1627568902612",
 "https://images.g2crowd.com/uploads/report_medal/image/2000/medal.svg?1627568902612",
 "https://images.g2crowd.com/uploads/report_medal/image/2003/medal.svg?1627568902612",
"https://images.g2crowd.com/uploads/report_medal/image/2043/medal.svg?1627568902612",
"https://my.g2.com/assets/product-badges/users-love-us-2008b519df49af90dcfa7db4b5fe13c8ec24ced0348f0a6bd039711ad8bbffc7.svg?1627568902612"]



let image_container=document.querySelectorAll("#child_batch_id>div")
let i=0
for(let el of image_container){
let image=document.createElement("img")
image.src=image_arr[i]
i++
el.append(image)
}



function append(give_arr,div_give){
let heads=document.createElement("p")
heads.className="list_names"
heads.innerText=give_arr[0]
let ulist=document.createElement("ul")
for(let i=1;i<=give_arr.length-1;i++){
let li=document.createElement("li")
li.innerHTML=`
<i class="fa-solid fa-check"  style="font-size: 10px;"></i>
<p class="content_name">${give_arr[i]}</p>
` 
ulist.append(li)
}
div_give.append(heads,ulist)
}
// ############// "Marketing",// ############
let marketing=["Marketing","250 Contacts","1,000 Branded Emails","Lists","Segmentation","Predictive Lead Score","Embed Forms","Web Pop ups","Email Templates","Email Template Builder","Auto Responders","Tag Management","Social Suite","Integrations","Reporting Dashboard","Custom Fields","Live Chat","Video Marketing","Facebook Ads","Desktop Notifications","Landing Pages","Landing Page Builder","SSL Enabled for Landing Pages","Send Newsletters","Email Broadcast","Email Sequences","500 MB File Storage","Marketing Automation","Site Messaging","Web Rules","Push Notifications","Email Broadcast A/B Testing","Automations/Workflows","Nodes (Automation/Workflow)","Triggers","Code your own Landing Page","Landing Page A/B Testing","Custom Domain for Landing Pages","Timezone based email delivery","Conversational Inbox","Web Analytics","Custom Reporting",
"Role Management"]


// ############// "CRM & Sales",// ############
let crm=["CRM & Sales","Contacts & Companies","360 degree contact view","Tag Management","Deals","Tasks","Appointment scheduling","User activity","Email tracking","Email scheduling","Gmail integration","Outlook integration","Office 365 integration","Social suite","Reports Dashboard","Predictive Lead Score","Calling minutes","Custom Deal Milestones","Custom Deal Tracks","Leaderboard","Call Reports","Multi Currency","Email Sequences","Automations/Workflows","Nodes (Automation/Workflow)","Timezone Based Delivery","Proposals","Proposal Analytics","Role Management","Call Scripts","Custom Reports","Call Recordings","Goals",
"Account Based Marketing"]
// ############// "Service Bay",// ############
let service=["Service Bay","Contact Management","Ticketing Management","Ticket Views","Ticket Macros","Groups","Group Management","Canned Responses","Personal Note","Customer 360 Degree View","Desktop Notifications","Push Notification","Automations/Workflows","Nodes (Automation/Workflow)",
"Role Management"]

// ############// "Specials",// ############
let specials=["Specials","File Repository","SSO","API","Teams",
"Team Hierarchy"]


// ############// "Support",// ############
let support=["Support","Email & Chat Support","Free Onboarding Sessions","Dedicated Account Manager",
"Phone Support"]

















let d1=document.createElement("div")
d1.innerHTML=`
<p class="worth_second_div">FREE</p>
<p class="amount_second_div">$ 0</p>
<p class="month_second_div">per user/month</p>
`
let d2=document.createElement("div")

let div_first=document.createElement("div")
append(marketing,div_first)

let div_second=document.createElement("div")
append(crm,div_second)

let div_third=document.createElement("div")
append(service,div_third)

let div_fourth=document.createElement("div")
append(specials,div_fourth)

let div_fivth=document.createElement("div")
append(support,div_fivth)

d2.append(div_first, div_second, div_third, div_fourth, div_fivth)

let d3=document.createElement("div")
d3.innerHTML=`
<button class="sign_up">
SIGN UP NOW
<i class="fa-solid fa-arrow-right-long"></i>
</button>
`
let div_one=document.getElementById("number_one")
div_one.append(d1, d2, d3)
let div_two=document.getElementById("number_two")
let arr_divs=[div_one,div_two]

 
let cmpre1 = document.getElementById('cmpre_plans')
cmpre1.onclick= function(){
    window.location.href='../pricing_page/pricing.html'
}
let cmpre2 = document.getElementById('cmpre_plans_r')
cmpre2.onclick=function(){
  window.location.href = '../pricing_page/pricing.html'
}