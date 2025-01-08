
$(document).ready(function(){
    $("nav").hover(
        function() {
            $("#header,.sub").addClass("on");
        },
        function() {
            $("#header,.sub").removeClass("on");
        }
    );
    $(".earth").hover(
        function(){
            $(".language").addClass("on2");
        },
        function(){
            $(".language").removeClass("on2");
        });
        $(".earth").click(function(){
            $(".language").toggle();
            return false;
        });
    

    $(".s_t").show(function(){
        $("this").animate({top:'250px'});
      });
});
