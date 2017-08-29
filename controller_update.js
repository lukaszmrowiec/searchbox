document.addEventListener('DOMContentLoaded', function() {
   displayColors();
}, false);

var colorList = ['blue', 'red', 'green', 'purple', 'black' , 'orange', 'yellow', 'gold', 'white', 'pink'];

function displayColors() {
	var li;	 
		for (var i = 0; i < colorList.length; i++) {
			li = document.createElement('li');
			li.setAttribute('id', i);
			li.innerHTML = colorList[i];		
			document.getElementById('list').appendChild(li);
		}					 
}

function searchCol(letter) {
	var liTemp = document.getElementsByTagName("li"),filter, activeEl;
	for (var i = 0; i < colorList.length; i++) {			
			filter = letter.toLowerCase();
			 if (liTemp[i].innerHTML.toLowerCase().indexOf(filter) > -1) {
	            liTemp[i].style.display = "";           
	           if (filter == colorList[i] ) {
	           		document.title = colorList[i];
 		 				activeEl = colorList.indexOf(colorList[i]);
 		 				document.getElementById(activeEl).addEventListener("click", function() {setGreen(activeEl)});	 				
	           }          
	        } else {
	            liTemp[i].style.display = "none";
	        }       
		}
}

function deleteValue(el) {
	var searchBox = document.getElementById("pickColor");
	    document.title = '';
		 searchBox.value = null;
	    searchCol(''); 	
}
function setGreen(el) {
     document.getElementById(el).style.color = 'green';
     setTimeout(function() {document.getElementById(el).style.color = 'black';},5000);	
}