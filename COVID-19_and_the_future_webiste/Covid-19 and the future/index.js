function showcomparison(){
    $("#comparison_container").css("display","inherit");
    $("#comparison_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#comparison_container").removeClass("animated slideInRight");
    },800);
}
function closecomparison(){
    $("#comparison_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#comparison_container").removeClass("animated slideOutRight");
        $("#comparison_container").css("display","none");
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#timeline").removeClass("animated fadeIn");
      $("#Interestingfacts").removeClass("animated fadeIn");
      $("#comparison").removeClass("animated fadeIn");
    },500);
},500);
