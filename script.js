var form = document.getElementById("form_colour"), 
	bg = document.body,
	cores = [],
	i;

form.addEventListener('submit', function(e){
	
	e.preventDefault();
	
	var color = this.colour.value;
	i = cores.length;
	
	if (color == "") {
		
		alert('Digite algum valor');
		return false;
		}
	
	this.style.borderColor = color;
	bg.style.backgroundColor = cores[i-1];

	cores.push(color);
	
	console.log(cores);
	
	return true;
	
	});