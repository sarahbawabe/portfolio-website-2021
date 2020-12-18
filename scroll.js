document.addEventListener('scroll', function(e) {
    var nav = document.getElementsByTagName("NAV")[0];
    if (window.scrollY > nav.style.height) {
      var header = document.getElementById("header-box");
      header.style.backgroundColor = "rgb(25,105,164,0.8)";
    } else {
      var header = document.getElementById("header-box");
      header.style.backgroundColor = "rgb(0,0,0,0)";
    }
});
