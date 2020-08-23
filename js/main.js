$('.slider').slick({
	infinite : true,
	slideToShow: 1,
	slideToScroll: 1
});
// $('.form').submit(function(){
// 	var first=$('.fname').val();
// 	if (first="") {
// 		alert("Plest Enter The Name......");
// 		return false;
// 	}
// });

function work(){
	var fname=document.getElementById('#fname').value;

	if(fname=""){
		alert("Plese Enter The Name ");
		return false;
	}
}