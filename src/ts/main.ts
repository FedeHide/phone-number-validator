const userInput = document.getElementById('user-input') as HTMLInputElement;
const checkBtn = document.getElementById('check-btn') as HTMLButtonElement;
const clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;
const resultsDiv = document.getElementById('results-div') as HTMLDivElement;
const resultsText = document.getElementsByClassName('results-text');

const checkValidNumber = (input: string) => {
	if (input === '') {
		alert('Please provide a phone number');
		return;
	}
	const countryCode = '^(1\\s?)?';
	const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
	const spacesDashes = '[\\s\\-]?';
	const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
	const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);

	const pTag = document.createElement('p');
	pTag.className = 'results-text';
	pTag.id = 'results-text';
	phoneRegex.test(input) ? (pTag.style.color = '#326322') : (pTag.style.color = '#cb2828');
	pTag.appendChild(
		document.createTextNode(
			`${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`,
		),
	);
	resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
	checkValidNumber(userInput.value);
	userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		checkValidNumber(userInput.value);
		userInput.value = '';
	}
});

clearBtn.addEventListener('click', () => {
	for (let i = 0; i < resultsText.length; i++) {
		resultsText[i].textContent = '';
	}
});
