// CRUD
// C - Create
// R - Read
// U - Update
// D - Delete

let elementos = [];
let editarIndice = -1;

const form = document.getElementById('formulario');
const lista = document.getElementById('listaCrud');

function mostrarElementos() {
    lista.innerHTML = '';
    elementos.forEach((elemento, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <p>${index}.- ${elemento.nombre}: ${elemento.descripcion}</p>
            <button onclick="editarElemento(${index})">Editar Registro</button>
            <button onclick="eliminarElemento(${index})">Eliminar Registro</button>
        `;
        lista.appendChild(div);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e);

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;

    if (editarIndice === -1) {
        // Creando un nuevo elemento en mi CRUD
        elementos.push({ nombre, descripcion });
    } else {
        // Actualizando un regisro existente
        elementos[editarIndice] = { nombre, descripcion };
        editarIndice = -1;
    }


    form.reset();
    mostrarElementos();
});

function editarElemento(index) {
    const elemento = elementos[index];
    console.log(elemento);
    document.getElementById('nombre').value = elemento.nombre;
    document.getElementById('descripcion').value = elemento.descripcion;
    editarIndice = index;
}

function eliminarElemento(index) {
    console.log('Eliminar');
    elementos.splice(index, 1);
    mostrarElementos();
}