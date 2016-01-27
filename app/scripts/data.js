import converter from 'scripts/converter.js';
import users from 'scripts/controllers/users.js';
import games from 'scripts/controllers/games.js';


Parse.initialize("CQQSRsV2TqaFPvfgN0LJuW49vI7usCNSQpxfNasJ", "kp0Hm8vWotsHZIlFLz20Vaa9nmNdDH0B3N3hF9ha");

var Movie = Parse.Object.extend("Movie");

export default {
  users: users,
  games: games
};
