const form = document.querySelector('#task-form');
const  taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-task');
const taskList = document.querySelector('.collection');


form.addEventListener('submit', addTask);


function addTask(e){
    if(taskInput.value === ''){
        alert('Please Add a Task');
    } else{
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
    taskInput.value = '';
    e.preventDefault();}
}


 
const clearTask = document.querySelector('.clear-task');
clearTask.addEventListener('click', remove);
function remove(e){
 const lis = document.querySelectorAll('li');
 while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
 }
}



addEventListener('click',removeBtn);
function removeBtn(e){
if(e.target.classList.contains('fa-remove')){
    if(confirm('Are You Sure?')){ //this serves as confirmation 
        e.target.parentElement.parentElement.remove();
    }
}

//    console.log(taskInput.value);
}

filter.addEventListener('keyup', filterTasks);
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'
        } else{
            task.style.display = 'none'
        }
    });

}

// storeTaskInLocalStorage(taskInput.value);
// 
// function storeTaskInLocalStorage(task){
        // let tasks;
        // if(localStorage.getItem('tasks') === null){
            // tasks = [];
        // }else {
// 
            // tasks = JSON.parse(localStorage.getItem('tasks'));
        // }
// 
        // tasks.push(task);
        // localStorage.setItem('tasks', JSON.stringify(tasks));
        // 
// }
// 
// console.log(taskInput.value);
