const toDoList = new Array ('Comprar despensa', 'Pagar tarjeta', 'Regresar paquete Amazon', 'Cancelar cuenta debito' , 'Terminar curso Udemy');

console.log ('Lista de tareas : ', toDoList);

// Agregar nueva tarea
toDoList.push('Lavar trastes')
console.log('Se agrego nueva tarea: ', toDoList);

// Eliminar una tarea
const eliminarPrimerTarea = toDoList.shift();
console.log(eliminarPrimerTarea);
console.log('Se eliminó primer tarea: ', toDoList);

// Actualizar lista de tareas
toDoList.splice(0,0, 'Lavar carro');
toDoList.splice(1,1,'Acomodar despensa');
toDoList.splice(2,2, 'Comprar alimento de gatos');
toDoList.splice(3,3, 'Aspirar casa');
toDoList.splice(4,4, 'Lavar ropa de cama');
toDoList.splice(5,5, 'Barrer patio');
console.log('Lista de tareas actualizada: ', toDoList);