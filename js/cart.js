const cart_list = document.getElementById("cart-list");
const item_in_cart = document.getElementsByClassName("cart-item");
const product_price = document.getElementsByClassName("product-price");
const product_quantity = document.getElementsByClassName("product-quantity");
const cart_subtotal = document.getElementsByClassName("product-subtotal");
const cart_total = document.getElementById("cart-total");
const final_cart_total = document.getElementById("final-cart-total");
let totalCartValue = 0;

// add to cart on Load append child method

let add_cart_quantity = localStorage.getItem("add-cart-multiple");
if (add_cart_quantity!==null) {
    let add_cart_price = localStorage.getItem("add-price");
    let add_cart_name = localStorage.getItem("add-name");
    let add_cart_img = localStorage.getItem("add-img-src");
    let trTag = document.createElement("tr");
    trTag.classList.add("cart-item");
    trTag.innerHTML = `<td><a href="#"><i class="fa-solid fa-circle-xmark"></i></a></td>
    <td><img src="${add_cart_img}" alt=""></td>
    <td>${add_cart_name}</td>
    <td class="product-price">${add_cart_price}</td>
    <td><input class="product-quantity" type="number" value="${add_cart_quantity}"></td>
    <td class="product-subtotal"></td>`;
    cart_list.appendChild(trTag);
    localStorage.removeItem("add-cart-multiple");
    localStorage.removeItem("add-price");
    localStorage.removeItem("add-name");
    localStorage.removeItem("add-img-src");
}

// Update Cart on Load
for (let index = 0; index < product_price.length; index++) {
    updateCart(product_quantity[index],index);
    product_quantity[index].addEventListener("click",function(){updateCart(this,index)});
    
    
}
function updateCart(item , index) {
    isValidMultiple(item);
    totalCartValue = 0;
    let unitPriceString = product_price[index].innerHTML;
    let unitPrice = parseFloat(unitPriceString.substring(1,unitPriceString.length));
    let totalQuantity = product_quantity[index].value;
    cart_subtotal[index].innerHTML = "₹ "+ (unitPrice*totalQuantity).toFixed();
    totalCartValue += unitPrice*totalQuantity;
    cart_total.innerHTML = "₹ " +totalCartValue;
    final_cart_total.innerHTML = "₹ " +totalCartValue;
}
function isValidMultiple(field){
    if(field.value<=0){
        field.value=1;
    }
}
// Remove Item from Cart

for (let index = 0; index < item_in_cart.length; index++) {
    let icon_remove_item = item_in_cart[index].firstElementChild;
    icon_remove_item.addEventListener('click',function(){removeItemCart(this)});
}

function removeItemCart(item) {
    item.parentElement.remove();
    totalCartValue = 0;
    if (product_price.length==0) {
        cart_total.innerHTML = "₹ " + 0;
        final_cart_total.innerHTML = "₹ " + 0;
        return;
    }
    for (let index = 0; index < product_price.length; index++) {
        updateCart(product_quantity[index],index);
    }
    
}

const  place_order = document.getElementById("place-order");
const text_edit = document.getElementById("form-submit-edit");
place_order.addEventListener("click",()=>{
    if (totalCartValue!=0) {
        text_edit.innerText = "Your Order Has Been Succesfully Placed! We Will Notify You Once we Shipped Your Order. Continue Shopping, Have a Good Day";
        submit_popup.classList.add("subscribe-succes");
            setTimeout(() => {
                location.reload();
            }, 10000);
    }
})



