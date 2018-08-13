$(document).ready(function() {
	var arr_f=[];
	function getArrFromTab() {
		var tab=document.getElementById('tab1');
		var arr=[];
		var arr_tr=[];
		for (var i=1; i<tab.rows.length; i++) {
			for (var j=0; j<tab.rows[i].cells.length; j++) {
				arr_tr.push(tab.rows[i].cells[j].innerHTML);
				
			}
			arr.push(arr_tr);
			arr_tr=[];
		}
	}
	setInterval(function(){
		if(document.location.href=='http://table/') {

		//function getArrFromTab() {
		var tab=document.getElementById('tab1');
		var arr=[];
		var arr_tr=[];
		for (var i=1; i<tab.rows.length; i++) {
			for (var j=0; j<tab.rows[i].cells.length; j++) {
				arr_tr.push(tab.rows[i].cells[j].innerHTML);
				
			}
			arr.push(arr_tr);
			arr_tr=[];
		}
	//}	

	function sortYear() {
		arr.sort(function(a,b){
			return a[1]-b[1];
		});
		
	}

	function sortRate() {
		arr.sort(function(a,b){
			return a[2]-b[2];
		});
		
	}

	function sortMin() {
		for (i=0; i<arr.length; i++) {
			var pos=arr[i][3].indexOf(' ');
			var min_new=arr[i][3].slice(0,pos);
			arr[i][3]=min_new;
		}
		arr.sort(function(a,b){
			return a[3]-b[3];
		});
		for (i=0; i<arr.length; i++) {
			arr[i][3]+=' мин';
		}
		
	}

	function sortCountry() {
		arr.sort(function(a,b){
			return a[4]>b[4];
		});
		
	}

	function sortName() {
		arr.sort(function(a,b){
			return a[0]>b[0];
		});
		
	}

	function changeTab() {
		for (var i=0; i<arr.length; i++) {
			for (var j=0; j<arr[i].length; j++) {
				tab.rows[i+1].cells[j].innerHTML=arr[i][j];
				
			}
		}
	}

	$('#name').click(function(){sortName(); changeTab()});	
	$('#year').click(function(){sortYear(); changeTab()});	
	$('#rating').click(function(){sortRate(); changeTab()});	
	$('#min').click(function(){sortMin(); changeTab()});
	$('#country').click(function(){sortCountry(); changeTab()});


	}
	
	}, 2000)	
	

	$('#add_film').click(function(){
		
			function addElementsFromForm(a){
				arr_f.push(document.getElementById(a).value);
				return arr_f;
			}

			addElementsFromForm('name_f');
			addElementsFromForm('year_f');
			addElementsFromForm('rate_f');
			addElementsFromForm('length_f');
			addElementsFromForm('country_f');

			var new_html=window.opener.document.createElement('tr');
			new_html.innerHTML = "<td>"+arr_f[0]+"</td><td>"+arr_f[1]+"</td><td>"+arr_f[2]+"</td><td>"+arr_f[3]+"</td><td>"+arr_f[4]+"</td>";
		
			window.opener.document.getElementById('tb').appendChild(new_html);
			window.close();		
	});	

	
	

	
});