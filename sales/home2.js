import nav from '../components/login_nav.js'
let navbar = document.getElementById('nav')
navbar.innerHTML = nav(
  'Dashboard',
  'Contact',
  'Tickets',
  'Tasks',
  'Automation',
  'Calendar',
)

document.getElementById('mark_contacts').onclick = () => {
  document.getElementById('Deals').style.display = 'flex'
}

document.getElementById('deal_close').onclick = () => {
  document.getElementById('Deals').style.display = 'none'
}

document.getElementById('deal_cancel').onclick = () => {
  document.getElementById('Deals').style.display = 'none'
}

document.getElementById('deal_submit').onclick = () => {
  document.getElementById('Deals').style.display = 'none'
  let obj = {
    Contact: document.getElementById('dealID').value,
    Name: document.getElementById('dealName').value,
    Desc: document.getElementById('dealDesc').value,
    Slct: document.getElementById('dealSlct').value,
    Amount: document.getElementById('dealAmount').value,
    Date: document.getElementById('closeDate').value,
    Note: document.getElementById('dealNote').value,
    Tag: document.getElementById('dealTag').value,
    Owner: document.getElementById('dealOwner').value,
    Company: document.getElementById('dealCompany').value,
  }
  deals_data(obj)

  document.getElementById('dealID').value = null
  document.getElementById('dealName').value = null
  document.getElementById('dealDesc').value = null
  document.getElementById('dealAmount').value = null
  document.getElementById('closeDate').value = null
  document.getElementById('dealNote').value = null
  document.getElementById('dealTag').value = null
  document.getElementById('dealOwner').value = null
  document.getElementById('dealCompany').value = null
}
let deals_data = async (obj) => {
  try {
    let url = `https://likeable-grass-gymnast.glitch.me/deals`
    let res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    let data = await res.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

document.getElementById('ticket_close').onclick = () => {
  document.getElementById('tickets').style.display = 'none'
}

let btn = document.getElementById('mark_forms')
btn.onclick = function () {
  document.getElementById('tickets').style.display = 'flex'
}

document.getElementById('ticket_close').onclick = () => {
  document.getElementById('tickets').style.display = 'none'
}

document.getElementById('ticket_cancel').onclick = () => {
  document.getElementById('tickets').style.display = 'none'
}

document.getElementById('ticket_submit').onclick = () => {
  document.getElementById('tickets').style.display = 'none'
  let obj = {
    Name: document.getElementById('ticketName').value,
    Email: document.getElementById('ticketEmail').value,
    Subject: document.getElementById('ticketSubject').value,
    Assignee: document.getElementById('ticketAssignee').value,
    input: document.getElementById('input').value,
  }
  ticketsData(obj)
  document.getElementById('ticketName').value = null
  document.getElementById('ticketEmail').value = null
  document.getElementById('ticketSubject').value = null
  document.getElementById('ticketAssignee').value = null
  document.getElementById('input').value = null
}

let ticketsData = async (data) => {
  try {
    let res = await fetch(`https://likeable-grass-gymnast.glitch.me/tickets`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    let dta = await res.json()
    console.log(dta)
  } catch (err) {
    console.log(err)
  }
}

document.getElementById('mark_landing_pg').onclick = () => {
  document.getElementById('tasks').style.display = 'flex'
}

document.getElementById('task_close').onclick = () => {
  document.getElementById('tasks').style.display = 'none'
}

document.getElementById('task_cancel').onclick = () => {
  document.getElementById('tasks').style.display = 'none'
}

document.getElementById('task_submit').onclick = () => {
  document.getElementById('tasks').style.display = 'none'
  let obj = {
    Name: document.getElementById('taskName').value,
    Type: document.getElementById('taskType').value,
    Priority: document.getElementById('taskPriority').value,
    Date: document.getElementById('dueDate').value,
    Notes: document.getElementById('taskNotes').value,
    Contacts: document.getElementById('taskContacts').value,
    Company: document.getElementById('taskCompany').value,
    Status: document.getElementById('taskStatus').value,
    Owner: document.getElementById('taskOwner').value,
  }
  taskData(obj)
  document.getElementById('taskName').value = null
  document.getElementById('taskType').value = null
  document.getElementById('taskPriority').value = null
  document.getElementById('dueDate').value = null
  document.getElementById('taskNotes').value = null
  document.getElementById('taskContacts').value = null
  document.getElementById('taskCompany').value = null
  document.getElementById('taskStatus').value = null
  document.getElementById('taskOwner').value = null
}

let taskData = async (data) => {
  try {
    let res = await fetch(`https://likeable-grass-gymnast.glitch.me/tasks`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    let dta = await res.json()
    console.log(dta)
  } catch (err) {
    console.log(err)
  }
}

document.getElementById('web_close').onclick = () => {
  document.getElementById('webRule').style.display = 'none'
}

document.getElementById('mark_temp').onclick = () => {
  document.getElementById('webRule').style.display = 'flex'
}

document.getElementById('web_cancel').onclick = () => {
  document.getElementById('webRule').style.display = 'none'
}

document.getElementById('web_submit').onclick = () => {
  document.getElementById('webRule').style.display = 'none'
  let obj = {
    name: document.getElementById('webName').value,
    condition: document.getElementById('webCondition').value,
    contain: document.getElementById('webContains').value,
    value: document.getElementById('webValue').value,
    rule: document.getElementById('webRules').value,
    action: document.getElementById('webAction').value,
    desc: document.getElementById('webDesc').value,
  }

  webRulesDta(obj)

  document.getElementById('webName').value = null
  document.getElementById('webCondition').value = null
  document.getElementById('webContains').value = null
  document.getElementById('webValue').value = null
  document.getElementById('webRules').value = null
  document.getElementById('webAction').value = null
  document.getElementById('webDesc').value = null
}

let webRulesDta = async (data) => {
  try {
    let res = await fetch(
      `https://likeable-grass-gymnast.glitch.me/web_rules`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    let dta = await res.json()
    console.log(dta)
  } catch (err) {
    console.log(err)
  }
}
