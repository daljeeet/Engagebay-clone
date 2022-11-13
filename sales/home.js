// for color of every count of work on the first child
let color_arr = [
  'Blue',
  'Brown',
  'Cyan',
  'Gold',
  'Green',
  'Grey',
  'Maroon',
  'Orange',
  'Pink',
  'Purple',
  'Red',
  'Magenta',
  'Peach',
  'Teal',
]
let arr_divv = document.querySelectorAll('.total_count')
for (let i = 0; i < 4; i++) {
  let num = Math.floor(Math.random() * color_arr.length - 1)
  arr_divv[i].style.color = color_arr[num]
}

let boxes_arr = document.querySelectorAll('.total_count')
async function length() {
  let arr2333 = ['deals', 'tickets', 'tasks', 'web_rules']
  let i = 0
  for (let el of arr2333) {
    let data = await fetch(`https://likeable-grass-gymnast.glitch.me/${el}`)
    data = await data.json()
    boxes_arr[i].innerHTML = data.length
    i++
  }
}

length()

contact_fun()
// forr contact
async function contact_fun() {
  let parent1 = document.getElementById('contact_div')
  let api_name = 'deals'
  let data = await fetch(`https://likeable-grass-gymnast.glitch.me/deals`)
  data = await data.json()
  data.forEach(function (el, i) {
    let child = document.createElement('div')
    child.className = 'contact_child'
    let grand_child = document.createElement('div')
    grand_child.className = 'content_show'
    grand_child.addEventListener('click', function (l) {
      module()
      module_content1(el)
    })
    grand_child.innerHTML = `
<p class="person_name">Name: ${el.Name}</p><p class="person_number">Contact: ${el.Contact}</p></div>
`
    let btn = document.createElement('button')
    btn.className = 'remove.btn'
    btn.innerHTML = `
<i class="fa-solid fa-trash"></i>
`
    // here we give two remove function one for server and one dom
    btn.addEventListener('click', function () {
      remove_dom(child)
      let id = el.id
      remove_server(el, id, api_name)
    })
    child.append(grand_child, btn)
    parent1.append(child)
  })
}
function module_content1(el) {
  let form33 = document.getElementById('form_div')
  form33.innerHTML = null
  form33.innerHTML = `
<h1>Details</h1>
<p>Name: ${el.Name}</p>
<p>Contact Number: ${el.Contact}</p>
<p>Date: ${el.Date}</p>
<p>Comapany Name: ${el.Company}</p>
<p>Note: ${el.Note}</p>
<p>Selected Tags: ${el.Tag}</p>
<p>Description: ${el.Desc}</p>
<p>Amount: ${el.Amount}+${el.Slct}</p>
`
}

//  for tickets
async function tickets() {
  let parent2 = document.getElementById('tickets_div')
  let api_name = 'tickets'
  let data2 = await fetch(`https://likeable-grass-gymnast.glitch.me/tickets`)
  data2 = await data2.json()
  data2.forEach(function (el, i) {
    let child = document.createElement('div')
    child.className = 'tickets_div_child'
    let grand_child = document.createElement('div')
    grand_child.className = 'content_show'
    grand_child.addEventListener('click', function (l) {
      module()
      module_content2(el)
    })
    grand_child.innerHTML = `
<p class="person_name">Assign to: ${el.Assignee}</p><p class="person_number">Subject: ${el.Subject}</p></div>`
    let btn = document.createElement('button')
    btn.className = 'remove.btn'
    btn.innerHTML = `
<i class="fa-solid fa-trash"></i>
`
    // here we give two remove function one for server and one dom
    btn.addEventListener('click', function () {
      remove_dom(child)
      let id = el.id
      remove_server(el, id, api_name)
    })
    child.append(grand_child, btn)
    parent2.append(child)
  })
}
tickets()
function module_content2(el) {
  let form33 = document.getElementById('form_div')
  form33.innerHTML = null
  form33.innerHTML = `
<h1>Details</h1>
<p>Assign Person Name: ${el.Assignee}</p>
<p>Subject: ${el.Subject}</p>
<p>Email: ${el.Email}</p>
<p>Message: ${el.input}</p>
`
}

