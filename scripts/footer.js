var url = window.location.href;

if (!url.includes("login")) {

    let sectionFooter = document.createElement('section');

    sectionFooter.classList.add("section-footer");

    sectionFooter.innerHTML = '<h4>Tienes alguna duda?</h4> <p>Si tienes preguntas, no dudes en contactarnos</p> <!-- <ul class="ul-redes"> <li><span class="material-icons">twitter</span></li> <li class="material-icons">facebook</li> <li class="material-icons">youtube</li> <li class="material-icons">instagram</li> </ul> --> <p>Sitio web creado por Nicolas Sanchez</p>'

    document.body.appendChild(sectionFooter);

    document.querySelectorAll('a').forEach(a=>{
        a.addEventListener('click',function(event){
            event.preventDefault();
        });
    })
    
}