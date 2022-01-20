var Animation = function () {
  var items, winH;
 
  var initModule = function () {
    items = document.querySelectorAll(".text");
    winH = window.innerHeight;
    _addEventHandlers();
  }
 
  var _addEventHandlers = function () {
    window.addEventListener("scroll", _checkPosition);
    window.addEventListener("load", _checkPosition);
    window.addEventListener("resize", initModule);
  };
 
  var _checkPosition = function () {
    for (var i = 0; i < items.length; i++) {
      var posFromTop = items[i].getBoundingClientRect().top;
      if (winH > posFromTop) {
        items[i].classList.add("active");
      }
    }
  }
 
  return {
    init: initModule
  }
}
 
animation().init();

export default Animation;