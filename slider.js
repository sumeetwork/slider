$(function(){
    var i= 0;

    var sliurl = [
            "1.png",
            "2.png",
            "3.png",
            "4.png"
         ];
    
         var container = document.getElementById('sliderContainer');

         for (var z = 0, j = sliurl.length; z < j; z++) {
            $( "<img src='images/"+sliurl[z]+"' />" ).prependTo( ".sliderContainer" );
         }

         



	//when the next button is clicked on
	$('.next').on("click", function(){
		//increase the display picture index by 1
		i = i + 1;
		//if we are at the end of the image queue, set the index back to 0
		if (i == $('img').length) {
			i=0;
		}
		//set current image and previous image
		var currentImg = $('img').eq(i);
		var prevImg = $('img').eq(i-1);
		//call function to animate the rotation of the images to the right
		animateImage(prevImg, currentImg);	
	});
	//when the previous button is clicked on
	$('.previous').on("click", function(){
		//if we are at the beginning of the image queue, set the previous image to the first image and the current image to the last image of the queue
		if (i==0) {	
			prevImg = $('img').eq(0);
			i=$('img').length-1;
			currentImg = $('img').eq(i);
		}
		//decrease the display picture index by 1
		else {
			i=i-1;
			//set current and previous images
			currentImg = $('img').eq(i);
			prevImg = $('img').eq(i+1);
		}
		//call function to animate the rotation of the images to the left
		animateImageLeft(prevImg, currentImg);	
	});
	//function to animate the rotation of the images to the left
	function animateImageLeft(prevImg, currentImg) {
		//move the image to be displayed off the visible container to the right
		currentImg.css({"left":"100%"});
		//slide the image to be displayed from off the container onto the visible container to make it slide from the right to left
		currentImg.animate({"left":"0%"}, 1000);
		//slide the previous image off the container from right to left
		prevImg.animate({"left":"-100%"}, 1000);
	}
	//function to animate the rotation of the images to the right
	function animateImage(prevImg, currentImg) {
		//move the image to be displayed off the container to the left
		currentImg.css({"left":"-100%"});
		//slide the image to be displayed from off the container onto the container to make it slide from left to right
		currentImg.animate({"left":"0%"}, 1000);
		//slide the image from on the container to off the container to make it slide from left to right
		prevImg.animate({"left":"100%"}, 1000);	
	}
});