let btnn=document.querySelectorAll(' .swich li');
btnn.forEach((ele)=>{
    ele.addEventListener('click',active);
    ele.addEventListener('click',show);
})

function active(){
    btnn.forEach((li)=>{
        li.classList.remove('active');
        this.classList.add('active');
    })
}
let divs=document.querySelectorAll('.all');
function show(){
    divs.forEach(function(ele){
        ele.style.display='none';
    })
    let x=document.querySelectorAll(this.dataset.cat);
    x.forEach(function(ele){
        ele.style.display='flex';
    })
}
