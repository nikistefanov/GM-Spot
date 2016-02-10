// import notifier from 'scripts/notifier.js';
//
// export default {
//   movieEvents: function($container) {
//     $container.on('click', '#btn-add-movie', function(ev) {
//       var genres = [];
//
//       $(".genres-checkbox:checked").each(function() {
//         genres.push($(this).val());
//       });
//
//       var movieData = {
//         title: $('#tb-movie-title').val(),
//         year: $('#tb-movie-year').val(),
//         price: $('#tb-movie-price').val(),
//         img: $('#basic-url').val(),
//         description: $('#tb-movie-description').val(),
//         genres: genres,
//         owner: Parse.User.current()
//       };
//
//       movieData.forEach((key) => {
//         validate.ifUndefined(movieData[key]);
//       });
//
//       data.movies.add(movieData)
//         .then(function(data) {
//           notifier.success('Movie added.');
//           location.reload();
//         });
//     });
//
//     $container.on('click', '#btn-delete-movie', function(ev) {
//       ev.stopPropagation();
//       ev.preventDefault();
//
//       var movieId = $(ev.target).closest('div').attr('data-movie-id');
//       data.movies.remove(movieId)
//         .then(function(data) {
//           notifier.success('Movie removed.');
//           document.location = document.location.href = '#/movies';
//         })
//         .catch(function(err) {
//           notifier.error(err);
//         });
//     });
//   }
// };
