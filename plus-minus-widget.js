const addBtn  = document.querySelector(".plus");
const minusBtn  = document.querySelector(".minus");
const  totalValue = document.querySelector(".total-value");
const refreshBtn = document.querySelector(".refresh")

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