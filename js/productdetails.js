const detailSection = document.getElementById("single-product-details");
const detailSectionImgs = detailSection.getElementsByTagName("div")[0];
const detailSectionDescription = detailSection.getElementsByTagName("div")[7];
console.log(detailSectionDescription);
let product_Number = localStorage.getItem("productId");
let product_price = localStorage.getItem("productPrice");



detailSectionImgs.innerHTML = `<div class="single-product-img">
<img id="main-img" src="./assets/Men Sneekers/${product_Number}/${product_Number}-1_men_sneakers.jpg" alt="">

<div class="small-img-group flex">
    
    <div class="small-img-colomn">
        <img class="small-img" width="100%" src="./assets/Men Sneekers/${product_Number}/${product_Number}-2_men_sneakers.jpg" alt="">
    </div>
    
    <div class="small-img-colomn">
        <img class="small-img" width="100%" src="./assets/Men Sneekers/${product_Number}/${product_Number}-3_men_sneakers.jpg" alt="">
    </div>
    
    <div class="small-img-colomn">
        <img class="small-img" width="100%" src="./assets/Men Sneekers/${product_Number}/${product_Number}-4_men_sneakers.jpg" alt="">
    </div>
    
    <div class="small-img-colomn">
        <img class="small-img" width="100%" src="./assets/Men Sneekers/${product_Number}/${product_Number}-5_men_sneakers.jpg" alt="">
    </div>
    <div class="small-img-colomn">
        <img class="small-img" width="100%" src="./assets/Men Sneekers/Footwear.jpg" alt="">
    </div>
</div>
</div>`;

detailSectionDescription.innerHTML = `<div class="single-product-description">
<h6>Home/ Shop</h6>
<h4 id="add-cart-name">Lace-Up Casual Shoes</h4>
<h3 id="add-cart-price">${product_price}</h3>
<select>
    <option>Select Size</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
    <option>11</option>
    <option>12</option>
</select>
<input id="add-cart-multiple" oninput="isValidMultiple(this)" type="number" value="1">
<button id="add-cart-btn" class="button_2">Add to Cart</button>
<h4>Product Details</h4>
<ul>
    <li>Wipe with a clean, dry cloth when needed</li>
    <li>Lace Fastening</li>
    <li>2-month warranty against manufacturing defects</li>
    <li>Mesh upper</li>
    <li>Package contains: 1 pair of shoes</li>
    <li>Rubber sole</li>
    <li>Product Code: EFG${product_Number}XX${product_Number}X00${product_Number}X</li>
    <li>Net Qty:2N(1 Pair Footwear)</li>
    <li>Customer Care Address: Local Area, Local Street</li>
    <li>Commodity: Men's Sneakers</li>
</ul>

</div>`;

localStorage.removeItem("productId"); 
localStorage.removeItem("productPrice"); 

const mainImg = document.getElementById("main-img");
const smallImg = document.getElementsByClassName("small-img");

for (let index = 0; index < smallImg.length; index++) {
    smallImg[index].addEventListener("click",()=>{
        mainImg.src = smallImg[index].src;
    })
}


function isValidMultiple(field){
    if(field.value<=0){
        field.value=1;
    }
}




let add_to_cart = document.getElementById("add-cart-btn");
add_to_cart.addEventListener("click",function(){sendToCart()});

function sendToCart() {    
    let add_price = document.getElementById("add-cart-price").innerHTML;
    let add_name = document.getElementById("add-cart-name").innerHTML;
    let product_img = document.getElementById("main-img").src;
    let add_cart_multiple = document.getElementById("add-cart-multiple").value;
    localStorage.setItem("add-price",add_price);
    localStorage.setItem("add-name",add_name);
    localStorage.setItem("add-img-src",product_img);
    localStorage.setItem("add-cart-multiple",add_cart_multiple);
    window.location.href="cart.html";
}



