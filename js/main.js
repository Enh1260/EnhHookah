/*document.getElementById('but_menu').onclick = function(){
	var block_menu = document.getElementsByClassName('lol')[0];
	if(block_menu.style.visibility == "hidden"){
		block_menu.style.visibility = "visible";
	}
	else{ 
		block_menu.style.visibility = "hidden";
	}
}
*/

$(document).ready(function(){
	$('#but_menu').click(function(){
		if($('.lol').css('left') < '0'){
			$('.lol').animate({'left':"+=500"},500)
			$('.top-30').delay(100).animate({'left': '+=500'},500)
			$('.top-40').delay(200).animate({'left': '+=500'},500)
			$('.top-50').delay(300).animate({'left': '+=500'},500)
		}
			else{
			$('.lol').delay(500).animate({'left':"-=500px"},500);
		    $('.top-30').delay(400).animate({'left': '-=500px'},500)
			$('.top-40').delay(300).animate({'left': '-=500px'},500)
			$('.top-50').animate({'left': '-=500px'},500)
		}
	});
});

$(document).ready(function(){
	$('button h1').mouseover(function(){
		$(this).animate({'font-size': '3em',
						 'margin-top':'15px'}, 600);
	});
	$('button h1').mouseout(function(){
		$(this).animate({'font-size': '2em',
						 'margin-top':'20px'}, 600);

	});
	clearTimeout();
});
$(document).ready(function(){
	$('html, body').on('scroll',function(){
		var About_Us = $('#2').offset().top;
		alert("lol");
		//$('window').animate({scrollTop: About_Us},500);
	});
});

$(document).ready(function(){
	$('.next').click(function(){
		if($('.slider-images').css('left') > '-2250px'){
		$('.slider-images').animate({'left':'-=750px'},500);
		}
		else{
			
			$('.slider-images').animate({'left':'+=2250px'},2000);
		}
	});
});
$(document).ready(function(){
	$('.prev').click(function(){
		if($('.slider-images').css('left') > '0'){
			$('.slider-images').animate({'left':'-=2250px'},2000);
		}
		else{
			$('.slider-images').animate({'left':'+=750px'},500);
		}
	});
});
/*
$(document).ready(function(){
	$('#but_menu').click(function(){
		$('#kek').removeClass('fa-5x', 300);

	});
});


/*
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['1Page', '2Page', '3Page'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
*/