const toDoSection = document.querySelector('#toDoSection')
const toDoInput = document.querySelector('#toDoInput')
const toDoList = document.querySelector('#toDoList')
const addTaskBtn = document.querySelector('#addTaskBtn')


addTaskBtn.onclick = () => {
    console.log();

    toDoList.innerHTML += `<li>${toDoInput.value}</li>`
    toDoInput.value = ""
    
}
    