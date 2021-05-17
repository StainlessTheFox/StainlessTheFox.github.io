function calculateImpulse(f, t)
{
	return f * t;
}
function calculateForce(m, a)
{
	return m * a;
}
function updateImpulse() 
{
	let input_f = document.getElementById("impulse-force")
	let input_t = document.getElementById("impulse-time")
	let output = document.getElementById("impulse-output");

 	let force = parseFloat(input_f.value);
  	let time = parseFloat(input_t.value);
  
  	output.innerHTML = calculateImpulse(force, time);
}

let buttonImpulse = document.getElementById("impulse-button");
buttonImpulse.onclick = updateImpulse;
