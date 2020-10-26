const generatorBtn = document.getElementById('generator-btn');
const submitBtn = document.getElementById('submit-btn');
const pinMatcherBox = document.getElementById('pin-matcher-box');

//four digit random number generaotr
function fourDigitRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min)
}

//pin generator button 
generatorBtn.addEventListener('click', function(){
	let pinGeneratorBox = document.getElementById('pin-generator-box');
	let randomPin = fourDigitRandomNumber(1000, 9999)
	pinGeneratorBox.value = randomPin;
	errorMsg.style.display = 'none'
	successMsg.style.display = 'none';
	pinMatcherBox.value = '';
	let leftedAttempt = document.getElementById('try-left');
	leftedAttempt.innerText = '3';

})


//number pad buttons
const padBtn = document.querySelector('.all-pad-buttons');
padBtn.addEventListener('click', function(e) {
	let currentValue = e.target.value
	if(currentValue == '>' || currentValue == 'c'){
		if(currentValue == 'c'){
			pinMatcherBox.value = '';
		}
		else if(pinMatcherBox.value == '') return
		else{
			console.log('delte')
			pinMatcherBox.value =  pinMatcherBox.value.substring(0, pinMatcherBox.value.length - 1);
		}
	}
	else if(currentValue >= '0' && currentValue <= 9){
		pinMatcherBox.value += currentValue;
	}
	
})


//function for know how many times you tried to pass or fail
function attemptLeft(){
	console.log("lefted attempt")
	let leftedAttempt = document.getElementById('try-left');
	let leftedAttemptValue = parseInt(leftedAttempt.innerText);
	let leftedNewAttempt = leftedAttemptValue - 1;

	leftedAttempt.innerText = leftedNewAttempt;

	if(leftedNewAttempt == 0){
		console.log("less than 0")
		submitBtn.classList.add('disable-btn');
		let waitMsg = document.querySelector('.wait-msg');
		waitMsg.innerText = 'wait 5 seconds..'

		setTimeout(function(){
			submitBtn.classList.remove('disable-btn');	
			leftedAttempt.innerText = '3'
			waitMsg.innerText = '';
		}, 5000)	
	}	

}


const successMsg = document.getElementById('pin-matched-msg');
const errorMsg = document.getElementById('pin-wrong-meg');

// submit button
submitBtn.addEventListener('click', function(){
	let pinGeneratorBox = document.getElementById('pin-generator-box');
	if(pinMatcherBox.value != '' && pinGeneratorBox != ''){
		if(pinGeneratorBox.value == pinMatcherBox.value){
			errorMsg.style.display = 'none'
			successMsg.style.color = 'rgba(0, 255, 0, 5.5)';
			successMsg.style.display = 'block';

		}
		else{
			attemptLeft();
			successMsg.style.display = 'none';
			errorMsg.style.color = 'rgba(255, 155, 20, 1)';
			errorMsg.style.display = 'block'
		}
	}
	
})

