let bool = true;
let boolMenuM = false;

let collapseButton = document.querySelector(".collapse__button");
let collapseContent = document.querySelector(".section__typesOf-collapse");
let collapseButtonIndicator = document.querySelector(".collapse__button-indicator");
let collapseH2 = document.querySelector(".collapse__h2");
let collapseDescription = document.querySelector(".collapse__paragraph");
let cardId = document.querySelectorAll(".descriptionCard__h2");
let cardBody = document.querySelectorAll(".typesOf__description-card");

let mobileButton = document.querySelector(".ul__button");
let mobileMenu = document.querySelector(".header__li-container-mobile");

let descriptions = [
    {
        title: "Cuero de Mango",
        description: `
            Cuero hecho a partir de mango, muy resistente y si le entra a los vergazos. Se pueden hacer diversos tipos de objetos. <br>
            <br>
            Ejemplos: Bolsos, carteras, no sé, ¿Cosas que requieran cuero?
        `
    },
    {
        title: "Cuero de Piña",
        description :`
            Cuero hecho de Piña, puede venir en forma de fibras o tiras pequeñas por si logras tener la oportunidad de ahorcar a alguien. <br>
            <br>
            Ejemplos: Bolsos, ropa, utencilios de cocina, nunchakus ¡Y parece oro! ¿Quien no ama el oro? .
        `
    },
    {
        title: "Cuero de Cortesa de Árbol",
        description: `
            ¿Adivina de dónde viene? Es uno de los mejores cueros. Es más resistente y se puede hacer todo tipo de cosas con el. <br>
            <br>
            Ejemplos: Bolsos, ropa, cartuchos de escopeta, hachas, espadas y 4 losas de madera, permatrago y camuflajes tácticos DPM británico Woodland para esconderse entre los árboles para 
            campear. 
        `
    }
]

collapseButton.addEventListener("click", ()=>{
    if(bool == false){
        collapseContent.style = `
            transition: .3s ease;
            height: 0;
        `
        // collapseButton.style = `
        //     transition: .3s ease;
        //     background-color: #bec5cc;
        // `
        // setTimeout(()=>{
        //     collapseButton.style = `
        //     transition: .3s ease;
        //     background-color: #cfd7df;
        // `
        // }, 500);
        collapseButtonIndicator.innerHTML = "ABRIR";
        bool = true;
    }else if(bool){
        collapseContent.style=`
            transition: .3s ease;
            height: 300px;
        `
        bool = false;
    //     collapseButton.style = `
    //     transition: .3s ease;
    //     background-color: #bec5cc;
    // `
    // setTimeout(()=>{
    //     collapseButton.style = `
    //     transition: .3s ease;
    //     background-color: #cfd7df;
    // `
    // }, 500);
        collapseButtonIndicator.innerHTML = "CERRAR";
    }

})

cardBody[0].addEventListener("click", ()=>{
    collapseH2.innerHTML = descriptions[0].title;
    collapseDescription.innerHTML = descriptions[0].description;
})
cardBody[1].addEventListener("click", ()=>{
    collapseH2.innerHTML = descriptions[1].title;
    collapseDescription.innerHTML = descriptions[1].description;
})
cardBody[2].addEventListener("click", ()=>{
    collapseH2.innerHTML = descriptions[2].title;
    collapseDescription.innerHTML = descriptions[2].description;
})

mobileButton.addEventListener("click", ()=>{
    if(bool == false)
    {
        mobileMenu.style = `
            transform: translateY(0);
        `;
        bool = true;
    }else if(bool)
    {
        mobileMenu.style = `
            transform: translateY(-1000px);
        `;
        bool = false;
    }

})