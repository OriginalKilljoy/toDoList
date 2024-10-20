let taskDescriptionInput = document.getElementById('taskDescription');
let responsibleInput = document.getElementById('responsibleForTask');
let dateInput = document.getElementById('setDoDate');

function addTask(){
    tasks.push(
        {
            description: taskDescriptionInput.value,
            isDone: false,
            responsible: responsibleInput.value,
            doDate: dateInput.value,
            dateCompleted: ''
        }
    );
    taskDescriptionInput.value = '';
    responsibleInput.value = '';
    updateView();
}