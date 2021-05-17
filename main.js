function calculateImpulse(f, t)
{
	return f * t;
}
function calculateForce(m, a)
{
	return m * a;
}
function calculateEnergy(m, c)
{
	return m * (c*c);
}
function calculateDensity(m, V)
{
	return m / V;
}
function calculateGravity(m, g, h)
{
	return m * g *h;
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

function updateForce()
{
	let input_m = document.getElementById("force-mass")
	let input_a = document.getElementById("force-acceleration")
	let output = document.getElementById("force-output")

	let m = parseFloat(input_m.value);
	let a = parseFloat(input_a.value);

	output.innerHTML = calculateForce(m, a);
}

let buttonForce = document.getElementById("force-button");
buttonForce.onclick = updateForce;

function updateEnergy()
{
	let input_m = document.getElementById("energy-mass")
	let input_c = document.getElementById("energy-light")
	let output = document.getElementById("energy-output")

	let m = parseFloat(input_m.value);
	let c = parseFloat(input_c.value);

	output.innerHTML = calculateEnergy(m, c);
}

let buttonEnergy = document.getElementById("energy-button");
buttonEnergy.onclick = updateEnergy;

function updateDensity()
{
	let input_m = document.getElementById("density-mass")
	let input_V = document.getElementById("density-volume")
	let output = document.getElementById("density-output")

	let m = parseFloat(input_m.value);
	let V = parseFloat(input_V.value);

	output.innerHTML = calculateDensity(m, V);
}

let buttonDensity = document.getElementById("density-button");
buttonDensity.onclick = updateDensity;

function updateGravity()
{
	let input_m = document.getElementById("gravity-mass")
	let input_g = document.getElementById("gravity-pull")
	let input_h = document.getElementById("gravity-height")
	let output = document.getElementById("force-output")

	let m = parseFloat(input_m.value);
	let g = parseFloat(input_g.value);
	let h = parseFloat(input_h.value);

	output.innerHTML = calculateGravity(m, g, h);
}

let buttonGravity = document.getElementById("gravity-button");
buttonGravity.onclick = updateGravity;