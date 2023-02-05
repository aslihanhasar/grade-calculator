let midterm=document.getElementById("midterm");
let final=document.getElementById("final");
let button=document.getElementById("btn");
let average=document.getElementById("average");
let grade=document.getElementById("grade");
let MID_RATE=0.4;
let FINAL_RATE=0.6;

button.onclick=start;

function start(){
    let midExam=midterm.value;
    let finalExam=final.value;
    let result=(midExam*MID_RATE)+(finalExam*FINAL_RATE);
    result=Math.round(result);

    if ((result>=90)&&(result<=100)){
        average.innerText="Ortalama: "+result;
        grade.innerText="AA";
        grade.style.backgroundColor="lightgreen";
    }else if((result>=80)&&(result<=89)){
        average.innerText="Ortalama: "+result;
        grade.innerText="BA"
        grade.style.backgroundColor="lightgreen";
    }else if ((result>=75)&&(result<=79)){
        average.innerText="Ortalama: "+result;
        grade.innerText="BB";
        grade.style.backgroundColor="lightgreen";
    }else if ((result>=70)&&(result<=74)){
        average.innerText="Ortalama: "+result;
        grade.innerText="CB";
        grade.style.backgroundColor="lightgreen";
    }else if ((result>=60)&&(result<=69)){
        average.innerText="Ortalama: "+result;
        grade.innerText="CC";
        grade.style.backgroundColor="lightgreen";
    }else if ((result>=50)&&(result<=59)){
        average.innerText="Ortalama: "+result;
        grade.innerText="DC";
        grade.style.backgroundColor="red";
    }else if ((result>=40)&&(result<=49)){
        average.innerText="Ortalama: "+result;
        grade.innerText="DD";
        grade.style.backgroundColor="red";
    }else if ((result>=30)&&(result<=39)){
        average.innerText="Ortalama: "+result;
        grade.innerText= "FD" ;
        grade.style.backgroundColor="FireBrick";
    }else{
        average.innerText="Ortalama: "+result;
        grade.innerText="FF";
        grade.style.backgroundColor="FireBrick";
    }
}