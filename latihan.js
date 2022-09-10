

var main= document.querySelector('.main');
var tambah = document.querySelector('#add');
var first = document.querySelector('.first');
var tulisan = document.querySelector('.tulisan');
var down= document.querySelector('.down');
var mainUp = document.querySelector('.main-up');


var count = 0;



function li(){
		// tulisan.classList.add('first');

	var para = document.createElement('div');
	para.className="first";	


		tulisan.appendChild(para);

		// tulisan.innerHTML='<div class="first"></div>';
	
	// buat dia berhenti berfungsi
	count ++
	if (count <= 7) {

	
	}

	else{
		alert('Sory tempat nya sudah penuh')

	}

	para.addEventListener('click', function() {
		mainUp.style.top="0";
	})
	

}

tambah.addEventListener('click',li)

first.addEventListener('click',function ol(){
	

	mainUp.style.top="0";
})



down.addEventListener('click', function li(){
	mainUp.style.top="100%";
})


// masuk ke bagian ke 2

var inputNumber = document.getElementById('input-number');


for ( no = 1 ; no <= 24; no++) {
	var number = document.createElement('span');
	number.className ="number" + no;
	var tex =document.createTextNode( no );

	inputNumber.appendChild(number);
	number.appendChild(tex);

}

var inputMenit = document.getElementById('input-menit');

for ( me = 1; me <= 60; me++ ) {
	var menitBaru = document.createElement('span');
	menitBaru.className="menit";


	var isiMenit = document.createTextNode( me);

	inputMenit.appendChild(menitBaru);
	menitBaru.appendChild(isiMenit);
	

}

function upHour(hour){
		if (hour > 24 ) {
			hour = 1;
			hour++;

	}	
}

hour = 1;
