$(function () {
	$('.header__scroll-bottom').click(function () {
		$('html, body').animate({ scrollTop: $(window).height() }, 600);
		return false;
	});
	$('.header__slider').slick({
		asNavFor: '.header__slider-pagination',
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,

		prevArrow: '<button class="slide-arrow slide-arrow__prev"></button >',
		nextArrow: '<button class="slide-arrow slide-arrow__next"></button>'
	});

	$('.header__slider-pagination').slick({
		asNavFor: '.header__slider',
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true
	});

	$('.map-slider').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.surf-slider',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]

	});
	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.map-slider',
		prevArrow: '<button class="surf-slider__arrow surf-slider__arrow-prev"></button >',
		nextArrow: '<button class="surf-slider__arrow surf-slider__arrow-next"></button>',
		responsive: [
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 986,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('.travel-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<button class="travel-slider__arrow travel-slider__arrow-prev"></button >',
		nextArrow: '<button class="travel-slider__arrow travel-slider__arrow-next"></button>'

	});

	$('.sleep-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<button class="sleep-slider__arrow sleep-slider__arrow-prev"></button >',
		nextArrow: '<button class="sleep-slider__arrow sleep-slider__arrow-next"></button>'

	});
	$('.shop-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<button class="shop-slider__arrow shop-slider__arrow-prev"></button >',
		nextArrow: '<button class="shop-slider__arrow shop-slider__arrow-next"></button>'

	});

	function ibg() {

		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}

	ibg();


	// Текущая дата
	var now = new Date();
	const day = document.querySelector('.header__day');
	const year = document.querySelector('.header__year');
	const month = document.querySelector('.header__month');

	day.innerHTML = now.getDate();
	year.innerHTML = now.getFullYear();
	month.innerHTML = now.getMonth() + 1;


	//input customize
	$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
	$('.quantity').each(function () {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	const buttons = document.querySelectorAll('.quantity-button');
	buttons.forEach(element => {
		element.addEventListener("click", function () {
			const summ = document.querySelectorAll('.summ');
			const quantity_nights = document.querySelectorAll('.quantity__nights');
			const quantity_guests = document.querySelectorAll('.quantity__guests');
			for (var i = 0; i < summ.length; i++) {
				summ[i].innerHTML = quantity_nights[i].value * quantity_nights[i].dataset.nights + (quantity_guests[i].value - 1) * quantity_guests[i].dataset.guests;
			}
		})
	});

	const summ = document.querySelectorAll('.summ');
	const quantity_nights = document.querySelectorAll('.quantity__nights');
	const quantity_guests = document.querySelectorAll('.quantity__guests');
	for (var i = 0; i < summ.length; i++) {
		summ[i].innerHTML = quantity_nights[i].value * quantity_nights[i].dataset.nights + (quantity_guests[i].value - 1) * quantity_guests[i].dataset.guests;
	}

})

//Surf-box-circle
const circles = document.querySelectorAll('.item-product__box-circle');
circles.forEach(element => {
	element.addEventListener("click", function () {
		element.classList.toggle('minus');
		element.nextElementSibling.classList.toggle('visible');
	})
});

const menuBtn = document.querySelector('.menu-btn');
const header_menu = document.querySelector('.header__menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		header_menu.classList.remove('close');
		menuOpen = true;
	}
	else {
		menuBtn.classList.remove('open');
		header_menu.classList.add('close');
		menuOpen = false;
	}
})

new WOW().init();




