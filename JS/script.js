function init(){
	function eventFunction(){
    alert('HELLO');
  }
  var a1 = document.getElementById("header");

  a1.addEventListener('click', eventFunction);
  a1.addEventListener('click',function(){