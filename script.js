var sketch = {
	sketch: function(size) {
		var container = document.getElementById('ccc');
		container.innerHTML = '';
		container.style.gridTemplateColumns = 'repeat(' + size.toString() + ', 1fr)';
		for (var i = 0; i < size*size; i++) {
		 	var block = document.createElement('div');
		 	block.style.backgroundColor = 'white';
		 	container.appendChild(block);
		 }
	},
	clear: function() {
		var container = document.getElementById('ccc');
		var children = container.childNodes;
		
		children.forEach(function(x) {

			x.addEventListener('mouseover', function(){
	 			x.style.backgroundColor = 'black';
	 		});
		})
	},
	init: function() {
		var size = 16;
		this.sketch(size);
		this.clear();
	},
	reset: function() {
		var size = document.getElementById('gridId');
		this.sketch(size.value);
		this.clear();
		size.value = null;
	}


}

function search(e) {
    if(event.key === 'Enter') {
        sketch.reset();        
    }
}

sketch.init();

