const counters = document.querySelectorAll('.counter');
const counters2 = document.querySelectorAll('.counter2');
const speed = 600;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;
        
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target + "+";
		}
	};

	updateCount();
});

counters2.forEach(counter2 => {
	const updateCount2 = () => {
		const target = +counter2.getAttribute('data-target');
		const count2 = +counter2.innerText;

		const inc2 = target / speed;
        
		if (count2 < target) {
			counter2.innerText = count2 + inc2;
			setTimeout(updateCount2, 1);
		} else {
			counter2.innerText = target;
		}
	};

	updateCount2();
});

