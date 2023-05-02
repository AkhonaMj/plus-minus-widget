const addBtn  = document.querySelector(".plus");
const minusBtn  = document.querySelector(".minus");
const  totalValue = document.querySelector(".total-value");
const refreshBtn = document.querySelector(".refresh");
const multiplyBtn = document.querySelector(".multiply");
const  textBox = document.querySelector(".number-value")
var total = 0;



function addBtnClicked() {
     
       
    totalValue.innerHTML = ++total 
}
 

addBtn.addEventListener("click", addBtnClicked)
 

  




 function minusBtnClicked(){
    if(total > 0){
    
     totalValue.innerHTML = --total
    }

  }


 minusBtn.addEventListener("click", minusBtnClicked)


 
   

 refreshBtn.addEventListener("click", function refreshBtnClicked(){
    totalValue.innerHTML = 0;
    location.reload() 

 });

 multiplyBtn.addEventListener("click", function multiplyBtnClicked(){
    totalValue.innerHTML = textBox.value * total;

 });