window.onload = function() {
	
	init_1();
	init_2();
	init_3();
	init_4();

}

function init_1() {
	const menu = document.querySelector(".menu");
	const for_menu = document.querySelector(".menu_for_phones");
	const stripes = document.querySelectorAll(".stripe");
	var open = false;
	const toTest = document.getElementsByTagName('a');
	for (let i = 0; i < toTest.length; i++) {
		toTest[i].addEventListener("mouseover", function() {
			toTest[i].href = "new_test/main_test.html";
		});
	}

	menu.addEventListener("click", function(){
			if (open) {
				for_menu.style.left = "-95%";
				stripes[0].style.transform = "rotate(0deg)";
				stripes[1].style.opacity = "1";
				stripes[2].style.transform = "rotate(0deg)";
				for (let g = 0; g < stripes.length; g++) {
					stripes[g].style.marginTop = "5px";
				}
			} else {
				for_menu.style.left = "50%";
				stripes[0].style.transform = "rotate(-45deg)";
				stripes[1].style.opacity = "0";
				stripes[2].style.transform = "rotate(45deg)";
				for (let q = 0; q < stripes.length; q++) {
					stripes[q].style.marginTop = "-8px";
				}
			}
			open = !open;
	});
}

function init_2() {
	const menu_for_tablets = document.querySelectorAll(".header_bar li");
	const menu_for_phone = document.querySelectorAll(".menu_for_phones .point");
	console.log(menu_for_tablets);
	console.log(menu_for_phone);
	for (let i = 0; i < menu_for_tablets.length; i++) {
		menu_for_tablets[i].addEventListener("click", function() {
			console.log((i * 400) + 400);
			$(window).scrollTop((i * 400) + 400);
		});
	}
	for (let j = 0; j < menu_for_phone.length; j++) {
		menu_for_phone[j].addEventListener("click", function() {
			console.log((j * 400) + 400);
			$(window).scrollTop((j * 400) + 400);
		});
	}
}
function init_3() {
			var counter = 0;
			var img_max = 4;
			var device_width = 450 * img_max;
			var divs = document.querySelector(".content");
			document.querySelector(".left").addEventListener("click", function() {
				counter--;
				console.log(counter);
				if (counter < 0) {
					counter = img_max;
				}
				if (counter > img_max) {
					counter = 0;
				}
				document.querySelector(".content").style.backgroundPositionX = "-" +  counter * (device_width / img_max) + "px"; 
			});
			document.querySelector(".right").addEventListener("click", function() {
				counter++;
				console.log(counter);
				if (counter < 0) {
					counter = img_max;
				}
				if (counter > img_max) {
					counter = 0;
				}
				document.querySelector(".content").style.backgroundPositionX = "-" + counter * (device_width / img_max) + "px"; 
			});
}
function init_4() {
	document.querySelector(".selector_1").addEventListener("click", function() {
				$(window).scrollTop(400);
			});
			document.querySelector(".selector_4").addEventListener("click", function() {
				$(window).scrollTop(800);
			});
	document.querySelector(".selector_5").addEventListener("click", function() {
		$(window).scrollTop(1300);
	});
			document.querySelector(".selector_2").addEventListener("click", function() {
				$(window).scrollTop(1800);
			});
	document.querySelector(".selector_3").addEventListener("click", function() {
		$(window).scrollTop(1800);
	});
}
	
