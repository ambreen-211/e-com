$(document).ready(function () {
  $("input").change(function () {
    let inp = $(this).val();
    $("ol").append(
      "<li>" +
        inp +
        "&nbsp; <i class='fa fa-window-close' aria-hidden='true'></i> <input type='checkbox' class='chkbox'/>"
    );
    $(this).val("");
    $("i").click(function () {
      $("li").fadeOut(1000);
    });
    $(".chkbox").click(function () {
      $(".fa , .chkbox").fadeOut(1000);
    });
  });
});
