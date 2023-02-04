// Home Page
const hambar = document.getElementById('ham-bar');
const close = document.getElementById('close-nav');
const navbar = document.getElementById('nav-bar');

if (hambar) {
    hambar.addEventListener('click',()=> {
        navbar.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',()=> {
        navbar.classList.remove('active');
    })
}


let productDetails = document.getElementsByClassName("product-details");
let productDescription = document.getElementsByClassName("product-description");
for (let index = 0; index < productDetails.length; index++) {
    let productDetailsImg = productDetails[index].firstElementChild;
    productDetailsImg.addEventListener('click', function(){ goToProductDetail(this)});
    productDetails[index].addEventListener('mouseover', function(){imageNewChange(this)});
    productDetails[index].addEventListener('mouseout', function(){imageOldChange(this)});

    // cart button event send to cart
    productDescription[index].nextElementSibling.addEventListener('click', function(){sendToCart_1(index)})

}

function goToProductDetail(product) {
    let productId = product.parentElement.id;
    let price = product.nextElementSibling.lastElementChild.innerText;
    localStorage.setItem("productId",productId);
    localStorage.setItem("productPrice",price);
    window.location.href = "productdetails.html";
}

function imageNewChange(product) {
    let productId = product.id;
    let imgSource = product.firstElementChild;
    imgSource.src = `./assets/Men Sneekers/${productId}/${productId}-2_men_sneakers.jpg`;
}
function imageOldChange(product) {
    let productId = product.id;
    let imgSource = product.firstElementChild;
    imgSource.src = `./assets/Men Sneekers/${productId}/${productId}-1_men_sneakers.jpg`
}

// newsletter

const newsletter_submit = document.getElementById("newsletter-submit");
const submit_popup = document.getElementById("submit-popup");
const submited_ok = document.getElementById("submited-ok");

newsletter_submit.addEventListener("click",()=>{
    if (isEmailValid("newsletter-error")) {
        submit_popup.classList.add("subscribe-succes");
    }
})
submited_ok.addEventListener("click",()=>{
    submit_popup.classList.remove("subscribe-succes");
})



function isEmailValid(error_id) {
    return_value = true;
    let errorThrow = document.getElementById(error_id);
    errorThrow.innerText = "";

    let email_value = errorThrow.nextElementSibling.value;

    if (email_value.length <=3 ){
        errorThrow.innerText="*Enter Correct E-mail";
        return_value = false;
    }
    if (email_value.length >26) {
        errorThrow.innerText="*Only 25 Characters Allowed";
        return_value = false;
    }
    return return_value;

}

// send to cart

function sendToCart_1(i) {    
    let add_price_1 = productDescription[i].lastElementChild.innerHTML;
    let add_name_1 = productDescription[i].firstElementChild.nextElementSibling.innerHTML ;
    let product_img_1 = productDescription[i].previousElementSibling.src;
    localStorage.setItem("add-price",add_price_1);
    localStorage.setItem("add-name",add_name_1);
    localStorage.setItem("add-img-src",product_img_1);
    localStorage.setItem("add-cart-multiple",1);
    window.location.href="cart.html";
}




























