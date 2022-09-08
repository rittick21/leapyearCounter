const input=document.querySelector(".no");
const calcButton=document.querySelector(".Calculate");
const output=document.querySelector(".output");
calcButton.addEventListener('click',(event)=>{
    event.preventDefault();
    let year=input.value;
    if(year%4===0){
        if(year%100==0){
            if(year%400===0){
                output.innerHTML=`${year} is Leap Year`;
            }else{
                output.innerHTML=`${year} is not Leap Year`;
            }
        }
        else{
            output.innerHTML=`${year} is Leap Year`;
        }
    }
    else{
        output.innerHTML=`${year} is  Not Leap Year`;
    }
    if(year==''){
        output.innerHTML="Enter year";
    }
});