
function restoreLoans() {
	'use strict';
	let loans = JSON.parse(localStorage.getItem('loans'));

	if(loans !== null){
		return loans;
	}
	return [];
}

let database = {
	get: function (key) {
	  return JSON.parse(localStorage.getItem(key));
	},
getArray: function (key) {
    if (localStorage.getItem(key) == undefined) {
      localStorage.setItem(key, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(key));
  },
  saveItemArray: function (keyCollection, value) {
    let collection = this.getArray(keyCollection);
    collection.push(value);
    this.setArray(keyCollection, collection);
  },
}


function saveLoan(loan) {
    'use strict';
	let loans = restoreLoans();

	loans.push(loan);
	localStorage.setItem('loans', JSON.stringify(loans));
}

function saveJson(id, data) {
    'use strict';

	localStorage.setItem(id, JSON.stringify(data));
}


function restoreJson(id) {
	'use strict';
	return JSON.parse(localStorage.getItem(id));
}

function updateLoan(loan){
	'use strict';
	let loans = restoreLoans();
	loans[restore('selectedId')] = loan;
	localStorage.setItem('loans', JSON.stringify(loans));
}

function deleteLoan(id){
	'use strict';
    let loans = restoreLoans();
	loans.splice(id, 1);
	localStorage.setItem('loans', JSON.stringify(loans));
}

function restore(id){
	'use strict';
	return localStorage.getItem(id);
}
function save(id, data){
	'use strict';
	localStorage.setItem(id, data);
}
