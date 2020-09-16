export class Project {
    constructor(title, description, dueDate) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate
    }
}


export function addProjectToList(project) {
    const list = document.querySelector('#projectList');
    const projectRow = document.createElement('tr');
    projectRow.innerHTML = `
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
    <td><button class="status" id="status">Incomplete</button></td>
    <td><a href="#" class="delete">X</a></td>
    `;
    const stepRow = document.createElement('tr')
    stepRow.innerHTML = `
    <td>
        <input type="text" id="stepTitle">
        <input type="submit"  value="Add Step">
    </td>   
    <td>
        <ul id="stepList">
            
        </ul>
    </td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    `
    list.appendChild(projectRow);
    list.appendChild(stepRow);
};

    




