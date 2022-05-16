/*
Cart1
*/

let productList = document.querySelector(".div-item-list");

let products = JSON.parse(localStorage.getItem("products"));

function renderItemList(){

    updateCart();

    productList.innerHTML = "";
    
    if(products?.length>0){

        products.forEach(p => {
            let divProducto = document.createElement('div');
            divProducto.innerHTML = `<div class="div-item-info">
            <img class="img-product-image" src="../imgs/${p.img}" alt="">
            <div class="div-item-name">
                <label for="" class="label-item-name">${p.name}</label>
                <label for="" class="label-item-brand">${p.brand}</label>
            </div>
            <div class="div-item-price">
                <label for="" class="label-price">$${p.price*p.quantity}</label>
                <div class="div-product-quantity">
                    <div class="div-min-box">-</div>
                    <div class="div-quantity-box">${p.quantity}</div>
                    <div class="div-plus-box">+</div>
                </div>
                <label for="" class="label-delivery"><img src="../imgs/truck.svg" alt="">Despacho a domicilio</label>
            </div>
        </div>`;

        divProducto.querySelector(".div-min-box").addEventListener("click",function(){
            p.quantity--;
            renderItemList();
        });
        divProducto.querySelector(".div-plus-box").addEventListener("click",function(){
            p.quantity++;
            renderItemList();
        });
        productList.append(divProducto);

        });
    
    }
}

function updateCart(){

    let subTotal = 0;

    let newProducts = []

    products.forEach((p)=>{
        if(!p.quantity <= 0){
            newProducts.push(p);
            subTotal += p.price * p.quantity;
        }
    });

    products = newProducts;

    document.querySelector('#span-sub-total').textContent = subTotal;
    document.querySelector('#span-total').textContent = subTotal;

    localStorage.setItem("products", JSON.stringify(newProducts));
}

renderItemList();

document.querySelector(".button-buy-button").addEventListener('click',function(){
    window.location.href = '../paginas/cart-2.html';
    
})
