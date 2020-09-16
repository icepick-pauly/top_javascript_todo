export function removeProject(el) {
    if(el.classList.contains('delete')) {
        el.parentElement.parentElement.nextSibling.remove();
        el.parentElement.parentElement.remove();
    }
}