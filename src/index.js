import { Project } from "./modules/addProject"
import { addProjectToList } from "./modules/addProject"
import { completed } from "./modules/projectStatus"
import { changeStatus } from "./modules/projectStatus"
import { revertStatus } from "./modules/projectStatus"
import { removeProject } from "./modules/removeProject"


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

document.querySelector('#projectList').addEventListener('click', (e) => {
    removeProject(e.target);
})


