import 'sammy'
import 'jquery'
import 'bootstrapUI'
import Handlebars from 'handlebars'
import templates from 'scripts/templates.js'
import eventLoader from 'scripts/eventLoader.js'
import notifier from 'scripts/notifier.js'
import data from 'scripts/data.js'


var containerId = '#main',
	$container = $(containerId);

var sammyApp = Sammy(containerId, function() {
  this.get('#/', function () {
    this.redirect('#/home')
  });

  this.get('#/home', function () {
  	templates.load('home')
  		.then(function(templateHtml) {
  			$container.html(templateHtml);
  		})
  });

  this.get('#/games', function () {
    // watch the video from 1:28 till 2:22

  	templates.load('games')
  		.then(function(templateHtml) {
  			$container.html(templateHtml);
  		})
  });

  this.get('#/login', function(){
        templates.load('login')
            .then(function(templateHtml) {
                $container.html(templateHtml);
            })

        eventLoader.loginPageEvents($container);
    });

  this.get('#/register', function(){
        templates.load('register')
            .then(function(templateHtml) {
                $container.html(templateHtml);
            })

        eventLoader.loginPageEvents($container);
    });


  Promise.all([data.users.current(), templates.load('login-logout')])
        .then(function(results){
            var template = Handlebars.compile(results[1]),
                html = template(results[0]);

            $('.user-nav').append(html);
        })
  eventLoader.navigationEvents($('.user-nav'));
});

sammyApp.run('#/');
