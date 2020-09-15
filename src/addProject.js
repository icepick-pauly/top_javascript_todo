export class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    }
}


export function addProjectToList(project) {
    const list = document.querySelector('#projectList');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${project.title}</td>
    <td>${project.description}</td>
    <td>${project.dueDate}</td>
    <td>${project.priority}</td>
    <td><button id="steps">Add Steps</button></td>
    <td id="statusCell"><button id="status">X</button></td>
    `;
    list.appendChild(row);
};

    




