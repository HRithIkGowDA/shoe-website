function isTextValid(error_id) {
    return_value = true;
    let errorThrow = document.getElementById(error_id);
    errorThrow.innerText = "";

    let text_value = errorThrow.nextElementSibling.value;

    if (text_value.length <=3 ){
        errorThrow.innerText="*Enter Atleast 3 Characters";
        return_value = false;
    }
    return return_value;

}


const submit_popup_2 = document.getElementById("submit-popup");
const contact_submit = document.getElementById("form-submit-btn");
const form_edit = document.getElementById("form-submit-edit");
contact_submit.addEventListener("click",()=>{
    form_edit.innerText = "Your feedback is importtant to us! Our team will respond you soon";
    if (checkAllForm()) {
        
        submit_popup_2.classList.add("subscribe-succes");
    }
})

function checkAllForm(){
    return isEmailValid("form-email-error") || isTextValid("form-name-error") || isTextValid("form-subject-error") || isTextValid("form-textarea-error");
}