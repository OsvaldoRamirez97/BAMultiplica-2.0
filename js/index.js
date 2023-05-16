//Buscador
let buscar = () => {
    let inputSearch = document.getElementById("buscador");
    if(inputSearch.classList.contains("oculto")){
        inputSearch.classList.remove("oculto");
        inputSearch.classList.add("visible");
    }else{
        inputSearch.classList.remove("visible");
        inputSearch.classList.add("oculto");
    }
}