import nav from "../components/login_nav.js";
let navbar = document.getElementById("nav");
navbar.innerHTML = nav(
  "Dashboard",
  "Deals",
  "Tickets",
  "Tasks",
  "Web Rules",
  "Calendar"
);

document.getElementById("mark_contacts").onclick = () => {
  document.getElementById("Deals").style.display = "flex";
};

document.getElementById("deal_close").onclick = () => {
  document.getElementById("Deals").style.display = "none";
};

document.getElementById("deal_cancel").onclick = () => {
  document.getElementById("Deals").style.display = "none";
};

document.getElementById("deal_submit").onclick = () => {
  let obj = {
    ID: document.getElementById("dealID").value,
    Name: document.getElementById("dealName").value,
    Desc: document.getElementById("dealDesc").value,
    Slct: document.getElementById("dealSlct").value,
    Amount: document.getElementById("dealAmount").value,
    Date: document.getElementById("closeDate").value,
    Note: document.getElementById("dealNote").value,
    Tag: document.getElementById("dealTag").value,
    Owner: document.getElementById("dealOwner").value,
    Company: document.getElementById("dealCompany").value,
  };

  let arr = JSON.parse(localStorage.getItem("deals")) || [];

  arr.push(obj);

  localStorage.setItem("deals", JSON.stringify(arr));

  document.getElementById("dealID").value = null;
  document.getElementById("dealName").value = null;
  document.getElementById("dealDesc").value = null;
  document.getElementById("dealAmount").value = null;
  document.getElementById("closeDate").value = null;
  document.getElementById("dealNote").value = null;
  document.getElementById("dealTag").value = null;
  document.getElementById("dealOwner").value = null;
  document.getElementById("dealCompany").value = null;
  console.log(arr);
};

document.getElementById("ticket_close").onclick = () => {
  document.getElementById("tickets").style.display = "none";
};

let btn = document.getElementById("mark_forms");
btn.onclick = function () {
  document.getElementById("tickets").style.display = "flex";
};

document.getElementById("ticket_close").onclick = () => {
  document.getElementById("tickets").style.display = "none";
};

document.getElementById("ticket_cancel").onclick = () => {
  document.getElementById("tickets").style.display = "none";
};

document.getElementById("ticket_submit").onclick = () => {
  let obj = {
    Name: document.getElementById("ticketName").value,
    Email: document.getElementById("ticketEmail").value,
    Subject: document.getElementById("ticketSubject").value,
    Assignee: document.getElementById("ticketAssignee").value,
    input: document.getElementById("input").value,
  };

  let arr = JSON.parse(localStorage.getItem("tickets")) || [];

  arr.push(obj);

  localStorage.setItem("tickets", JSON.stringify(arr));

  document.getElementById("ticketName").value = null;
  document.getElementById("ticketEmail").value = null;
  document.getElementById("ticketSubject").value = null;
  document.getElementById("ticketAssignee").value = null;
  document.getElementById("input").value = null;
};

document.getElementById("mark_landing_pg").onclick = () => {
  document.getElementById("tasks").style.display = "flex";
};

document.getElementById("task_close").onclick = () => {
  document.getElementById("tasks").style.display = "none";
};

document.getElementById("task_cancel").onclick = () => {
  document.getElementById("tasks").style.display = "none";
};

document.getElementById("task_submit").onclick = () => {
  let obj = {
    Name: document.getElementById("taskName").value,
    Type: document.getElementById("taskType").value,
    Priority: document.getElementById("taskPriority").value,
    Date: document.getElementById("dueDate").value,
    Notes: document.getElementById("taskNotes").value,
    Contacts: document.getElementById("taskContacts").value,
    Company: document.getElementById("taskCompany").value,
    Status: document.getElementById("taskStatus").value,
    Owner: document.getElementById("taskOwner").value,
  };

  let arr = JSON.parse(localStorage.getItem("tasks")) || [];

  arr.push(obj);

  localStorage.setItem("tasks", JSON.stringify(arr));

  document.getElementById("taskName").value=null
  document.getElementById("taskType").value=null
  document.getElementById("taskPriority").value=null
  document.getElementById("dueDate").value=null
  document.getElementById("taskNotes").value=null
  document.getElementById("taskContacts").value=null
  document.getElementById("taskCompany").value=null
  document.getElementById("taskStatus").value=null
  document.getElementById("taskOwner").value=null
};  

document.getElementById('web_close').onclick=()=>{
   document.getElementById('webRule').style.display="none";
}

document.getElementById('mark_temp').onclick=()=>{
    document.getElementById('webRule').style.display="flex";
}

document.getElementById("web_cancel").onclick=()=>{
    document.getElementById('webRule').style.display="none";
}

document.getElementById('web_submit').onclick=()=>{
    let obj={
        name:document.getElementById('webName').value,
        condition:document.getElementById('webCondition').value,
        contain:document.getElementById('webContains').value,
        value:document.getElementById('webValue').value,
        rule:document.getElementById('webRules').value,
        action:document.getElementById('webAction').value,
        desc:document.getElementById('webDesc').value,
    }

    let arr = JSON.parse(localStorage.getItem("webRule")) || [];

    arr.push(obj);
  
    localStorage.setItem("webRule", JSON.stringify(arr));

    document.getElementById('webName').value=null
    document.getElementById('webCondition').value=null
    document.getElementById('webContains').value=null
    document.getElementById('webValue').value=null
    document.getElementById('webRules').value=null
    document.getElementById('webAction').value=null
    document.getElementById('webDesc').value=null

}