window.onload = function() {
	const answers = [
	 ["-Совсем не пугает.",
	  "-Немного пугает, но думаю с этим можно справиться.",
	  "-Сильно пугает."],
	  
	 ["-Да.",
	  "-Если заранее подготовлюсь.",
	  "-Нет."],

	 ["-Без проблем.",
	  "-В зависимости от того, какая сложность.",
	  "-Это явно не ко мне."],

	 ["-Интересно.",
	  "-Затрудняюсь ответить.",
	  "-Скучно."],
	  
	 ["-Без проблем.",
	 "-Если заранее посижу с учебником.",
	 "-Это явно не ко мне." ],

		["-Интересно.",
		 "-Не вызывает отторжения.",
		 "-Скучно."
 ],

		["-Интересно.",
		 "-Не вызывает отторжения.",
		 "-Скучно."
 ],
		["-Интересно.",
		 "-Не вызывает отторжения.",
		 "-Скучно."
 ],
	["-Интересно.",
	 "-Средненько.",
	 "-Скучно."
	],
	["-Да, фиксирую все доходы и расходы.",
	 "-Ну, в целом я знаю, сколько трачу.",
	 "-Нет, не слежу."
],
	["-Заставляет моё сердце биться чаще.",
	 "-Не захватывает, но и отторжения нет.",
	 "-Ввергает в уныние, рождает панику."
	],
		["-Да, меня это не пугает.",
		 "-Меня это немного пугает, но, думаю, я справлюсь.",
	     "-Нет."
	]


	 ];
	 const questions = [
	 "Постоянная работа за компьютером тебя… ",
	 "Можешь ли ты аккуратно делать сложные чертежи?",
	 "Умеешь ли ты быстро производить расчеты в уме?",
	 "Настраивать прокси-сервер — это ...",
	 "Сможешь ли ты оказать первую медицинскую помощь?",
	 "Интересно ли тебе разбираться в свойствах различных материалов?",
	 "Постоянно быть в курсе всех событий мира - это...",
	 "Изучение законов, отслеживание изменений в законодательстве — это ... ",
	 "Рассчитывать заработную плату сотрудникам — это должно быть...",
	 "Следишь ли ты за своими доходами и расходами?",
	 "Изучение строения человеческой ткани, структуры ДНК и всего такого...",
	 "Смог бы ты часто посещать тюрьмы, общаться с преступниками?",
	 ];
	 const results = [
	 	 "Соц - эконом",
	 	 "Физ - мат",
	     "Соц - гум",
	     "Хим - био",
	     "Естест - науч"
	 ];
	 const full_inf = [
	 		"results/soc_econom 2/page 2.html",
		 "results/fiz_mat 2/page 2.html",
			"results/soc_gum 2/page 2.html",
		 "results/chim_bio 2/page 2.html",
	 		"results/chim_bio 2/page 2.html"
	 ];
	 const buttons = document.querySelectorAll(".answer");
	 const question = document.querySelector(".question");
	 const result_content = document.querySelector(".result");
	 const result_content_name = document.querySelector(".result .proffesion_name");
	 const restart = document.querySelector(".restart");
	 const onMain = document.querySelector(".on_main");
	 const onPage = document.querySelector(".on_page");
	 console.log(result_content_name.innerHTML, result_content)
	 let counter = 0;
	 	let result = 2;
	 function initNext(counter, result) {
	 	onMain.addEventListener("mouseover",  function() {
	 		onMain.href = "../index.html";
	 	});
	 	restart.addEventListener("click", function() {
	 		window.location.reload()
	 	});
	 		if (questions.length > counter) {
	 			question.innerHTML = questions[counter];
	 			for (let i = 0; i < answers[counter].length; i++) buttons[i].innerHTML = answers[counter][i];
	 			console.log(answers);
	 			for (let l = 0; l < answers[counter].length; l++) buttons[l].style.display = "block";
	 			for (let m = answers[counter].length; m < buttons.length; m++) buttons[m].style.display = "none";
	 		} else {
	 			if (result <= 0) { result = 0;} else if (result => results.length - 1) {result = results.length - 1;}
	 				console.log(Math.round(result));
	 			question.style.display = "none";
	 			result_content_name.innerHTML = results[Math.round(result)];
	 			onPage.addEventListener("mouseover", function() {
	 				onPage.href = full_inf[Math.round(result)];
	 			});
	 			result_content.style.display = "grid";
	 			for (let a = 0; a < buttons.length; a++) {
	 				buttons[a].style.display = "none";
	 			}
	 		}
	 	
	}
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