async function tasks() {
  let parent2 = document.getElementById('tasks_div')
  let api_name = 'tasks'
  let data3 = await fetch(`https://likeable-grass-gymnast.glitch.me/tasks`)
  data3 = await data3.json()
  data3.forEach(function (el, i) {
    let child = document.createElement('div')
    child.className = 'tasks_div_child'
    if (el.Priority == 'High') {
      child.style.backgroundColor = 'red'
    } else if (el.Priority == 'Medium') {
      child.style.backgroundColor = 'orange'
    } else {
      child.style.backgroundColor = 'rgb(205, 200, 50)'
    }
    let grand_div = document.createElement('div')
    grand_div.className = 'long_div_hieght'
    grand_div.addEventListener('click', function () {
      module()
      module_content3(el)
    })
    grand_div.innerHTML = `
<p>Task Name: ${el.Name}</p>
<p>Priority: ${el.Priority}</p>
<p>Type: ${el.Type}</p>
<p>Status: ${el.Status}</p>
<p>Note: ${el.Notes}<p>

`
    let btn = document.createElement('button')
    btn.className = 'remove.btn'
    btn.innerHTML = `
<i class="fa-solid fa-trash"></i>
`
    // here we give two remove function one for server and one dom
    btn.addEventListener('click', function () {
      remove_dom(child)
      let id = el.id
      remove_server(el, id, api_name)
    })
    child.append(btn, grand_div)
    parent2.append(child)
  })
}
tasks()
function module_content3(el) {
  let form33 = document.getElementById('form_div')
  form33.innerHTML = null
  form33.innerHTML = `
<h1>Details</h1>
<p>Task: ${el.Name}</p>
<p>Date: ${el.Date}</p>
<p>Priority: ${el.Priority}</p>
<p>Type: ${el.Type}</p>
<p>Status: ${el.Status}</p>
<p>Notes: ${el.Notes}</p>
<p>Contact: ${el.Contacts}</p>
<p>Company: ${el.Company}</p>
`
}

automation()
async function automation() {
  let parent4 = document.getElementById('automation_div')
  let api_name = 'web_rules'
  let data4 = await fetch(`https://likeable-grass-gymnast.glitch.me/web_rules`)
  data4 = await data4.json()
  data4.forEach(function (el, i) {
    let child = document.createElement('div')
    child.className = 'automation_div_child'
    let grand_div = document.createElement('div')
    grand_div.className = 'automation_div_hieght'
    grand_div.addEventListener('click', function () {
      module()
      module_content4(el)
    })
    grand_div.innerHTML = `
<p>Name: ${el.name}</p>
<p>Rule: ${el.rule}</p>
<p>Condition: ${el.condition}</p>
<p>Description: ${el.desc}</p>
`
    let btn = document.createElement('button')
    btn.className = 'remove.btn'
    btn.innerHTML = `
<i class="fa-solid fa-trash"></i>
`
    // here we give two remove function one for server and one dom
    btn.addEventListener('click', function () {
      remove_dom(child)
      let id = el.id
      remove_server(el, id, api_name)
    })
    child.append(btn, grand_div)
    parent4.append(child)
  })
}

function module_content4(el) {
  let form33 = document.getElementById('form_div')
  form33.innerHTML = null
  form33.innerHTML = `
<h1>Details</h1>
<p>Name: ${el.name}</p>
<p>Rule: ${el.rule}</p>
<p>Condition: ${el.condition}</p>
<p>Action: ${el.action}</p>
<p>Contain: ${el.contain}</p>
<p>Value: ${el.value}</p>
<p>Description: ${el.desc}</p>
`
}

let contact_btn = document.getElementById('deal_submit')
contact_btn.addEventListener('click', function () {
  contact_fun()
  length()
})

let tickets_btn = document.getElementById('ticket_submit')
tickets_btn.onclick = function () {
  tickets()
  length()
}

let task_btn = document.getElementById('task_submit')
task_btn.addEventListener('click', function () {
  tasks()
  length()
})

let submit_btn3 = document.getElementById('web_submit')
submit_btn3.addEventListener('click', function () {
  automation()
  length()
})

function module() {
  let modul = document.getElementById('big_div')
  modul.style.display = 'block'
}

// automation_div

// data3.forEach(function(el,i){
// let child=document.createElement("div")
// child.className=""
// let grand_child=document.createElement("div")
// grand_child.className=""

// tickets_div

// tasks_div
// tasks_content_show
// tasks_div_child

// module()
//   data_shii3(el)

function remove_dom(child) {
  child.remove()
}

async function remove_server(el, id, api_name) {
  try {
    let data = await fetch(
      `https://likeable-grass-gymnast.glitch.me/${api_name}/${id}`,
      {
        method: 'DELETE',
        body: JSON.stringify(el),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    length()
  } catch (err) {
    console.log(err)
  }
}

let hh = document.getElementById('close')

hh.addEventListener('click', close)

function close() {
  let one = document.getElementById('sales_cards')
  one.style.display = 'grid'
  let two = document.getElementById('big_div')
  two.style.display = 'none'
}

// let image_arr = [
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-13.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-11.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-14.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-6.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-3.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-16.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-13.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-8.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-16.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-6.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-17.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-5.svg",
//   "https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-17.svg",
// ];

// let fff=document.querySelectorAll(".boxes")

// let arr2333=["deals","tickets","tasks","web_rules"]
// let i=0
// for(let el of arr2333){
//    api(el,fff[i])
// i++
// }

// function remove(child) {
//   child.remove();
// }

// function show() {
//   let one = document.getElementById("sales_cards");
//   one.style.display = "none";
//   let two = document.getElementById("big_div");
//   two.style.display = "block";
// }
