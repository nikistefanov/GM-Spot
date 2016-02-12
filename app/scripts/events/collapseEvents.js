import notifier from 'scripts/notifier.js';
import data from 'scripts/data.js';
import validate from 'scripts/validate.js';

export default {
  collapseEvents: function($container) {
    $(document).on('click', '#burger', function(ev) {
      var $this = $(this);

      if (!($this.hasClass("add-product-platform"))) {
        $("#site-slogan").toggle();
      }
    });
  }
};
