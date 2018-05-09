$(function () {

  $('input').keyup(function () {
    if ($(this).val().length === 0) {
      $('.btn').attr('disabled', true)
    } else {
      $('.btn').attr('disabled', false)
    }
  });

  $('.btn').click(function () {
    var inputValue = $('input').val();
    var item = "<li>" + inputValue + "<span class='delete'>x</span>" + "</li>";
    $(".list").append(item);
    $('input').val("");
  });

  $('.list').on('click', '.delete', function () {
    $(this).parent().remove();
  });



});