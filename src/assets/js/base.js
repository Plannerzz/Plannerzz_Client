
$(document).ready(function(){
  //탭 클릭시 내용 변경
    $('ul.tab li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tab li').removeClass('on');
      $('.tab-content').removeClass('on');
  
      $(this).addClass('on');
      $("#"+tab_id).addClass('on');
    });
  
    //필터탭 클릭시 addClass
    $('.filtab li').click(function(){
        $('.filtab li').removeClass('on');
        $(this).addClass('on');
    })
  })