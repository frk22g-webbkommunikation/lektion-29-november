// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
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
        await addDoc(collection(db, 'todos'), {
            todo: todoItem
        });
    } catch (error) {
        console.log('ERROR:', error);
    }
}

async function getAllTodos() {
    const todos = await getDocs(collection(db, 'todos'));
    console.log(todos);

    todos.forEach((todo) => {
        console.log(todo.id);
        console.log(todo.data());
        const elem = `<li>${todo.data().todo}</li>`;
        todosElem.insertAdjacentHTML('beforeend', elem);
    });
}

buttonElem.addEventListener('click', () => {
    const todoItem = inputElem.value;

    saveToDatabase(todoItem);
});

getAllTodos();