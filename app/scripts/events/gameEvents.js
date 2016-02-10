// import notifier from 'scripts/notifier.js';
//
// export default {
//   gameEvents: function($container) {
//     $container.on('click', '#btn-add-game', function(ev) {
//       var genres = [];
//
//       $(".genres-checkbox:checked").each(function() {
//         genres.push($(this).val());
//       });
//
//       var gameData = {
//         title: $('#tb-game-title').val(),
//         platform: $("#tb-game-platform option:selected").text(),
//         price: $('#tb-game-price').val(),
//         img: $('#basic-url').val(),
//         description: $('#tb-game-description').val(),
//         genres: genres,
//         owner: Parse.User.current()
//       };
//
//       gameData.forEach((key) => {
//         validate.ifUndefined(gameData[key]);
//       });
//
//       data.games.add(gameData)
//         .then(function(data) {
//           notifier.success('Game added.');
//           location.reload();
//         });
//     });
//
//     $container.on('click', '#btn-delete-game', function(ev) {
//       ev.stopPropagation();
//       ev.preventDefault();
//
//       var gameId = $(ev.target).closest('div').attr('data-game-id');
//       data.games.remove(gameId)
//         .then(function(data) {
//           notifier.success('Game removed.');
//           document.location = document.location.href = '#/games';
//         })
//         .catch(function(err) {
//           notifier.error(err);
//         });
//     });
//   }
// };
