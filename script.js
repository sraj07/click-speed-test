//Le JS

var clicks = 0;
var timer = 5;
    
$("#result").hide();
    
function start(){
  setTimeout(tup, 5000);
  t = setInterval(detim, 1000);
  $("#btn").attr("onclick", "scadd()");
  $("#btn").html("Click");
  $("#time").html("Time left: 5")
}
    
function scadd(){ // Score Add
  clicks++;
  $("#score").text("Clicks: " + clicks);
}
    
function tup(){ // Time Up
  var cps = clicks / 5;
  $("#time").html("Your CPS was: " + cps);
  $("#btn").attr("onclick", "donth()");
  $("#btn").html("Finished");
  clearInterval(t);
}
    
function detim(){ // Decrease Time
  timer -= 1;
  $("#time").html("Time left: " + timer);
}
    
function donth(){ // Do Nothing
      
}
