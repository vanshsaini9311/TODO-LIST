const form=document.querySelector('form');
const alltodos=document.querySelector('.todoitem');
const input= document.querySelector('input')
const addblock=document.querySelector('button')
input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        addblock.disabled = true;
    } else {
        addblock.disabled = false;
    }
});

form.addEventListener("click",(e)=>{
    e.preventDefault();

    const text =document.querySelector('input').value.trim();
    
     if(text==""){
        return;
     }
    const parent=document.createElement('div');
    const color=["yellow","green","pink","blue","purple","orange"]
    const randomcolor=color[Math.floor(Math.random()*6)]
     parent.style.fontSize = "25px";

    parent.style.width = "700px";
parent.style.padding = "15px 20px";
parent.style.marginTop = "15px";
parent.style.border = `1px solid ${randomcolor}`;
parent.style.borderRadius = "8px";
parent.style.display = "flex";
parent.style.flexDirection = "space-around";

parent.style.alignItems = "center";
    
    const task=document.createElement('span');
    task.textContent=text
    task.style.marginRight="20px";
    const donebutton=document.createElement('button')
    donebutton.textContent="done";
    donebutton.style.fontSize="20px";
    donebutton.style.marginRight="20px";
   
    donebutton.style.height="30px";
    const deletebutton=document.createElement('button')
    deletebutton.textContent="delete";
     deletebutton.style.fontSize="20px";
    deletebutton.style.height="30px";
    parent.append(task,donebutton,deletebutton);

    alltodos.append(parent);

    donebutton.addEventListener("click",()=>{
        task.style.color="black";
        task.style.textDecoration="line-through";
        task.style.backgroundColor="yellow"
    })
     deletebutton.addEventListener("click",()=>{
       parent.remove();
    })
form.reset();


})