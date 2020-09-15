export class Project {
    constructor(title, description, dueDate) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate
    }
}


export function addProjectToList(project) {
    const list = document.querySelector('#projectList');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${project.title}</td>
    <td>${project.description}</td>
    <td>${project.dueDate}</td>
    <td>
        <select name="priority" id="priority"> 
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="Low">Low</option>
        </select>
    </td>
    <td><button id="steps">Add Steps</button></td>
    <td><button class="status" id="status">Incomplete</button></td>
    `;
    list.appendChild(row);
};

    




