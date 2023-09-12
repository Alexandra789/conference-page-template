const sendFormBtn = document.querySelector('.form__button');
const emailInput = document.querySelector('#email');
const textInput = document.querySelector('#text');
const inputs = document.querySelectorAll('.contact__form input');
const formFields = [...inputs, textInput];

function checkInput(input) {
	input.value.trim() ? input.classList.remove('invalid') : input.classList.add('invalid');
}

function emailTest() {
	const validateEmail = /([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+/.test(emailInput.value);
	validateEmail ? emailInput.classList.remove('invalid') : emailInput.classList.add('invalid')
}

sendFormBtn.addEventListener('click', (e) => {
	e.preventDefault();

	formFields.forEach(field => {
		checkInput(field);
	})
	emailTest();

	formFields.forEach(field => {
		if (!field.classList.contains('invalid')) {
			console.log(`${field.getAttribute('id')} - ${field.value}`)
		}
	})
})