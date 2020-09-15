export let completed = false;

export function changeStatus(el)  {
    if(el.classList.contains('status')) {
        el.style.backgroundColor = "#90EE90";
        el.innerText = "Completed";
        el.style.color = "black"
        completed = true;
    }  
}

export function revertStatus(el)  {
    if(el.classList.contains('status')) {
        el.style.backgroundColor = "rgb(255, 44, 44)";
        el.innerText = "Incomplete";
        el.style.color = "white"
        completed = false;
    }  
}
