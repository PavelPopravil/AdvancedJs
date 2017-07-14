document.addEventListener('DOMContentLoaded', function() {

	const output = document.querySelector('#output');

	const myPromise = new Promise((resolve, reject) => {

		setTimeout(() => {
			resolve('All okey');
		}, 3000);
		
		setTimeout(() => {
			reject('We are in trouble');
		}, 1000);
		
	});

	myPromise.then((res) => {
		output.textContent = res;
	}).catch((err) => {
		output.textContent = err;
	})



	svg4everybody({});

	// objectFit polyfill
	if ('objectFit' in document.documentElement.style === false) {
		document.addEventListener('DOMContentLoaded', function () {
			Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
				(image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

				image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
			});
		});
	}

});

	



	
