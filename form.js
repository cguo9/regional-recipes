

function gotolink(form){

	// checks for all the countries checked and puts in array
	var country = [];
	$("input:checkbox[name='country']:checked").each(function(){
		//console.log($(this).val());
		if($(this).is(':visible')){
	    	country.push($(this).val());
		}
	});

	console.log(country);
	// gives a random country index
	var randomcount = Math.floor(Math.random() * country.length);

	console.log(randomcount);

	// checks for all the food types checked and puts in array
	var foodtype = [];
	$("input:checkbox[name='foodtype']:checked").each(function(){
		//console.log($(this).val());
	    foodtype.push($(this).val());
	});

	console.log(foodtype);
	// gives a random food type index
	var randomtype = Math.floor(Math.random() * foodtype.length);

	console.log(randomtype);

	// foods for korea
	var korea = [
				//breakfast
				  ["recipes/veg-pancake.html"],
				//lunch
				  ["recipes/tteokbokki.html"],
				//dinner
				  ["recipes/kimchi-stew.html"],
				//dessert
				  ["recipes/bingsu.html"]
				];

	// random food for korea bk, lun, din and des index
	var randkorbk = Math.floor(Math.random() * korea[0].length);
	var randkorlun = Math.floor(Math.random() * korea[1].length);
	var randkordin = Math.floor(Math.random() * korea[2].length);
	var randkordes = Math.floor(Math.random() * korea[3].length);

	var australia = [
			//breakfast
			  ["recipes/FairyBread.html"],
			//lunch
			  ["recipes/fish-and-chips.html"],
			//dinner
			  ["recipes/meat-pie.html"],
			//dessert
			  ["recipes/pavlova.html"]
			];

	var randausbk = Math.floor(Math.random() * australia[0].length);
	var randauslun = Math.floor(Math.random() * australia[1].length);
	var randausdin = Math.floor(Math.random() * australia[2].length);
	var randausdes = Math.floor(Math.random() * australia[3].length);

	var spain = [
		//breakfast
		  ["recipes/pan-con-tomate.html"],
		//lunch
		  ["recipes/paella.html"],
		//dinner
		  ["recipes/patatas.html"],
		//dessert
		  ["recipes/flan.html"]
		];

	var randspabk = Math.floor(Math.random() * spain[0].length);
	var randspalun = Math.floor(Math.random() * spain[1].length);
	var randspadin = Math.floor(Math.random() * spain[2].length);
	var randspades = Math.floor(Math.random() * spain[3].length);


	// // if everything is checked *********************************************
	// if (form.allcontinent.checked && form.allcountry.checked && form.allfoodtype.checked){
	// 	var cout = country[randomcount].toLowerCase().replace(/\s/g, '');
	// 	console.log(cout);
	// 	//document.foodinfo.action = cout[randomtype][randkorbk];
	// 	return;
	// }

	// korea
	if (country[randomcount] == 'Korea') {
		// breakfast
		if (foodtype[randomtype] == "Breakfast") {
			document.foodinfo.action = korea[0][randkorbk];
		}
		// lunch
		if (foodtype[randomtype] == "Lunch") {
			document.foodinfo.action = korea[1][randkorlun];
		}
		// dinner
		if (foodtype[randomtype] == "Dinner") {
			document.foodinfo.action = korea[2][randkordin];
		}
		// dessert
		if (foodtype[randomtype] == "Dessert") {
			document.foodinfo.action = korea[3][randkordes];
		}
	}

	// australia
	if (country[randomcount] == 'Australia') {
		// breakfast
		if (foodtype[randomtype] == "Breakfast") {
			document.foodinfo.action = australia[0][randausbk];
		}
		// lunch
		if (foodtype[randomtype] == "Lunch") {
			document.foodinfo.action = australia[1][randauslun];
		}
		// dinner
		if (foodtype[randomtype] == "Dinner") {
			document.foodinfo.action = australia[2][randausdin];
		}
		// dessert
		if (foodtype[randomtype] == "Dessert") {
			document.foodinfo.action = australia[3][randausdes];
		}
	}

	// spain
	if (country[randomcount] == 'Spain') {
		// breakfast
		if (foodtype[randomtype] == "Breakfast") {
			document.foodinfo.action = spain[0][randspabk];
		}
		// lunch
		if (foodtype[randomtype] == "Lunch") {
			document.foodinfo.action = spain[1][randspalun];
		}
		// dinner
		if (foodtype[randomtype] == "Dinner") {
			document.foodinfo.action = spain[2][randspadin];
		}
		// dessert
		if (foodtype[randomtype] == "Dessert") {
			document.foodinfo.action = spain[3][randspades];
		}
	}


}

