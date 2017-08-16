document.addEventListener('DOMContentLoaded', function() {
   disp();
}, false);

var colorList = ['blue', 'red', 'green', 'purple', 'black' , 'orange', 'yellow', 'gold', 'white', 'pink'];

function disp() {
	var li;	 
		for (var i = 0; i < colorList.length; i++) {
			li = document.createElement('li');
			li.innerHTML = colorList[i];		
			document.getElementById('list').appendChild(li);
		}					 
}

function searchCol(letter) {
	var liTemp = document.getElementsByTagName("li"),filter;
	for (var i = 0; i < colorList.length; i++) {			
			filter = letter.toUpperCase();
			 if (liTemp[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
	            liTemp[i].style.display = "";
	        } else {
	            liTemp[i].style.display = "none";
	        }       
		}
}
