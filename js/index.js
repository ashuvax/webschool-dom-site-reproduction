function buildHeader() {
	const header = document.createElement('header');
	header.textContent = 'Exercice 3';
	header.classList.add('header');
	return header;
}
function buildDescription() {
	const div = document.createElement('div');
	div.setAttribute('id', 'description');

	const h2 = document.createElement('h2');
	h2.textContent = 'Who we are';

	const p = document.createElement('p');
	p.textContent = 'iwdbhsdbhdsbchdbchudebchdeuhedhcre';

	div.appendChild(h2);
	div.appendChild(p);

	return div;
}

function buildPage() {
	const body = document.querySelector('body');
	body.classList.add('body');

	body.appendChild(buildHeader());
	body.appendChild(buildDescription());
}
buildPage();
