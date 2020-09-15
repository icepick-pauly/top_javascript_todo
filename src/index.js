import { Project } from "./addProject"
import { addProjectToList } from "./addProject"
import { completed } from "./projectStatus"
import { changeStatus } from "./projectStatus"
import { revertStatus } from "./projectStatus"



document.querySelector('#projectForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;

    const project = new Project(title, description, dueDate)

    addProjectToList(project);
});

document.querySelector('#projectList').addEventListener('click', (e) => {
        if (completed == false) {
        changeStatus(e.target); 
        } else {
            revertStatus(e.target);
        } 
});

