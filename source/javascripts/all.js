document.onkeydown = function(e) {
  var dots = document.getElementById('dots'),
      name = dots.className,
      new_name = name == "start" ? "" : "start";

  // dots.className = new_name;
};
