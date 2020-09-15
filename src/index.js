import { Project } from "./addProject"
import { addProjectToList } from "./addProject"



document.querySelector('#projectForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;

    const project = new Project(title, description, dueDate)

    addProjectToList(project);
});