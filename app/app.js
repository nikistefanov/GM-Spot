import 'sammy';
import 'jquery';
import 'bootstrapUI';
import Handlebars from 'handlebars';
import templates from 'scripts/templates.js';
import eventLoader from 'scripts/eventLoader.js';
import notifier from 'scripts/notifier.js';
import data from 'scripts/data.js';
import templatesFunctionality from 'scripts/templatesFunctionality.js';

var containerId = '#main',
  $container = $(containerId),
  $footer = $('#footer');


var sammyApp = Sammy(containerId, function() {
  this.get('#/', function() {
    this.redirect('#/home');
  });

  this.get('#/home', function() {
    templatesFunctionality.homeTemplateFunctions.loadHomeTemplate();
    Promise.all([data.games.all(), templates.load('home')])
      .then(function(results) {
        $('.loader-top').hide();
        var template = Handlebars.compile(results[1]),
          html = template(results[0]);

        $container.html(html);
      });
    templates.load('footer-home')
      .then(function(templateHtml) {
        $footer.html(templateHtml);
      });
  });

  this.get('#/games', function() {
    templatesFunctionality.gamesTemplateFunctions.loadGameTemplate();
    Promise.all([data.games.all(), templates.load('games')])
      .then(function(results) {
        //console.log(results[0].games.length);
        $('.loader-top').hide();
        var template = Handlebars.compile(results[1]),
          html = template(results[0]);

        $container.html(html);
      });
    templates.load('footer')
      .then(function(templateHtml) {
        $footer.html(templateHtml);
      });


  });

  this.get('#/games/game-info/:id', function(context) {
    templatesFunctionality.gamesInfoTemplateFunctions.loadGameInfoTemplate();
    var id = context.params.id;

    Promise.all([data.games.get(id), templates.load('game-info')])
      .then(function(results) {
        $('.loader-top').hide();
        var template = Handlebars.compile(results[1]),
          html = template(results[0]);

        $container.html(html);
      });

  });

  this.get('#/movies', function() {
    templatesFunctionality.moviesTemplateFunctions.loadMovieTemplate();
    Promise.all([data.movies.all(), templates.load('movies')])
      .then(function(results) {
        $('.loader-top').hide();
        var template = Handlebars.compile(results[1]),
          html = template(results[0]);

        $container.html(html);
      });
    templates.load('footer')
      .then(function(templateHtml) {
        $footer.html(templateHtml);
      });

  });

  this.get('#/movies/movie-info/:id', function(context) {
    templatesFunctionality.moviesInfoTemplateFunctions.loadMovieInfoTemplate();
    var id = context.params.id;

    Promise.all([data.movies.get(id), templates.load('movie-info')])
      .then(function(results) {
        $('.loader-top').hide();
        var template = Handlebars.compile(results[1]),
          html = template(results[0]);

        $container.html(html);
      });


  });

  this.get('#/location', function() {
    templatesFunctionality.locationTemplateFunctions.loadLocationTemplate();
    templates.load('location')
      .then(function(templateHtml) {
        $('.loader-top').hide();
        $container.html(templateHtml);
      });
    templates.load('footer')
      .then(function(templateHtml) {
        $footer.html(templateHtml);
      });
  });

  this.get('#/login', function() {
    templates.load('login')
      .then(function(templateHtml) {
        $container.html(templateHtml);
      });

  });

  this.get('#/register', function() {
    templates.load('register')
      .then(function(templateHtml) {
        $container.html(templateHtml);
      });


  });

  Promise.all([data.users.current(), templates.load('login-logout')])
    .then(function(results) {
      var template = Handlebars.compile(results[1]),
        html = template(results[0]);

      $('.user-nav').append(html);
    });

});

eventLoader.loginPageEvents.loginPageEvents($container);
eventLoader.gameEvents.gameEvents($container);
eventLoader.movieEvents.movieEvents($container);
eventLoader.collapseEventes.collapseEventes($container);
eventLoader.navigationEvents.navigationEvents($('.user-nav'));
sammyApp.run('#/');
