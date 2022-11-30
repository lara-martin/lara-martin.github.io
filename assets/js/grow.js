

$(".collapsible").on('click', function(e){
    var target = $(this).next("div");
    if ($(target).hasClass("highlight")){
      if ($(target).height() > 0) {
        $(target).css({"height":"0"});        
        setTimeout(() => { $(target).css({"visibility":"hidden"}); }, 400);
        
      } else {
      	var wrapper = $(target).children()
        //var wrapper = document.querySelector('.measuringWrapper');
        $(target).css({"visibility":"visible"});
        $(target).css({"height":$(wrapper).height()+15});
      }
    }
});
