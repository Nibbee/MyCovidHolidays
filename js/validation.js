const isRequiredValueMissing = (fieldObject) => {

    if (fieldObject.hasAttribute('required') && fieldObject.value == '') {
        return true;
    }
    return false;
};

const isEmailAddressInvalid = (fieldObject) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let isInvalid = !re.test(String(fieldObject.value).toLocaleLowerCase());

    return isInvalid;
}


window.addEventListener('load', () => {
    
    const contactForm = document.querySelector('#contact-form');
    document.querySelector('#validationinfo').innerHTML = " ";

    contactForm.addEventListener('submit', (anEvent) => {
        
        let errorsMessage = ' ';

        if (isRequiredValueMissing(contactForm.name)|| isRequiredValueMissing(contactForm.phone)
        || isRequiredValueMissing(contactForm.email)||isRequiredValueMissing(contactForm.message)){
            errorsMessage += 'You must fill in all the fields. <br>';
        } else if (isEmailAddressInvalid(contactForm.email)) {
            errorsMessage += 'You must give a valid email address. <br>';
        }

        if (errorsMessage.length > 0) {
            document.querySelector('#validationinfo').innerHTML = errorsMessage;
            anEvent.preventDefault();
        }
    })
})