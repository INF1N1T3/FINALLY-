window.onload = function() {
	const answers = [
	 ["А", "Б", "В", "Г", "Д"],
	 ["Е", "Ё", "Ж"],
	 ["Й", "К"],
	 ["О", "П", "Р", "С"],
	 ["У", "Ф", "Х", "Ц", "Ч"],
	 ];
	 const questions = [
	 "Вы будете сидет до поздна за компьютером?",
	 "Б",
	 "В",
	 "Г",
	 "Д"
	 ];
	 const results = [
	 	 "А",
	 	 "Б",
	     "В",
	     "Г",
	     "Д"
	 ];
	 const full_inf = [
	 		"results/fiz_mat/page 2.html",
	 		"",
	 		"",
	 		"",
	 		""
	 ];
	 const buttons = document.querySelectorAll(".answer");
	 const question = document.querySelector(".question");
	 const result_content = document.querySelector(".result");
	 const result_content_name = document.querySelector(".result .proffesion_name");
	 const result_content_text = document.querySelectorAll(".result .text");
	 const restart = document.querySelector(".restart");
	 const onMain = document.querySelector(".on_main");
	 const onPage = document.querySelector(".on_page");
	 console.log(result_content_name.innerHTML, result_content_text, result_content)
	 var counter = 0;
	 function initNext(counter, result) {
	 	onMain.addEventListener("click",  function() {
	 		console.log("Under construction...");
	 		//window.location.href = "ТРУЛЯЛЯ";
	 	});
	 	restart.addEventListener("click", function() {
	 		window.location.reload()
	 	});
	 		if (questions.length > counter) {
	 			question.innerHTML = questions[counter];
	 			for (let i = 0; i < answers[counter].length; i++) buttons[i].innerHTML = answers[counter][i];
	 			for (let i = 0; i < answers[counter].length; i++) buttons[i].style.display = "block";
	 			for (let i = answers[counter].length; i < buttons.length; i++) buttons[i].style.display = "none";
	 		} else {
	 			if (result < 0) { result = 0} else if (result >= results.length - 1) {result = results.length - 1} 
	 				console.log(Math.round(result));
	 			question.style.display = "none";
	 			result_content_name.innerHTML = results[Math.round(result)];
	 			onPage.addEventListener("click", function() {
	 				console.log("Under construction...");
	 				//window.location.href = full_inf[Math.round(result)];
	 			});
	 			result_content.style.display = "grid";
	 			for (var i = 0; i < buttons.length; i++) {
	 				buttons[i].style.display = "none";
	 			}
	 		}
	 	
	}
	var result = 2;
	initNext(counter, result);
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			let changes = 0.3;
			let middle = Math.round(answers[counter].length / 2);
			let count_ = middle - 1;
			if (answers[counter].length % 2 != 0) {
				
				let mass = [];
				let mid_num = 0;
				for (let j = 0; j < count_; j++) {
					mid_num -= changes;
				}
				for (let a = 0; a < answers[counter].length; a++) {
					let num = mid_num + (changes * a);
					mass[a] = num;
				}
				result += mass[i];
				console.log(result);
			} else {
				let mass_ = [];
				let mid_num = 0;
				for (let l = 0; l < middle; l++) {
					mid_num -= changes;
				}
				for (let q = 0; q < answers[counter].length; q++) {
					if (q != middle) {
						mid_num += changes;
						mass_[q] = mid_num;
						
					} 	else {
						mid_num += changes * 2;
						mass_[q] = mid_num;
					}
				}
				/*for (let q = 0; q < answers[counter].length; q++) {
					if (q != middle) {
						mid_num += changes;
						mass_[q] = mid_num;
						
					} 	else {
						mid_num += changes * 2;
						mass_[q] = mid_num;
					}
				}
				*/
				result += mass_[i];
			    console.log(result);
			}

			counter++;
			initNext(counter, result);
		});
	}
}
