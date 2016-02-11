import notifier from 'scripts/notifier.js';
import data from 'scripts/data.js';
import validate from 'scripts/validate.js';

export default {
  collapseEventes: function($container) {
    $(document).on('click', '#burger', function(ev) {
      var $this = $(this);

      if (!($this.hasClass("add-product-platform"))) {
        $("#site-slogan").toggle();
      }
    });
    $container.on('click', '#btn-txtarea', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var value = $('#txtarea').val();
      $('#user-comment p').text(value);
      $('#txtarea').val("");
    });
  }
};
