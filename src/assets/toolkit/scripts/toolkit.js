/**
 * Toolkit JavaScript
 */
// jshint unused:false
// jshint esnext: true

'use strict';


const $ = require('jquery');
const Instafeed = require("instafeed.js");


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
		that.getInstagram();
		
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
	},
	imageTemplate: function(obj){
		// console.log('hello')
		// console.log(obj);
		return `<div class="instagram-image"><img src="${obj.images.standard_resolution.url}" alt="">
		<div class="info">
		<ul>
			<li><a href="${obj.link}" target="_blank">${obj.user.username}</a></li>
			<li><a href="${obj.link}" target="_blank">${obj.location}</a> </li>
			<li><a href="${obj.link}" target="_blank">00 Comments</a></li>
			<li><a href="${obj.link}" target="_blank"><time datetime="2016-05-27T01:36:43.000Z" title="May 26, 2016">6d</time></a></li>
		</ul>	
		</div></div>`
	},
	getInstagram: function(e) {
		

	let clientid = '0489ac88d706411d880e48afe605fb3b';
	let that= this;
	const accessToken = '25914720.0489ac8.9c83687254e842d4a1cfeb3f74723da4';
	let num_photos = 30;
    	let imageTemplate = '';
		 let $test = $.getJSON('https://api.instagram.com/v1/users/25914720/media/recent?access_token='+accessToken+'&callback=?',function (insta) {
		// 	log.debug(insta.data);
		// 	$.each(insta.data,function (key, obj) {
		// 		log.debug(that.imageTemplate(obj))
		// 	});
			
		}) .done(function(json) {
			console.log(json)
			$.each(json.data, function(key, value) {
				log.debug(that.imageTemplate(value))
			});
		  })
		  .fail(function() {
		    console.log( "error" );
		  });

		
	}
};


app.init();