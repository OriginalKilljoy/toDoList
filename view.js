let taskstable = document.getElementById('tasksTable');


updateView()
function updateView(){
    let html = /*HTML*/`
            <tr>
                <th>Oppgave</th>
                <th>Gjort</th>
                <th>Frist</th>
                <th>Ansvarlig</th>
                <th></th>
                <th>Dato utført</th>
            </tr>
    `
    for(let i = 0; i < tasks.length; i++){
        html += createHtmlRow(i);
    }
    taskstable.innerHTML = html;
    }

function createHtmlRow(i){
    const task = tasks[i];
    const checkedHtml = task.isDone ? 'checked = "checked"' : '';
    if(!task.editMode)
        return /*HTML*/`
                <tr>
            <td>${task.description}</td>
            <td> <input onchange="changeIsDone(this, ${i})" type = "checkbox" ${checkedHtml}/> </td>
            <td>${task.doDate}</td>
            <td>${task.responsible}</td>
            <td> <button onclick="deleteTask(${i})">Slett</button>
            <button onclick="editTask(${i})">Rediger</button> </td>
            <td>${task.dateCompleted}</tr>
            </tr>
            
    `;
    return /*HTML*/`
                <tr>
            <td> <input id="editDescription${i}" type="text" value ="${task.description}"/></td>
            <td> <input onchange="changeIsDone(this, ${i})" type = "checkbox" ${checkedHtml}/> </td>
            <td> <input id="editDate${i}" type="date" value ="${task.doDate}"/> </td>
            <td> <input id="editResponsible${i}" type="text" value ="${task.responsible}"/></td>
            <td> <button onclick="updateTask(${i})">Lagre</button> </td>
            <td>${task.dateCompleted}</tr>
            </tr>
    `;
}
    

function changeIsDone(checkbox, index){
    tasks[index].dateCompleted = new Date().toDateString();
    tasks[index].isDone = checkbox.checked;
    updateView();
}

function deleteTask(index){
    tasks.splice(index, 1);
    updateView();
}

function editTask(index){
    tasks[index].editMode = true;
    updateView();
}

function updateTask(index){
    const id1 = `editDescription${index}`;
    const id2 = `editResponsible${index}`;
    const id3 = `editDate${index}`;
    const inputTag1 = document.getElementById(id1);
    const inputTag2 = document.getElementById(id2);
    const inputTag3 = document.getElementById(id3);
    const task = tasks[index];
    task.description = inputTag1.value;
    task.responsible = inputTag2.value;
    task.doDate = inputTag3.value;
    task.editMode = false;
    updateView();
}

//Hvordan gjøre om datoer til riktig format