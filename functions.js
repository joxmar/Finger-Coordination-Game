// game starts automatically
// run a function to randomly chosse from 0-3 (it's an array so it starts from 0)
// once choosen select the button from the array
// when the button is pressed: 
//   make the current button disabled
// run the game on function again

var fingers = $('.finger');

var pickFinger, lastFinger
function gameOn() {
	// Randomly pick a number 
	pickFinger = Math.floor(Math.random() * 4);
	if (pickFinger != lastFinger) {
		// Remove 'disabled' from the button selected
		fingers[pickFinger].removeAttribute('disabled');	
	} else {
		gameOn();
	}
}

// attach event to buttons
fingers.each(function(){
	$(this).on('click', function(){	
		$(this).attr('disabled', 'disabled');
		lastFinger = pickFinger
		console.log(lastFinger);
		gameOn();
	})
})

gameOn();