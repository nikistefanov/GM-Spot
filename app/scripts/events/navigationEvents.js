// import notifier from 'scripts/notifier.js';
//
// export default {
//   navigationEvents: function($container) {
//     $container.on('click', '#btn-logout', function(ev) {
//       data.users.logout()
//         .then(function() {
//           notifier.success('Logged out!');
//           location.reload();
//         });
//     });
//     $container.on('click', '#btn-search', function(ev) {
//       ev.stopPropagation();
//       ev.preventDefault();
//
//       var value = $('#search').val();
//       //document.location = document.location.origin + '#/search/' + value;
//       document.location = document.location.origin;
//     });
//     $(document).on('click', '#burger', function(ev) {
//       var $this = $(this);
//
//       if (!($this.hasClass("add-product-platform"))) {
//         $("#site-slogan").toggle();
//       }
//     });
//     $container.on('click', '#btn-txtarea', function(ev) {
//       ev.stopPropagation();
//       ev.preventDefault();
//
//       var value = $('#txtarea').val();
//       $('#user-comment p').text(value);
//       $('#txtarea').val("");
//     });
//   }
// };
