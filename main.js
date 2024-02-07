let form = document.forms.registration
let email = form.elements[1]
//console.log(form.elements[1])
//console.log(form.elements.emails)

//let elem = form.elements.email

//for (let i of forms.elements){
//    console.log(i)
//}

//console.log(elem.form)

//console.log(form.element[0].value)
//console.log(form.element[2].classList[0])
//console.log(form.element[5].checked)

//form.addEventListener('focus', () => console.log('focus'))
//form.addEventListener('blur', () => console.log('blur'))
//form.addEventListener('focusin', () => console.log('focus'))
//form.addEventListener('focusout', () => console.log('blur'))

email.addEventListener('change', () => console.log(email.value))































