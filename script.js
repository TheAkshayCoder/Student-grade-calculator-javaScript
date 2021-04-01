const input1=document.getElementById("input1")
const input2=document.getElementById("input2")
const input3=document.getElementById("input3")
const btn=document.getElementById("btn")
const output=document.getElementById("output")

btn.addEventListener("click",()=>{
    let val1=parseInt(input1.value)
    let val2=parseInt(input2.value)
    let val3=parseInt(input3.value)
    let res=val1+val2+val3
    let grade;
    let txt;
    output.classList.add("active")
    if (Math.floor(res/300*100)>=33&&Math.floor(res/300*100)<50){
        grade="D"
        txt="pass"
    }

    else if (Math.floor(res/300*100)<33){
        grade="F"
        txt="fail"
    }else if (Math.floor(res/300*100)>50&&Math.floor(res/300*100)<=70){
        grade="B"
        txt="pass"
    }else if (Math.floor(res/300*100)>70&&Math.floor(res/300*100)<=90){
        grade="A"
        txt="pass"
    }else if (Math.floor(res/300*100)>90&&Math.floor(res/300*100)<=1000){
        grade="B"
        txt="pass"
    }
    
    output.innerHTML=`Your total marks are ${res} out of 300 and your grade is ${grade}.You have ${txt} the exam.`
    


})

