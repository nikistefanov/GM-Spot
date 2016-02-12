import data from 'scripts/data.js';
import notifier from 'scripts/notifier.js';
import validate from 'scripts/validate.js';
import gameEvents from 'scripts/events/gameEvents.js';
import loginPageEvents from 'scripts/events/loginPageEvents.js';
import movieEvents from 'scripts/events/movieEvents.js';
import navigationEvents from 'scripts/events/navigationEvents.js';
import collapseEvents from 'scripts/events/collapseEvents.js';
import commentsEvents from 'scripts/events/commentsEvents.js';

export default {
  gameEvents: gameEvents,
  loginPageEvents: loginPageEvents,
  movieEvents: movieEvents,
  navigationEvents: navigationEvents,
  collapseEvents: collapseEvents,
  commentsEvents: commentsEvents
};
