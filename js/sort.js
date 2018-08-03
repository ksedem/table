$(document).ready(function() {

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

});