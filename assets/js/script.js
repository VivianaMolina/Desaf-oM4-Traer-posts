var button = document.querySelector("button");

button.addEventListener("click", function () {
    getPost();
});

// 1. Realizar un request (consulta) a la API usando async-await.
const getPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // bloque Try - 3. Manejar los posibles errores con try-catch.
    try {
        const response = await fetch(url); //método fetch mediante la instrucción await
        const data = await response.json();
        //llama a la funcion que crea las listas no ordenadas para mostrar cada uno de los post
        listPost(data);
    } catch (error) { // bloque Catch - 3. Manejar los posibles errores con try-catch.
        console.error('Error al obtener datos:', error);
        throw error; // Manejamos el error y lo propagamos
    }
}

//funcion que crea las listas no ordenadas para mostrar cada uno de los post
const listPost = (value) => {

    const lista = document.getElementById("post-data");

    value.forEach((element) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${element.title}</strong> <br> ${element.body}`;
        lista.appendChild(li);
    })
};
