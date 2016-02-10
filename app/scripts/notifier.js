export default {
  success: function(msg) {
    //alert(msg);
    toastr.success(msg);
  },
  error: function(msg) {
    //alert(msg);
    toastr.error(msg);
  }
};
