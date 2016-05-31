/**
 * Toolkit JavaScript
 */
// jshint unused:false
// jshint esnext: true

'use strict';


const $ = require('jquery');

let config = {
	debug: true,
	istouch:false,
	touchOrClick: '',
	init: function(){
		let $htmlElem=$('html');
		this.istouch = $htmlElem.hasClass('touch')? true : false;
		this.touchOrClick = this.istouch? 'touchend' :'click' ;
	}

};
config.init();
let  log = {
	InstagramImage: '',
	debug: function(content){
		if ((window.console && window.console.log) && config.debug){
			console.log(content);
		}
	}
};

let app = {
	init: function() {
		let that = this;
		
		that.eventListener();
		that.mobileMenu();
		
	},
	eventListener: function(){
		let that = this;
		that.InstagramImage = $('.instagram-image');
		$('.instagram-image').on(config.touchOrClick,that.flipCard);
		
	},
	add: function(){
		let that = this;
	},
	remove: function(){
		let that = this;
	},
	mobileMenu: function() {
		let that = this;

		$('.hamburger-link').on(config.touchOrClick, function(e) {
			e.preventDefault();
			$('.hamburger').toggleClass('menu-open');
			$('.side-menu').toggleClass('side-menu-open');
		});
	},
	flipCard: function(e) {	
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			app.InstagramImage.removeClass('active');
			$(this).addClass('active');
		};
	};
};

app.init();