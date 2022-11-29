// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const inputElem = document.querySelector('#todo');
const buttonElem = document.querySelector('#add-todo');
const todosElem = document.querySelector('#todos');

async function saveToDatabase(todoItem) {
    try {
        await addDoc(collection(db, 'todos'), { // Lägger till en ny todo i vår databas i vår collection todos
            todo: todoItem
        });
    } catch (error) {
        console.log('ERROR:', error);
    }
}

async function removeFromDatabase(todoId, todoText) {
    try {
        /*
        // För att uppdatera ett dokument i din databas
        await updateDoc(doc(db, 'todos', todoId), {
            todo: 'Köp te'
        })*/


       await deleteDoc(doc(db, "todos", todoId)); // Radera ett dokument med ett visst id
       await addDoc(collection(db, 'completedTodos'), { // Lägger till den todo som raderas i en annan collections som heter completedTodos
            todo: todoText 
        });
    } catch (error) {
        console.log('ERROR:', error);
    }
}

function addClickEvent() {
    const todoElems = document.querySelectorAll('li'); // Hämtar alla li-taggar

    todoElems.forEach((todoElem) => {
        todoElem.addEventListener('click', (event) => { // Sätter en eventlistener på varje tagg
            const todoId = event.target.getAttribute('data-todo-id'); // Lägger på id på varje li-tagg som ett attribut
            const todoText = event.target.innerText;

            removeFromDatabase(todoId, todoText);
        });
    })
}

async function getAllTodos() {
    const todos = await getDocs(collection(db, 'todos')); // Hämtar alla todos från vår databas
    console.log(todos);

    todos.forEach((todo) => {
        console.log(todo.id);
        console.log(todo.data());
        const elem = `<li data-todo-id="${todo.id}">${todo.data().todo}</li>`;
        todosElem.insertAdjacentHTML('beforeend', elem);
    });

    addClickEvent();
}

buttonElem.addEventListener('click', () => {
    const todoItem = inputElem.value;

    saveToDatabase(todoItem);
});

getAllTodos();