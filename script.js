let btn=document.querySelector("#btn");

let tip1=document.querySelector("#tip");


tip1.style.display="none";
function finalresult(e){
    let input1=document.querySelector("#input1").value;

let select=document.querySelector("#select").value;

let input2=document.querySelector("#input2").value;
    e.preventDefault()
    tip1.style.display="inline";
    let tip=((input1*select)/100)/input2;

    document.querySelector("#input3").value=tip;
    


}
btn.addEventListener("click",finalresult);