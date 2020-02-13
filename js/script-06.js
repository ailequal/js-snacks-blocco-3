$(document).ready(function () {

	getNames();

	// functions
	// get 10 random names
	function getNames() {
		var arrayNames = [];
		for (var i = 0; i < 10; i++) {
			// name ajax call
			$.ajax({
				url: "https://flynn.boolean.careers/exercises/api/random/name",
				method: "GET",
				success: function (data, state) {
					arrayNames.push(data.response);
					if (arrayNames.length === 10) {
						// console.log(arrayNames);
						getMails(arrayNames);
					}
				},
				error: function (request, state, error) {
					console.log(error);
				}
			});
		}
	}

	// get 10 random mails
	function getMails(arrayNames) {
		var arrayMails = [];
		for (var i = 0; i < 10; i++) {
			// email ajax call
			$.ajax({
				url: "https://flynn.boolean.careers/exercises/api/random/mail",
				method: "GET",
				success: function (data, state) {
					arrayMails.push(data.response);
					if (arrayMails.length === 10) {
						// console.log(arrayMails);
						getPhones(arrayNames, arrayMails);
					}
				},
				error: function (request, state, error) {
					console.log(error);
				}
			});
		}
	}

	// get 10 random phones
	function getPhones(arrayNames, arrayMails) {
		var arrayPhones = [];
		for (var i = 0; i < 10; i++) {
			// email ajax call
			$.ajax({
				url: "https://flynn.boolean.careers/exercises/api/random/phone",
				method: "GET",
				success: function (data, state) {
					arrayPhones.push(data.response);
					if (arrayPhones.length === 10) {
						// console.log(arrayPhones);
						printAddressBook(arrayNames, arrayMails, arrayPhones);
					}
				},
				error: function (request, state, error) {
					console.log(error);
				}
			});
		}
	}

	// create an array with contact objects
	function printAddressBook(arrayNames, arrayMails, arrayPhones) {
		var addressBook = [];
		for (var i = 0; i < 10; i++) {
			var name = arrayNames[i];
			var mail = arrayMails[i];
			var phone = arrayPhones[i];
			addressBook.push({
				name: name,
				mail: mail,
				phone: phone
			});
		}
		console.log(addressBook);
	}

});