const form_btn = document.getElementById('contacto-form__btn');
const subject = document.getElementById('input_subject');
const input_name= document.getElementById('input_name')


form_btn.addEventListener('click', handleSubmit)
function handleSubmit() {
    subject.value = `Formulario de contacto de ${input_name.value}`;
    alert('Formulario enviado');
}

/*Scroll to top when arrow up clicked BEGIN*/
const arrow_up=document.querySelector("#arrow-up");
window.onscroll = function() {
    var y = window.scrollY;
    if (y > 150) {
        arrow_up.style.display = "block";
    } else {
        arrow_up.style.display = "none";
    }
};


