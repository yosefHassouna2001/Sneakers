let imgclic = document.querySelectorAll(".smollImg a  ");
let bigImg = document.querySelector(".bigImg img");

imgclic.forEach((element ,i) => {
    element.onclick= _=>{
        bigImg.src = element.firstChild.src;
        document.styleSheets[2].cssRules[12].selectorText = `.smollImg a:nth-child(${i+1})::after`;
    }
});

let plusProduct =document.querySelector(".plusProduct");
let numProduct = document.querySelector(".numProduct");
let decreaseProduct = document.querySelector(".decreaseProduct");

plusProduct.onclick= _=>{
    numProduct.innerHTML++;
    if (spanNum.innerHTML >0) {
        
        spanNum.style.setProperty("display","block" );
    }
    }
decreaseProduct.onclick= _=>{
    if (numProduct.innerHTML > 0) {
        numProduct.innerHTML--;

    }
    }

let btnAdd = document.querySelector(".btnAdd");
let productsList = document.querySelector(".productsList");
let productName = document.querySelector(".productName");
let newPrice = document.querySelector(".newPrice");

let spanNum = document.querySelector(".spanNum");

if (spanNum.innerHTML == 0) {
    spanNum.style.setProperty("display","none" );
  }

btnAdd.onclick =_=>{
   if (numProduct.innerHTML > 0) {
    productsList.innerHTML +=`
    <div class="d-flex align-items-center ">
    <img src="${bigImg.src}" class="w-25 " alt="">
    <div class="py-3 px-1 ">
        <p>${productName.innerHTML}</p>
        <p>
            <span class="text-secondary"> 
                $${newPrice.innerHTML} X ${numProduct.innerHTML} 
            </span>
            <span class="fw-bold">
                $${newPrice.innerHTML * numProduct.innerHTML}
            </span>
        </p>
    </div>
    <i class="fa-solid fa-trash-can ps-2"></i>
    </div> 
    `
    spanNum.style.setProperty("display","block" );
    spanNum.innerHTML++;
}
    
}







