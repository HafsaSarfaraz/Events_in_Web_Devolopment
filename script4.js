 let btn1= document.querySelector("#btns");
 let body= document.querySelector("body");
 let para= document.querySelector("p");
 let mode="light";

btn1.addEventListener("click" ,()=>{
    if(mode==="light"){
        body.style.backgroundColor="black";
        mode="dark";
    para.style.color="white";
    }else{
        body.style.backgroundColor="white";
        mode="light";
        para.style.color="black";
    }
    console.log(mode);
})

