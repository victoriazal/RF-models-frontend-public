
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getCookie(name) {

	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

	return matches ? decodeURIComponent(matches[1]) : undefined;

}

function getScrollbarWidth() {

	// Creating invisible container
	const outer = document.createElement('div');
	outer.style.visibility = 'hidden';
	outer.style.overflow = 'scroll'; // forcing scrollbar to appear
	outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
	document.body.appendChild(outer);

	// Creating inner element and placing it in the container
	const inner = document.createElement('div');
	outer.appendChild(inner);

	// Calculating difference between container's full width and the child width
	const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

	// Removing temporary elements from the DOM
	outer.parentNode.removeChild(outer);

	return scrollbarWidth;

}
	
const changeHeight = () => {
	let  vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
changeHeight();

window.addEventListener('resize', () =>  {
	// changeHeight();
	document.documentElement.style.setProperty('--widthScrollbar', getScrollbarWidth()+'px');
});

	
$(function(){
	document.documentElement.style.setProperty('--widthScrollbar', getScrollbarWidth()+'px');

	//	$.fancybox.defaults.backFocus = false;
	

	window.addEventListener("load", () => {
		// Ждём один кадр (или больше, если нужно)
		setTimeout(() => {
		  ScrollTrigger.refresh();
	  
		  // Проверка: есть ли якорь в адресе
		  const hash = window.location.hash;
		  if (hash) {
			const target = document.querySelector(hash);
			if (target) {
			  // Плавно скроллим к якорю вручную
			  target.scrollIntoView(/*{ behavior: "smooth" }*/);

			  
			}
		  }
		}, 100); 
	});
	/**************************************************************
	FORMS
	**************************************************************/
	function digits_int(target){
		let val = $(target).val().replace(/[^0-9]/g, '');
		val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		$(target).val(val);
	}
	$('body').on('input', '.js-input-numbers', function () {
		digits_int(this);
	});
	$('body').on('input', '.js-input-letter', function () {
		this.value = this.value.replace(/[^A-za-zA-ЯЁа-яё\s-]/g, '');
		// if(this.value.length > 70){
		// 	this.value = this.value.slice(0, 70);
		// }
	});
	$('body').on('focus', '.js-phone-mask', function () {
		if(this.value.length == 0){
			this.value = '+';
		}
	});
	$('body').on('blur', '.js-phone-mask', function () {
		if(this.value.length == 1){
			this.value = '';
		}
	});
	$('body').on('input', '.js-phone-mask', function () {
		this.value = this.value.replace(/[^0-9\+\s\-]/g, '');
		// if(this.value.length > 15){
		// 	this.value = this.value.slice(0, 15);
		// }
	});
	$('body').on('input', '.js-input-spch', function () {
		this.value = this.value.replace(/[№~`!@#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g, '');
	});
	$('body').on('input', '.js-input-nocyrilic', function () {
		this.value = this.value.replace(/[а-яё]/gi, '');
	});

    $.mask.definitions['d']='[0-3]';
    $.mask.definitions['m']='[0-1]';
    $.mask.definitions['y']='[1-2]';
	$(".js-date-mask").mask("d9.m9.y999");



	let country_arr = new Array("Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");

	function print_country(country_id, placeholder = 'Select Country'){
		// given the id of the <select> tag as function argument, it inserts <option> tags
		var option_str = document.getElementById(country_id);
		if (!option_str) return;
		option_str.length=0;
		option_str.options[0] = new Option(placeholder,'');
		option_str.selectedIndex = 0;
		for (var i=0; i<country_arr.length; i++) {
			option_str.options[option_str.length] = new Option(country_arr[i],country_arr[i]);
		}
	}
	print_country("citizenship", 'choose citizenship');

	
	document.querySelectorAll('.js-choice').forEach(choice => {
		new Choices(choice, {shouldSort: false, searchEnabled: choice.dataset.search !== undefined})
	})

	$("body").on('change', '.js-addphoto [type=file]', function (event) {
		var input = $(this)[0];
		if (input.files && input.files[0]) {
			if (input.files[0].type.match('image.*')) {
				var file = input.files[0];


				var filesAmount = input.files.length;
				for (i = 0; i < filesAmount; i++) {

					const addphoto = $(input).parents('.js-addphoto');
					const max_size = 30*1024*1024;	
					const min_size = 50*1024;	
					let error = false, error_text = '';

					
					if (input.files[i].size > max_size) {
						error = true; error_text = 'The file <br> is too large.';
					}
					if (input.files[i].size < min_size) {
						error = true; error_text = 'The file <br> is too small.';
					}
					
					if (error) {
						input.files[0] = '';
						$(addphoto).find('[type=file]').val(null)
						$(addphoto).addClass('error').find('.js-addphoto-error').html(error_text);
						$(addphoto).next('.js-addphoto').addClass('active');
						return;
					}

					var reader = new FileReader();
					var numb = 0;
					reader.onload = function (event) {
						var dataUri = event.target.result,
							img = document.createElement("img");
						const canvas = document.createElement("canvas");

						(img.onload = function () {
							let width = img.width,
								height = img.height;
							const maxHeight = 1500,
								maxWidth = 1500;
							var photoClass = "photoV";
							width > height
								? (width > maxWidth && ((height = Math.round((height *= maxWidth / width))), (width = maxWidth)), (photoClass = "photoH"))
								: (height > maxHeight && ((width = Math.round((width *= maxHeight / height))), (height = maxHeight)), (photoClass = "photoV")),
								(canvas.width = width),
								(canvas.height = height);
							const ctx = canvas.getContext("2d");
							ctx.drawImage(img, 0, 0, width, height);
							let compressedData = canvas.toDataURL("image/jpeg", 0.7);


							$(addphoto).addClass('no-empty').find('.js-addphoto-photo').append('<img class="" src="' + compressedData + '" />');
							$(addphoto).next('.js-addphoto').addClass('active');
						}),
							(img.onerror = function (err) {
								reject(err);
							}),
							(img.src = dataUri);
					}
					reader.readAsDataURL(input.files[i]);

				}

			} else {
		
			}
		} else {
	
		}

	});
	$('.js-addphoto-remove').click(function(e) {
		e.preventDefault();
		const addphoto = $(this).parents('.js-addphoto');
		$(addphoto).removeClass('no-empty error').find('.js-addphoto-photo > img').remove();
		$(addphoto).next('.js-addphoto:not(.no-empty)').removeClass('active');
		$(addphoto).find('[type=file]').val(null)
		$(addphoto).find('.js-addphoto-error').text('')
	})

	$('.js-form-valid').submit(function(e) {
    e.preventDefault();

    let error = false;
    const form = $(this);

    // Validate required fields
    $(form).find('[data-required]').each(function() {
        if ($(this).attr('type') === 'checkbox' && !$(this).is(':checked')) {
            error = true;
        } else if ($(this).val() === '') {
            error = true;
        }
    });

    if (error) {
        $(form).find('.js-form-error').addClass('show');
        setTimeout(() => {
            $(form).find('.js-form-error').removeClass('show');
        }, 2000);
        return false;
    }

    const woman = form.find('input[name="looking[]"][value="women"]').is(':checked');
    const man = form.find('input[name="looking[]"][value="men"]').is(':checked');
    const type = form.find('input[name="photoshoot"]:checked').val() === 'commercial' ? 'commercial' : 'creative';
    

    const categoriesMap = {
        'New faces': 'new',
        'asian': 'asian',
        'mulatto': 'mulatto',
        'size+': 'plus'
    };
    const categories = [];
    form.find('input[name="specific[]"]:checked').each(function() {
        const val = $(this).val();
        if (categoriesMap[val]) categories.push(categoriesMap[val]);
    });


    let schedule = form.find('input[name="date"]').val();
    if (schedule) {
        const parts = schedule.split('.');
        if (parts.length === 3) {
            schedule = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
        }
    }

    const budget = parseInt(form.find('input[name="budget"]').val().replace(/\s+/g, ''), 10) || null;
    const phone = form.find('input[name="phone"]').val();

    // Build the payload
    const payload = {
        woman,
        man,
        type,
        categories,
        schedule,
        budget,
        phone
    };

    $.ajax({
        url:`${api}/show/shoot`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: function(response) {
            window.location.href = 'thank.html';
        },
        error: function(xhr) {
            $(form).find('.js-form-error').text('Submission failed, try again.').addClass('show');
            setTimeout(() => {
                $(form).find('.js-form-error').removeClass('show');
            }, 2000);
        }
    });

    return false;
});

	
	// jQuery.validator.addMethod(
	// 	"phones", 
	// 	function(value, element) {
	// 		return this.optional(element) || /^\+[78]{1}\([0-9]{3}\)[0-9]{3}-[0-9]{2}\-[0-9]{2}/.test(value);
	// 	}, 
	// 	"������� ������ �������"
	// );  
	
	
	// function sendMail(form, message) {   
	
	// 	var ya = $(form).attr('data-push');
	// 	var formData = new FormData($(form)[0]);
	// 	var thank = $(form).attr('data-thank') !== undefined ? $(form).attr('data-thank') : 'thank';
	
	// 	$.ajax({
	// 		type: "POST",
	// 		url: 'send.php',
	// 		contentType: false,
	// 		processData: false,
	// 		data:  formData, 
	// 		beforeSend: function() {
	// 			$('.popup').fadeOut(300);
	// 			$('.popup[data-popup="'+thank+'"]').fadeIn(800);				
	// 		},
	// 		success: function(html) {	
					
	// 		}
	// 	});		
	// }

	/**************************************************************
	СКРОЛЛ
	**************************************************************/
	$('body').on('click', '[data-scroll]', function(e){
        e.preventDefault();
		var hash = '#'+$(this).attr("data-scroll");
		
		$('html, body').stop().animate({
	        	scrollTop: $(hash).offset().top-100
	        }, 1000,'easeInOutExpo');
	});


	/**************************************************************
	ПОПАПЫ
	**************************************************************/
	function openModal(popup_n) {
		
		let popup = $('.popup[data-popup="'+popup_n+'"]');
        $(popup).addClass('opened'); 
		$('body').addClass('noscroll');
	}
	function closeModal() {
		$('.popup').removeClass('opened');
		setTimeout(() => {
			$('body').removeClass('noscroll');
		}, 500);
	}

	$('body').on('click', '[data-open-popup]', function(e){
        e.preventDefault();
        
        openModal( $(this).attr('data-open-popup') );
	})		
	$('.popup-close').click(function(e){
		e.preventDefault();

		closeModal();
	})


	/**************************************************************
	меню
	**************************************************************/
	let top_scroll = window.pageYOffset || document.documentElement.scrollTop;

	const tlMenu = gsap.timeline({paused: true});

	if (window.innerHeight > top_scroll) {
		if ($('.hero').length) {
			tlMenu.to('.hero__left, .hero__list--right', {opacity: 0, duration: 0.3})
			tlMenu.to('.hero__inner', {width: '53%', duration: 0.5})
			tlMenu.to('.hero__tm', {width: '53%', duration: 0.5}, '-=0.5')
		} 
		if ($('.promo').length) {
			tlMenu.to('.promo__info', {opacity: 0, duration: 0.3})
		}
	}
	tlMenu.to('.js-navfix', {yPercent: 100, ease: Expo.easeOut, duration: 1})

	$('.js-open-nav').click(function(e){
		e.preventDefault();
		// $(this).toggleClass('active');
		// $('.js-nav').toggleClass('opened');
		$('body').toggleClass('noscroll');
		tlMenu.play();
			// .from('.navfix__menu li', {opacity: 0, stagger: 0.25, ease: Expo.easeOut})
	})
	$('.js-close-nav').click(function(e){
		e.preventDefault();
		setTimeout(() => {
			$('body').removeClass('noscroll');
		}, 1000);
		tlMenu.reverse();
		// gsap.to('.js-navfix', {yPercent: 0, ease: Expo.easeIn, duration: 1})
	})


	/**************************************************************
	NAV
	**************************************************************/
	$('.js-nav-link').click(function (e) {
		e.preventDefault();
		let tab_name = $(this).attr('data-tab'),
			tabs = $(this).parents('.js-tabs');
			
		$(this).parents('.js-nav').find('.js-nav-link').removeClass('active');
		$(this).addClass('active');


		$(tabs).find('.js-tabs-content').removeClass("active").fadeOut(300).promise().done(function () {

			let ct = $(tabs).find('.js-tabs-content[data-tab*=' + tab_name + ']');
			$(ct).addClass("active").fadeIn(300);


		});
	})

	/**************************************************************
	FAQ
	**************************************************************/
	$(".js-faq-toggle").on("click", function (e) {
		e.preventDefault();
		// console.log(e);
		var faq = $(this).parents(".js-faq-item");
		var content = $(faq).find(".js-faq-body");

		if (!faq.hasClass("active")) {
			$(this).parents('.js-faq').find(".js-faq-body").slideUp(300);
			$(this).parents('.js-faq').find(".js-faq-item").removeClass("active");
			content.slideDown(300);
		} else {
			content.slideUp(300);
		}

		faq.toggleClass("active");
	});


	/**************************************************************
	SLIDER
	**************************************************************/
	let whywesSlide = undefined;
	function initSlider() {
		if ( window.innerWidth < 610) {
			whywesSlide = new Swiper(".js-social-carousel", {
				slidesPerView: "auto",
				spaceBetween: 40,
				loop: false,
				speed: 600,
				grabCursor: true,
				breakpoints: {
					0: {
						spaceBetween: 10,
						slidesPerView: 1.2,
						// slidesPerView: "auto",
						// effect: "slide",
						// loop: false
					},
					610: {
						spaceBetween: 20,
						slidesPerView: 1.9
					},
					1024: {
						spaceBetween: 30,
						slidesPerView: 1.9
					},
					1600: {
						spaceBetween: 40,
						slidesPerView: 1.9
					}
				},
			});
		} else  {
		
			whywesSlide = new Swiper(".js-social-carousel", {
				slidesPerView: "auto",
				spaceBetween: 40,
				loop: true,
				effect: "creative",
				creativeEffect: {
					prev: {
						translate: [-150,-250,-2000],
						rotate: [0, 0, 90]
					},
					next: {
						translate: ["105%", 0, 0],
					},
				},
				speed: 600,
				grabCursor: true,
				breakpoints: {
					0: {
						spaceBetween: 10,
						slidesPerView: 1.2,
						// slidesPerView: "auto",
						// effect: "slide",
						// loop: false
					},
					610: {
						spaceBetween: 20,
						slidesPerView: 1.9
					},
					1024: {
						spaceBetween: 30,
						slidesPerView: 1.9
					},
					1600: {
						spaceBetween: 40,
						slidesPerView: 1.9
					}
				},
			});
		}
	}

	initSlider();   
	window.onresize = function(event) {
		initSlider();        
	};

	
	const socialSL_1 = new Swiper(".js-social-sl-1", {	
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		allowTouchMove: false,
		loop: true,
		speed: 800,
		autoplay: {
			delay: 5000,
		}
	});
	const socialSL_2 = new Swiper(".js-social-sl-2", {	
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		allowTouchMove: false,
		loop: true,
		speed: 800,
		autoplay: {
			delay: 5000,
		}
	});
	const socialSL_3 = new Swiper(".js-social-sl-3", {	
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		allowTouchMove: false,
		loop: true,
		speed: 800,
		autoplay: {
			delay: 5000,
		}
	});

	socialSL_2.autoplay.stop();
	socialSL_3.autoplay.stop();
	socialSL_1.on("slideNextTransitionStart", function (event) {
		socialSL_1.autoplay.stop();
		socialSL_2.autoplay.start();
		$(".js-social-sl-1").removeClass('active');
		$(".js-social-sl-2").addClass('active');
	});
	socialSL_2.on("slideNextTransitionStart", function (event) {
		socialSL_2.autoplay.stop();
		socialSL_3.autoplay.start();
		$(".js-social-sl-2").removeClass('active');
		$(".js-social-sl-3").addClass('active');
	});
	socialSL_3.on("slideNextTransitionStart", function (event) {
		socialSL_3.autoplay.stop();
		socialSL_1.autoplay.start();
		$(".js-social-sl-3").removeClass('active');
		$(".js-social-sl-1").addClass('active');
	});

	const facesSlider = new Swiper(".js-faces-slider", {	
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		allowTouchMove: false,
		loop: true,
		speed: 800,
		autoplay: {
			delay: 5000,
		}
	});


	const clientsSlider = new Swiper(".js-clients-slider", {	
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		allowTouchMove: false,
		loop: true,
		speed: 800,
		autoplay: {
			delay: 5000,
		}
	});
	const clientsCarousel = new Swiper(".js-clients-carousel", {	
		slidesPerView: "auto",
		spaceBetween: 0,
		loop: true,
		allowTouchMove: false,
        touchStartPreventDefault: false,
		speed: 6000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false
		}
	});


	if ($('.js-team-slider').length) {
		const teamSlider = new Swiper(".js-team-slider", {	
			
			// allowTouchMove: false,
			slidesPerView: "auto",
			watchSlidesProgress: true,
			spaceBetween: 0,
			loop: true,
			speed: 800,
			// allowTouchMove: false,
			// touchStartPreventDefault: false,
			// effect: "coverflow",		
			// coverflowEffect: {
			// 	rotate: 0,
			// 	stretch: 50,
			// 	depth: 200,
			// 	modifier: 0.5,
			// 	scale: 0.5,
			// 	slideShadows: false,
			// },
			// autoplay: {
			// 	delay: 5000,
			// }		
			scrollbar: {
				el: '.js-team-slider-scrollbar',
				// draggable: true,
			},
			navigation: {
				nextEl: ".js-team-slider-next",
				prevEl: ".js-team-slider-prev",
			}, 
		});
	
		var boxElem = document.querySelector('.team');
		var btnPrev = document.querySelector('.js-team-slider-prev');
		var btnNext = document.querySelector('.js-team-slider-next');
	
		function onMouseMove(event) {
			var mouseX = event.pageX;
			var mouseY = event.pageY;
			var crd = boxElem.getBoundingClientRect();
	
			var activePointerNext = $('.team').outerWidth()/2 < mouseX && mouseX <= $('.team').outerWidth() && $('.team').offset().top <= mouseY && mouseY <= ($('.team').offset().top + $('.team').outerHeight());
			var activePointerPrev = 0 <= mouseX && mouseX <= $('.team').outerWidth()/2 && $('.team').offset().top <= mouseY && mouseY <= ($('.team').offset().top + $('.team').outerHeight());
	
			requestAnimationFrame(function movePointer() {
				if (activePointerPrev) {
					btnPrev.classList.add('show');
					btnPrev.style.left = Math.floor(mouseX) + 'px';
					btnPrev.style.top = Math.floor(mouseY - $('.team').offset().top) + 'px';
				} else {
					btnPrev.classList.remove('show');
				}
				if (activePointerNext) {
					btnNext.classList.add('show');
					btnNext.style.left = Math.floor(mouseX) + 'px';
					btnNext.style.top = Math.floor(mouseY - $('.team').offset().top) + 'px';
				} else {
					btnNext.classList.remove('show');
				}
			});
		}
	
		function disablePointer() {
			requestAnimationFrame(function hidePointer() {
				btnPrev.classList.remove('show');
				btnNext.classList.remove('show');
			});
		}
	
		boxElem.addEventListener('mousemove', onMouseMove, false);
		boxElem.addEventListener('mouseleave', disablePointer, false);
	}
	/**************************************************************
	MAPS
	**************************************************************/
	const mapContacts = $('#map');
	function mapsFooterInit(){

		let icon_w = 1, icon_h = 1, zoom = 16;
		let center = $(mapContacts).attr('data-center').split(',');
		if ( window.innerWidth < 610) {
			center = $(mapContacts).attr('data-center-mobile').split(',');
		}
		let coord = $(mapContacts).attr('data-coord').split(',');
		const map = new ymaps.Map($(mapContacts).attr('id'),
			{
				center: center,
				zoom: zoom,
				controls: []
	
			});
		map.behaviors.disable('scrollZoom');
					
		const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			`<div class="contacts__map-ballon"></div>`, {
				build: function () {
					MyIconContentLayout.superclass.build.call(this);
					element = this.getParentElement().getElementsByClassName('contacts__map-ballon')[0];
				},
			}
		);

		let Placemark_TOL = new ymaps.Placemark(coord, {
				// balloonContentBody: '<div style="">'+$(this).data('addr')+'</div>'
			},{ 
				// iconLayout: 'default#image',
				iconImageHref: '',
				// iconImageHref: 'images/icons/marker.svg',
				iconImageSize: [icon_w, icon_h],
				iconImageOffset: [-1*icon_w, -1*icon_h/2],
				
				iconLayout: 'default#imageWithContent',
				iconContentLayout: MyIconContentLayout,
			});

		map.geoObjects.add(Placemark_TOL);
	}

	if($(mapContacts).length) ymaps.ready(mapsFooterInit); 

	/**************************************************************
	KVIZ
	**************************************************************/	
	const stepsCount = $('.js-step-form').length;
	$('.js-kviz-steps-all').text( stepsCount );
	for (let i = 1; i <= stepsCount; i++) {
		$('.js-kviz-progress').append('<div class="js-kviz-progress-item"></div>');
	}

	function changePercentProgr(step) {
		$('.js-kviz-steps-current').text(step);

		if ($('.js-kviz-progress-item.active').length < step) $('.js-kviz-progress-item.active').last().next().addClass('active');
		else $('.js-kviz-progress-item.active').last().removeClass('active');
		$('.js-kviz-progress-item').eq(0).addClass('active');
		
		if (step > 1) $('.js-kviz-prev').removeClass('hide');
		else $('.js-kviz-prev').addClass('hide');
	}

	changePercentProgr(1);
		

	$('.js-kviz-next').click(function(){


		let step_form = $(this).parents('.js-step-form');
		let step = $(step_form).index() + 1;		
		$(step_form).find('.js-kviz-step-error').removeClass('show');

		let error = false
		// if ($(step_form).find('.js-kviz-itemr').length)
		// 	if (!$(step_form).find('.js-kviz-itemr input[type=radio]').is(':checked')) {
		// 		if ( !$(step_form).find('.kviz__vars').hasClass('hidden')) {
		// 				error = true;
		// 		}
		// 	} 
		if ($(step_form).find('[data-required]').length)	{
			$(step_form).find('[data-required]').each(function() {
				if ($(this).val() == '') {
					error = true;
				}
			})
		}
		if (error) {
			$(step_form).find('.js-kviz-step-error').addClass('show');
			setTimeout(() => {
				$(step_form).find('.js-kviz-step-error').removeClass('show');
			}, 2000);
			return true;
		}

		$(step_form).removeClass('active').next('.js-step-form').addClass('active');
		step++;
		changePercentProgr(step);
		
	});
	$('.js-kviz-prev').click(function(e){
		e.preventDefault();
		
		let step_form = $('.js-step-form.active');
		let step = $(step_form).index() + 1;		

		$(step_form).removeClass('active').prev('.js-step-form').addClass('active');
		step--;
		changePercentProgr(step);
	
	});	
	

	$('.js-kviz-sex').change(function(){
		const val = $(this).val().toLowerCase();
		$('[data-type-sex]').addClass('hidden');
		$('[data-type-sex='+val+']').removeClass('hidden');
	})
	$('.js-kviz-other-link-add').click(function(e){
		e.preventDefault();
		
		$(this).addClass('hidden');
		$('.js-kviz-other-link').removeClass('hidden')
	})

	
	
	/**************************************************************
	CLICKS
	**************************************************************/
	$('.js-gallery-more').click(function(e) {
		e.preventDefault();
		// $('.js-gallery-items.hide').eq(0).slideDown(300, function(){
			
		// });

		const item = $('.js-gallery-items.hide').eq(0);
		item.removeClass('hide').css('max-height', item[0].scrollHeight + 'px'); 
		// $(this).removeClass('hide');
		if ($('.js-gallery-items.hide').length == 0) {
			$('.js-gallery-more').hide();
		}
		setTimeout(() => {
			lenis.resize();
		}, 300);
		ScrollTrigger.refresh(true);
		ScrollTrigger.update;
	})


	function showCategoryCatalog(category, subcategory) {
		console.log(category);
		$('.js-category-open').removeClass('active');
		$('.js-category-open[data-category='+category+']').addClass('active');
	}
	$('.js-category-go').click(function(e) {
		if ($('#catalog').length > 0) {
			e.preventDefault();
		
			$('html, body').stop().animate({
				scrollTop: $('#catalog').offset().top+50
			}, 800);

			showCategoryCatalog($(this).attr('data-category'));
		}
	})
	$('.js-category-open').click(function(e) {
		e.preventDefault();

		showCategoryCatalog($(this).attr('data-category'));
	})
	

	/***CASES*************************************************/
	$('.js-cases-more').click(function(e) {
		e.preventDefault();
		
		$(this).toggleClass('closed');
		if ($(this).hasClass('closed')) {
			$('.js-cases-view-count').text($('.js-cases .cases__item').length);
		}
		else {
			$('.js-cases-view-count').text($('.js-cases > .cases__item').length);
				
			// $('html, body').stop().animate({
			// 	scrollTop: $('.cases').offset().top-100
			// }, 300);
		
			lenis.scrollTo('.cases');
		}

		$('.js-cases-hide').slideToggle(300, function(){
		
			lenis.resize();
		});
		setTimeout(() => {
			ScrollTrigger.refresh(true);
			ScrollTrigger.update;
		}, 100);
	
	})


	
	/**************************************************************
	GSAP
	**************************************************************/
	gsap.registerPlugin(ScrollTrigger)

	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;

	// Lenis Smooth scroll
	let durationLenis = 1.8;
	if ( window.innerWidth < 1024) durationLenis = 1;
	const lenis = new Lenis({
		autoRaf: true,
		duration: durationLenis
	})

	let oldScrollY = window.pageYOffset || document.documentElement.scrollTop;
	let newScrollY = 0;
	let deltaScrolY = 0;
	let lastScroll = 0
	let direction = null
	const threshold = 1 // минимальное изменение для смены направления
	lenis.on('scroll', ({ scroll }) => {
        top_scroll = window.pageYOffset || document.documentElement.scrollTop;
      
		if (top_scroll < window.innerHeight / 2) {
			$('.header_fix').removeClass('show');
		} else {
			
			// newScrollY = top_scroll;
			// deltaScrolY = oldScrollY - newScrollY;
			// if(deltaScrolY > -8){
			// 	$('.header_fix').addClass('show');
			// }else{
			// 	$('.header_fix').removeClass('show');
			// }

			// oldScrollY = newScrollY;
			const diff = scroll - lastScroll
			if (Math.abs(diff) > threshold) {
				if (diff > 0 && direction !== 'down') {
				  direction = 'down'
				  $('.header_fix').removeClass('show');
				} else if (diff < 0 && direction !== 'up') {
				  direction = 'up'
				  $('.header_fix').addClass('show');
				}
			  }
		}

	
		  lastScroll = scroll
		
	})


	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	lenis.on('scroll', ScrollTrigger.update)
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	})
	// gsap.ticker.lagSmoothing(0);


	const splitText = (el) => {
		el.innerHTML = el.innerHTML.replace(/(\S*)/g, m => {
	 		return `<span class="word">` +
				m.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>") +
				`</span>`;
		});
		return el;
	};
	

	const sectHitting = gsap.utils.toArray('.js-sect-hitting');
	let valEnd = "+=120%";
	if ( window.innerWidth < 1024) valEnd = "+="+(windowHeight + 60)+'px';
	sectHitting.forEach(sect => {
		// gsap.to(sect, {
		// 	scrollTrigger: {
		// 		trigger: sect,
		// 		start: 'bottom bottom',
		// 		end: 'bottom top',
		// 		scrub: true,
		// 	},
		// 	y: windowHeight,
		// 	ease: 'none'
		// })
		let valStart = "bottom bottom";
		if ($(sect).index() == 0) valStart = "top top";
		console.log(sect, valStart, $(sect).index());
		ScrollTrigger.create({
			trigger: sect,
			start: valStart,
			end: valEnd,
			pin: true,
			pinSpacing: false 
		});
	});


	/***PAGE MAIN************************************************* */
	const heroTl = gsap.timeline({paused: true});
	
	if ($('.hero').length) {
		heroTl.from('.header .header__btnmenu', {y: -150});
		heroTl.from('.header .header__nav li', {y: -150, stagger: 0.2});
		heroTl.from('.header .header__cat-item', {xPercent: 150, stagger: 0.2});	
		heroTl.from('.hero__list--left', {opacity: 0, duration: 0.3}, '-=0.4');	
		heroTl.from('.hero__lsz', {opacity: 0, duration: 0.3}, '-=0.4');
		heroTl.from('.hero__list--right', {opacity: 0, duration: 0.3}, '-=0.4');	
		heroTl.from('.hero__cat-item', {x: 350, duration: 0.4, stagger: 0.2}, '-=0.8');	
		heroTl.from('.hero__tm', {y: 150, duration: 0.3}, '-=0.4');	
	}
	
	const startHero = () => {
		if ($('.hero').length) {
			setTimeout(() => {
				$('.hero .svg-rf').addClass('active');
			}, 500);
			setTimeout(() => {
				heroTl.play();
			}, 1200);
		} 
	}
	if ($('.promo').length) {
		$('.hero .svg-rf').addClass('active');
		const promoTl = gsap.timeline();

		splitText(document.querySelector('.promo__title'));
		promoTl.from('.promo__title .letter', {y: 150, autoAlpha: 0, duration: 0.6, stagger: 0.1});
		promoTl.from('.header .header__logo', {y: -150, duration: 0.5}, '-=0.5');
		promoTl.from('.header .header__burger', {y: -150, duration: 0.5}, '-=0.3');
		promoTl.from('.header .header__nav li', {y: -150, stagger: 0.2}), '-=0.2';
		promoTl.from('.header .header__cat-item', {xPercent: 150, stagger: 0.2}, '-=0.2');	
		promoTl.from('.promo__ileft-label, .promo__thxintro', {opacity: 0, duration: 0.15}, '-=0.4');	
		promoTl.from('.promo__ileft-val', {opacity: 0, duration: 0.15});	
		promoTl.from('.promo__iright-label, .promo__linkbtn', {opacity: 0, duration: 0.15});
		promoTl.from('.promo__iright-val', {opacity: 0, duration: 0.15});
		promoTl.from('.promo__cat-item', {x: 350, duration: 0.4, stagger: 0.2}, '-=0.4');
		promoTl.from('.breadcrumbs', {opacity: 0, duration: 0.15}, '-=0.4');
	} 

	if (getCookie('loaderStart') === '1') {
		$('.loader').hide();
		startHero();
	} else {
		document.cookie = "loaderStart=1; path=/;";

		if ($('.loader').length) {
			const loaderTl = gsap.timeline({onComplete: startHero});
			
			loaderTl.to('.loader__logo', {
				autoAlpha: 1,
				duration: 0.5,
				delay: 0.5,
				ease: 'none'
			});
			if (window.innerWidth > 1023) {
				loaderTl.from('.loader__photo', {
					y: windowHeight*2.5,
					duration: (i, el) => (+el.dataset.speed)/1500,
					ease: 'none'
				});
			}	else {
				loaderTl.to({}, {duration: 1,});
			}
			loaderTl.to('.loader', {
				yPercent: -100,
				duration: 1,
				ease: 'none'
			}, '-=0.5')
		}
	}



	const api = "https://api.rfmodels.ru/api";
	const mediaApi = "https://api.rfmodels.ru/media";
	const container = document.querySelector('.catalog__items');
	let currentChar = 'A';
	let currentInput = '';
	let currentGender = 'female';
	let currentPage = 1;
let pageSize = 16; 
let currentCategory = '';


function fetchAndRenderModels() {
  fetch(`${api}/show/models/alphabet/gender=${currentGender}`)
    .then(res => res.json())
    .then(alphabetData => {
      console.log('alphabet:', alphabetData);

      // Создаём мапу для быстрого поиска
      const alphabetMap = {};
      alphabetData.forEach(item => {
        alphabetMap[item.char] = item.count;
      });

      // Проходим по всем буквам и дизейблим если нет или < 16
      document.querySelectorAll('.catalog__action-letters a').forEach(a => {
        const letter = a.textContent.trim().toUpperCase();
        if (!alphabetMap[letter] || alphabetMap[letter] < 16) {
          a.classList.add('disabled');
        } else {
          a.classList.remove('disabled');
        }
      });
    });

  const params = new URLSearchParams({
    gender: currentGender,
    count: pageSize,
    char: currentChar,
    name: currentInput,
    skip: currentPage,
  });
  if (currentCategory) params.append('category', currentCategory);

  fetch(`${api}/show/models?${params}`)
    .then(res => res.json())
    .then(data => {
      // НЕ очищаем container.innerHTML!
      data.forEach(model => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div class="card__inner" data-model-id="${model.id}">
            <div class="card__photo">
              <img src="${mediaApi}/picture/${model.ico}" alt="${model.fullname}">
            </div>
            <div class="card__info">
              <div class="card__params">
                <div class="card__param"><div class="card__param-label">size</div>${model.measurements?.shoes || '-'}</div>
                <div class="card__param"><div class="card__param-label">height</div>${model.measurements?.height || '-'}</div>
                <div class="card__param"><div class="card__param-label">bust</div>${model.measurements?.bust || '-'}</div>
                <div class="card__param"><div class="card__param-label">waist</div>${model.measurements?.waist || '-'}</div>
                <div class="card__param"><div class="card__param-label">hips</div>${model.measurements?.hips || '-'}</div>
              </div>
                     <div class="card__buttons">
                <a href="https://admin.rfmodels.ru/website/${model.id}" class="btn btn--md btn--wall">
                  <svg class="icon icon--fill"><use xlink:href="images/icons/sprite.svg#plus"></use></svg>
                  <span>portfolio explore</span>
                </a>
              </div>
              <button class="card__wish" data-open-popup="book-model"></button>
            </div>
          </div>
          <div class="card__name"><span>${model.fullname}</span></div>
          <a href="detail.html?id=${model.id}" class="card__lopen"></a>
        `;
        container.appendChild(card);
      });

      document.querySelector('.catalog__pagination-pages span').textContent = container.children.length;

      const cards = gsap.utils.toArray('.card');
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 100%',
            end: 'top 60%',
            scrub: true,
          },
          yPercent: (20 + i % 4 * 10),
          opacity: 0.5,
          ease: "none",
        });
      });
    });
}



	
	// Клик по букве
	document.querySelectorAll('.catalog__action-letters a:not(.disabled)').forEach(a => {
		a.addEventListener('click', e => {
			container.innerHTML = '';
			e.preventDefault();
			currentChar = a.textContent.trim();
			fetchAndRenderModels();
		});
	});
	
	// Поиск по имени
	document.querySelector('.catalog__search').addEventListener('submit', e => {
		e.preventDefault();
		currentInput = e.target.querySelector('.catalog__search-input').value.trim();
		fetchAndRenderModels();
	});
	
	// Клик по переключателю пола
	document.querySelectorAll('.js-category-open').forEach(a => {
		a.addEventListener('click', e => {
			currentCategory = '';
			container.innerHTML = '';
			e.preventDefault();
			currentGender = a.dataset.category === 'men' ? 'male' : 'female';
			fetchAndRenderModels();
		});
	});
	// Клик по переключателю категорий
	document.querySelectorAll('.catalog__action-categ__item a').forEach(a => {
		a.addEventListener('click', e => {
			container.innerHTML = '';
			e.preventDefault();
			const text = a.textContent.trim().toLowerCase();
			if (text === 'new faces') currentCategory = 'new';
			else if (text === 'mulatto') currentCategory = 'mulatto';
			else if (text === 'asian') currentCategory = 'asian';
			else if (text === 'size+') currentCategory = 'plus';
			else currentCategory = '';
			currentPage = 1; // reset to first page on filter change
			fetchAndRenderModels();
		});
	});
	document.querySelector('.catalog__pagination-buttons button').addEventListener('click', e => {
		e.preventDefault();
		currentPage++;
		fetchAndRenderModels();
	});
	// Первая загрузка
	fetchAndRenderModels();
	




	/***PAGE ABOUT************************************************* */
	if ($('.js-faces-scroll').length) {
		facesSlider[0].autoplay.stop();
		facesSlider[1].autoplay.stop();

		gsap.set('.faces__wrap', {opacity: 0})
		if (window.innerWidth >= 610) gsap.set('.faces__slbg', {width: '40%', height: '40%', top: '-10%', right: '23%'});
		else gsap.set('.faces__slbg', {width: '50%', height: '30%', top: '-20px', right: '25%'})
		gsap.to('.faces__slbg', {
			scrollTrigger: {
				trigger: '.faces',
				start: "top 90%", 
				end: "top top", 
				scrub: true,
			},
			width: '65%', height: '65%',
			top: '50%', right: '50%',
			ease: 'none'
		})
		const facesTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.faces',
				start: "top top", 
				end: () => '+=' + windowHeight*2, 
				scrub: true,
				// markers: true,
				pin: true,
			},
			onComplete: ()=> {facesSlider[0].autoplay.start(); facesSlider[1].autoplay.start();}
		});
		facesTl
		// .set('.faces__slbg', {width: '65%', height: '65%'})
		.to('.faces__slbg', {			
			width: '100%', height: '100%',
			ease: 'none',
			duration: 1
		})
		.to('.faces__wrap', {opacity: 1, duration: 0.3})
		.to({}, {duration: 0.1,ease: 'none',});
	}

	
	const gallItem = gsap.utils.toArray('.gallery__item');
	gallItem.forEach(item => {
		const gallTl = gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: 'top 95%',
				end: 'top -50%',
				// start: 'top 80%',
				// end: 'top 30%',
				scrub: true,	
				// markers: true,
			}
		});
		const itemTitle = item.querySelector('.gallery__item-title');
		const itemPhoto = item.querySelector('.gallery__item-photo');
		gsap.set(itemPhoto, {width: '0%', height: '0%'});
		gsap.set(itemTitle, {opacity: 0});
		gallTl.to(itemPhoto, {
			width: '100%', height: '100%',
			ease: "none",
			duration: 1
		})
		.to(itemTitle, {opacity: 1, duration: 0.2})
		.to({}, {duration: 2})
		.to(itemTitle, {opacity: 0, duration: 0.1})
		.to(itemPhoto, {
			width: '0%', height: '0%',
			ease: "none",
			duration: 1
		})
	})


	/***PAGE CONTACTS************************************************* */
	if ($('.department').length) {
		// document.querySelector('.department__scbb').style.height = document.querySelector('.department__scb').clientHeight+'px';
		// const depHeight = document.querySelector('.department').clientHeight - windowHeight*0.7; 
		// gsap.from('.department__scb', {
		// 	scrollTrigger: {
		// 		trigger: '.department',
		// 		start: 'top 30%',
		// 		end: 'bottom bottom',
		// 		scrub: true,
		// 		duration: 1
		// 	},
		// 	y: -depHeight,
		// 	ease: 'none'
		// })
	}

	/***PAGE SCOUTING************************************************* */
	if ($('.career__wrap').length > 0) {
		let gsapBl = $('.career__wrap').width();
		let gsapTrack = $('.career__inner').width();
		let scrollSliderTransform = gsapTrack;

		splitText(document.querySelector('.career__title'));
	
		ScrollTrigger.create({
			trigger: '.career',
			start: 'top top',
			end: () => '+=' + gsapTrack*1.5,
			pin: true,
			scrub: 0,
			// markers: true,
		})

		const tlCareer = gsap.timeline({
			scrollTrigger: {
				trigger: '.promo',
				start: 'bottom center',
				end: () => '+=' + gsapTrack*1.5,
				// pin: true,
				scrub: 0,
				// markers: true,
			}
		});
		tlCareer.to('.career__inner', {
			ease: "none",
			x: '-=' + scrollSliderTransform + 'px',
			duration: 1
		})
		.from('.career__title .letter', {
			y: 100,
			autoAlpha: 0,
			duration: 0.4,
		})
		.from('.career__props, .career__list', {
			duration: 0.4,
			ease: "power1.out",
			opacity: 0
		}, '-=0.4')
		.to({}, {duration: 0.1});

	}
	
	if ($('.photos__item').length > 0) {
		const itemPhoto = gsap.utils.toArray('.photos__item');
		itemPhoto.forEach(item => {
			gsap.set(item, {width: 0});
			gsap.to(item, {
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					end: 'top 40%',
					scrub: true,
				},
				width: '100%',
				ease: "power1.out",
			})
			const photo = item.querySelector('.photos__item-photo');
			gsap.set(photo, {width: '100%', paddingBottom: '153%'});
			gsap.to(photo, {
				scrollTrigger: {
					trigger: item,
					start: 'top top',
					end: () => `+=${item.offsetHeight*3}`,
					scrub: true,
				},
				width: '0%', padding: '0',
				ease: 'slow'
			})

		})
	}

	/***PAGEs ELEMENTS************************************************* */

	if ($('.catalog__title').length) {
		document.querySelectorAll('.catalog__title-word').forEach(word => {
			splitText(word);
		})
		const animCatalogTitle = gsap.timeline({
			scrollTrigger: {
				trigger: '.catalog__title',
				start: "top 80%", 
			}
		});
		animCatalogTitle.from('.catalog__title .letter', {
			y: 100,
			autoAlpha: 0,
			scale: 0.6,
			duration: 0.5,
			stagger: 0.1
		})
	}

	const sectTitle = document.querySelectorAll('.js-title-word-up');
	sectTitle.forEach(item => {
		splitText(item);
		let itemAnim = gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top 80%", 
			}
		});
		itemAnim.from(item.querySelectorAll('.letter'), {
			y: 100,
			autoAlpha: 0,
			duration: 0.8,
		});
	});
	const sectTitleLetter = document.querySelectorAll('.js-title-letter-up');
	sectTitleLetter.forEach(item => {
		splitText(item);
		gsap.from(item.querySelectorAll('.letter'), {
			scrollTrigger: {
				trigger: item,
				start: "top 80%", 
			},
			y: 100,
			autoAlpha: 0,
			duration: 0.5,
			scale: 0.6,
			stagger: 0.1
		});
	});

	function animateSectBGScroll() {
		const sectBG = document.querySelectorAll('.js-sect-bg-scroll');
		if (window.innerWidth > 1023) {
			sectBG.forEach(bg => {
				const bgHeight = bg.clientHeight;
				gsap.to(bg, {
					scrollTrigger: {
						trigger: bg.closest('section'),
						start: "bottom bottom",
						end: 'bottom top',
						scrub: true, 
					},
					y: bgHeight/2,
					ease: 'none'
				});
			});
		} else {
			
		}
	}
	animateSectBGScroll();
	window.addEventListener("resize", animateSectBGScroll);
	
	const footerTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.footer',
			start: "top 50%", 
			// markers: true,
		}
	})
	footerTl.from('.footer__linkbtn', {opacity: 0, y: 50, duration: 0.4})
			.from('.footer__menu', {opacity: 0, y: 50, duration: 0.4})
			.from('.footer__navitem', {opacity: 0, y: 50, stagger: 0.2, duration: 0.3})


	const startFooter = () => {
		$('.footer .svg-rf').addClass('active');
		setTimeout(() => {
			// footerBottomTl.play();
		}, 800);
	}		
	const footerBottomTl = gsap.timeline({
		// paused: true
		onStart: startFooter,
		scrollTrigger: {
			trigger: '.footer',
			start: "95% bottom", 
		}
	})
	footerBottomTl
	// .from('.footer-svg-rf-r', {yPercent: 130, duration: 0.5})
				//   .from('.footer-svg-rf-f', {yPercent: 130, duration: 0.5})
				  .from('.footer__text', {opacity: 0, y: 50,  duration: 0.2}, '+=1.5')
				  .from('.footer__fait', {opacity: 0, y: 50,  duration: 0.2})
				  .from('.footer__cp', {opacity: 0, y: 50,  duration: 0.2})
				  .from('.footer__tm', { opacity: 0, y: 50,  duration: 0.2})

	//resize window
	// const debouncedResize = _.debounce(onWindowResize, 500);
	// function onWindowResize() {
	// 	console.log('Window resized!');
	// 	location.reload();
	// }
	// $(window).on('resize', debouncedResize);

});


