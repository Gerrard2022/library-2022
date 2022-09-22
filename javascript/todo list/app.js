let addTask = document.getElementById('add-task');
let inputTask = document.getElementById('input-task');
let taskcontainer = document.getElementById('task-container');

// event listener for add task

addTask.addEventListener('click', function() {

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = inputTask.value;

    task.appendChild(li);

    let checkbtn = document.createElement('button');
    checkbtn.innerHTML = '<i class="bi bi-check-square"></i>';
    checkbtn.classList.add('checkTask');

    task.appendChild(checkbtn);


    let deletebtn = document.createElement('button');
    deletebtn.innerHTML = '<i class="bi bi-trash-fill"></i>';
    deletebtn.classList.add('deleteTask');

    task.appendChild(deletebtn);

    if(inputTask.value === '') {
        alert('Please Enter a Task');
    } else {
        taskcontainer.appendChild(task);
    }

    inputTask.value = '';



    checkbtn.addEventListener('click', function() {
        checkbtn.parentElement.style.textDecoration = 'line-through' ;
    });

    deletebtn.addEventListener('click', function(e) {
        const target = e.target;
        target.parentElement.parentElement.remove();
    });
});