function myFunction() {
  var x = document.getElementById("mobile-links");
  var y = document.getElementById("mobile-nav-info");
  if (x.style.display === "block" && y.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "block";
  }
}

function myFunction1() {
  var a = document.getElementById("sub");
  var b = document.getElementById("ma");
  var c = document.getElementById("welc");
  if (a.style.display === "block" && b.style.display === "block") {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
  } else {
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "none";
  }
}
function myFunction2() {
  var h = document.getElementById("cont-title");
  var s = document.getElementById("cont-title1");
  if (h.style.display === "block") {
    h.style.display = "none";
    s.style.display = "block";
  } else {
    h.style.display = "block";
    s.style.display = "none";
  }
}
