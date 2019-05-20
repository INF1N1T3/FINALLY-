window.onload = function() {
	
	init_1();
	init_2();

}

function init_1() {
	const menu = document.querySelector(".menu");
	const for_menu = document.querySelector(".menu_for_phones");
	const stripes = document.querySelectorAll(".stripe");
	var open = false;
	const toTest = document.querySelectorAll("to_test");
	for (let i = 0; i < toTest.length; i++) {
		toTest[i].addEventListener("click", function() {
			window.location.href = "finally/new_test/main_test.html";
		});
	}
	menu.addEventListener("click", function(){
			if (open) {
				for_menu.style.left = "-95%";
				stripes[0].style.transform = "rotate(0deg)";
				stripes[1].style.opacity = "1";
				stripes[2].style.transform = "rotate(0deg)";
				for (var i = 0; i < stripes.length; i++) {
					stripes[i].style.marginTop = "5px";
				}
			} else {
				for_menu.style.left = "50%";
				stripes[0].style.transform = "rotate(-45deg)";
				stripes[1].style.opacity = "0";
				stripes[2].style.transform = "rotate(45deg)";
				for (var i = 0; i < stripes.length; i++) {
					stripes[i].style.marginTop = "-8px";
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
			console.log(i * 480);
			$(window).scrollTop(i * 480);
		});
	}
	for (let j = 0; j < menu_for_phone.length; j++) {
		menu_for_phone[j].addEventListener("click", function() {
			console.log(j * 450);
			$(window).scrollTop(j * 450);
		});
	}
}
	
