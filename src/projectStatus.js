
export function changeStatus(el)  {
    if(el.classList.contains('status')) {
        el.style.backgroundColor = "#90EE90";
        el.innerText = "Completed";
        el.style.color = "black"
    }  
}
