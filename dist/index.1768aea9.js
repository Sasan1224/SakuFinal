var url = window.location.href;
var db;
setTimeout(()=>{
    db = firebase.firestore();
}, 0);
const user = JSON.parse(localStorage.getItem("user"));
function goHome() {
    if (!url.includes("index")) window.location.href = '../index.html';
}
function goProducts() {
    if (!url.includes("index")) window.location.href = '../index.html';
}
if (!url.includes("index")) {
    document.body.innerHTML += '<section class="section-navbar"> <div class="div-navbar"> <div class="div-black-stripe"> <img src="../imgs/saku_logo.svg" width="105" height="90" alt="" class="navbar-icon"> <div class="div-navbar-options"> <ul class="div-options-list"> <li><a href="../index.html" onclick="goHome()">Inicio</a></li> <li class="li-products-option"><a href="" onclick="goHome()">Productos</a></li> <li><a href="">Nosotros</a></li> </ul> </div> <div class="div-navbar-interactions"> <img src="../imgs/cart.svg" class="img-cart-link"></img> <img src="../imgs/profile.svg" class="img-user-link"></img> </div> </div> <div class="div-red-stripe"> <p><b>ENVIO GRATIS</b> POR COMPRAS SUPERIORES A <b>$200.000 </b></p> <a class="a-continue-purchase" onclick="goHome()">SEGUIR COMPRANDO >></a> </div> </div> </section>';
    document.head.innerHTML += '<link rel="stylesheet" href="../styles/index.css">';
    document.querySelector(".img-user-link").addEventListener('click', function() {
        url = "./login.html";
        window.location.href = url;
    });
    document.querySelector(".img-cart-link").addEventListener('click', function() {
        url = "./cart-1.html";
        window.location.href = url;
    });
} else {
    document.body.innerHTML += '<section class="section-navbar"> <div class="div-navbar"> <div class="div-black-stripe"> <img src="./imgs/saku_logo.svg" width="105" height="90" alt="" class="navbar-icon"> <div class="div-navbar-options"> <ul class="div-options-list"> <li><a href="./index.html" onclick="goHome()">Inicio</a></li> <li class="li-products-option"><a href="" onclick="goHome()">Productos</a></li> <li><a href="">Nosotros</a></li> </ul> </div> <div class="div-navbar-interactions"> <img src="./imgs/cart.svg" class="img-cart-link"></img> <img src="./imgs/profile.svg" class="img-user-link"></img> </div> </div> <div class="div-red-stripe"> <p><b>ENVIO GRATIS</b> POR COMPRAS SUPERIORES A <b>$200.000 </b></p> <a class="a-continue-purchase" onclick="goHome()">SEGUIR COMPRANDO >></a> </div> </div> </section>';
    document.head.innerHTML += '<link rel="stylesheet" href="./styles/index.css">';
    document.querySelector(".img-user-link").addEventListener('click', function() {
        url = "./paginas/login.html";
        window.location.href = url;
    });
    document.querySelector(".img-cart-link").addEventListener('click', function() {
        url = "./paginas/cart-1.html";
        window.location.href = url;
    });
    const products1 = [
        {
            name: "Crater Super variado #1",
            price: 75250,
            brand: "Saku",
            img: 'krate1.png',
            quantity: 0
        },
        {
            name: "Crater Super variado #2",
            price: 100000,
            brand: "Saku",
            img: 'krate2.png',
            quantity: 0
        },
        {
            name: "Crater Super variado #3",
            price: 50500,
            brand: "Saku",
            img: 'krate3.png',
            quantity: 0
        },
        {
            name: "Crater Super variado #4",
            price: 35900,
            brand: "Saku",
            img: 'krate4.png',
            quantity: 0
        },
        {
            name: "Crater Especial SE",
            price: 99900,
            brand: "Doki",
            img: 'krate7.png',
            quantity: 0
        },
        {
            name: "Crater Especial #1",
            price: 63200,
            brand: "Dudu",
            img: 'krate5.png',
            quantity: 0
        },
        {
            name: "Crater Especial #2",
            price: 92500,
            brand: "Dudu",
            img: 'krate6.png',
            quantity: 0
        }
    ];
    function addProductToCart(product) {
        let products2 = [];
        if (localStorage.getItem("products")) {
            let temp = JSON.parse(localStorage.getItem("products"));
            let flag = false;
            temp.forEach((p)=>{
                if (p.name == product.name) {
                    p.quantity++;
                    flag = true;
                }
            });
            if (flag == false) {
                product.quantity++;
                products2 = [
                    ...temp,
                    product
                ];
            } else products2 = temp;
        } else {
            product.quantity++;
            products2.push(product);
        }
        localStorage.setItem('products', JSON.stringify(products2));
    }
    function renderProducts(products) {
        let listaProductos = document.querySelector(".div-product-list");
        listaProductos.innerHTML = "";
        products.forEach((p)=>{
            let divProducto = document.createElement("div");
            divProducto.innerHTML = `<div class="div-product">
                <img src="./imgs/${p.img}" alt="">
                <div class="div-product-info">
                  <label class="label-price" for="">$${p.price}</label>
                  <div class="div-product-description">
                    <label for="">${p.name}</label>
                    <button class="button-add-product"></button>
                    <input type="hidden" value="${p.brand}">
                  </div>
                </div>
              </div>`;
            divProducto.querySelector("button").addEventListener('click', function() {
                addProductToCart(p);
            });
            listaProductos.append(divProducto);
        });
    }
    setTimeout(()=>{
        renderProducts(products1);
    }, 0);
    function sortByPrice(price1, price2) {
        var temp = [];
        if (!price2) temp = products1.filter((p)=>p.price <= price1
        );
        else temp = products1.filter((p)=>p.price >= price1 && p.price <= price2
        );
        renderProducts(temp);
    }
    function sortByBrand(brand) {
        var temp = products1.filter((p)=>p.brand == brand
        );
        if (brand == "Todos") renderProducts(products1);
        else renderProducts(temp);
    }
}

//# sourceMappingURL=index.1768aea9.js.map
