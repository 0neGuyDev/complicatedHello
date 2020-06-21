/* Copyrighted by 0neGuyDev */

// Congrats, you're wasting time
// There's abosolutely no fucking reason you're here.
// You won't get anything out of it
// Yet you're still here
// Whatever, do as you please

var result = "010010000110010101101100011011000110111100100000010101110110111101110010011011000110010000100001"; // This will be the variable we'll be experimenting with throughout this whole waste of time, in the end it'll become "Hello World!" I know craaazy!

function binaryAndStuff(string) {
	string = string.match(/.{1,8}/g).join(" ") // If I remember regEx correctly this will add a space every eight characters.
	
	let bits = string.split(" ") // turn the shit into an array of BITS, vevy cooul
	let endResult = [];
	
	for (let i = 0; i < bits.length; i++) {
		endResult.push(String.fromCharCode(parseInt(bits[i], 2)))
	}; return endResult.join(""); 
}

result = binaryAndStuff(result)

console.log(result) // This is the fucking result now fuck off.