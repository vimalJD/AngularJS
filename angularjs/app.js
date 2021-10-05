function addRow(){
	var pname=document.getElementById("name");
	var desc=document.getElementById("description");
	var cat=document.getElementById("category");
	var prize=document.getElementById("price");
	var table=document.getElementById("myTableData");
	
	var rowCount=table.rows.length;
	var row=table.insertRow(rowCount);
	
	
	row.insertCell(0).innerHTML=pname.value;
	row.insertCell(1).innerHTML=desc.value;
	row.insertCell(2).innerHTML=cat.value;
	row.insertCell(3).innerHTML=prize.value;
	row.insertCell(4).innerHTML='<input type="button" value="Delete" onclick="deleteRow(this)">';
	
}
function deleteRow(obj){
	var index=obj.parentNode.parentNode.rowIndex;
	var table=document.getElementById("myTableData");
	table.deleteRow(index);
	
}
function reset(){
	document.getElementById("myform1").reset();
}
 /*function addTable(){
	 *var myTableDiv=document.getElementById("myDynamicTable");
	 *var table=document.createElement('TABLE');
	 *table.border='1';
	 
	 *var tableBody=document.createElement('TBODY');
	 *table.appendChild(tableBody);
	 
	 *var tr=document.createElement('TR');
		 *tableBody.appendChild(tr);
	 
	* for(var j=0;j<6;j++){
		 *var td=document.createElement('TD');
		 *td.width='75';
		 *td.appendChild(document.createTextNode("cell"+i+","+j));
		 *tr.appendChild(td);
	 *}
		  
	 *}
	* myTableDiv.appendChild(table);
 }*/
 
 