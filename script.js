var sketch = {
	sketch: function() {
		var container = document.getElementById('ccc');
		container.innerHTML = '';
		for (var i = 0; i < 625; i++) {
		 	var block = document.createElement('div');
		 	block.style.display = 'inline-block'
		 	block.style.width = '4%';
		 	block.style.height = '4%';
		 	block.style.margin = '0 0 -4px 0';
		 	block.style.backgroundColor = 'white';
		 	container.appendChild(block);
		 	
		 }
	},
	auto: function() {
		var container = document.getElementById('ccc');
		var children = container.childNodes;
		
		children.forEach(function(x) {

			x.addEventListener('mouseover', function(){
	 			x.style.backgroundColor = 'black';
	 		});
		})
	},



}

var Func = function(x){
 		x.style.backgroundColor = 'black';
 	}


sketch.sketch();
sketch.auto();