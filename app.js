let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let icon1= document.createElement("i");
let boxes =document.querySelector(".card");
icon1.classList.add('fa-solid', 'fa-circle-check');
    icon1.style.color = "#146713"
    let msg1 = '<i class="fa-solid fa-circle-check fa-xl" style="color: #146713;"></i> Successfully Submitted';
    let msg2= ' <i class="fa-solid fa-circle-xmark fa-xl" style="color: #db0606;"></i>  Please Fix the Error';
    let msg3 =' <i class="fa-solid fa-circle-exclamation fa-xl" style="color: #FFD43B;"></i> Invalid input check again';


let toastBox= document.querySelector("#toastBox");

box1.addEventListener("click",()=>{
    showToast(msg1);
})
box2.addEventListener("click",()=>{
    showToast(msg2);
})
box3.addEventListener("click",()=>{
    showToast(msg3);
})


function showToast(msg){
    let t1= document.createElement("div");
    let p1= document.createElement("p");
     
    p1.innerHTML= msg;
    t1.setAttribute("id","t1");
    // t1.prepend(icon1);
    t1.setAttribute("class","toast");
      t1.append(p1);
   
    toastBox.append(t1);
    setTimeout(()=>{
        t1.remove();
    },2000)
}


