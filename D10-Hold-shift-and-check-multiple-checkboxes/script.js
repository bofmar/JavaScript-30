const checkboxes = document.querySelectorAll(".inbox input[type=\"checkbox\"]");

checkboxes.forEach(checkbox => checkbox.addEventListener("click",handleCheck));

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    //check if they had shift key down and that they are checking the box
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            if(checkbox === lastChecked || checkbox === this){
                inBetween = !inBetween;
            }
            else if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}