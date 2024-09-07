$("h1").addClass("big-title margin-50");
$("button").html("<em>click me</em>");

$("a").attr("href", "https://www.youtube.com");

$("h1").click(function(){$("h1").css("color", "purple")});
$("button").click(function(){$("h1").css("color", "green")});
$("input").keypress(function(event){$("h1").text(event.key)});

$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
});

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
