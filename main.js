var liElement = document.querySelector('.sidenav');
console.log(liElement.innerText);
liElement.innerHTML = 
  '<button onclick="darkMode()" class="dark-btn"><img class="icon filter-white" src="./moon-line.svg">Dark Mode</button>'
+ '<a href="./index.html"><img class="icon filter-white" src="./home-2-line.svg">Home</a>'
+ '<a href="./bookmark1.html">Bookmark 1</a>'
+ '<a href="./table-test.html">Table Test</a>'
+ '<a href="./huongdantpos01.html">TPos Notes 1</a>'


// Dark Mode
function darkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
 }

// Search and Filter Table
(function() {
	'use strict';

var TableFilter = (function() {
 var Arr = Array.prototype;
		var input;
  
		function onInputEvent(e) {
			input = e.target;
			var table1 = document.getElementsByClassName(input.getAttribute('data-table'));
			Arr.forEach.call(table1, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, filter);
				});
			});
		}

		function filter(row) {
			var text = row.textContent.toLowerCase();
      var val = input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = onInputEvent;
				});
			}
		};
 
	})();

 TableFilter.init(); 
})();

// Muti-tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();