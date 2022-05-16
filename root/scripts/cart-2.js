let products = JSON.parse(localStorage.getItem("products"));

function updateCart(){

    let subTotal = 0;

    products.forEach((p)=>{
        if(!p.quantity <= 0){
            subTotal += p.price * p.quantity;
        }
    });

    document.querySelector('#span-sub-total').textContent = subTotal;

    if(subTotal > 250000){
        let descuento = 15000;
        document.querySelector('#span-delivery').textContent = "GRATIS";
        document.querySelector('#span-total').textContent = subTotal - 15000;
    }else{
        document.querySelector('#span-total').textContent = subTotal;
    }

}

function goBack(){
    window.location.href = "../paginas/cart-1.html"
}

updateCart();