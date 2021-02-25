//Build Tabulator
var table = new Tabulator("#tabulator-main", {
    height:"311px",
    selectable:true, //make rows selectable
    columns:[
	    {title:"Task ID", field:"name", width:200},
	    {title:"Name", field:"progress", width:100, hozAlign:"right", sorter:"number"},
	    {title:"Description", field:"gender", width:100},
	    {title:"Status", field:"rating", hozAlign:"center", width:80},
	    // {title:"Favourite Color", field:"col"},
	    // {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date"},
	    // {title:"Driver", field:"car", hozAlign:"center", width:100},
    ],
    rowSelectionChanged:function(data, rows){
        //update selected row counter on selection change
    	document.getElementById("select-stats").innerHTML = data.length;
    },
});

//select row on "select" button click
document.getElementById("select-row").addEventListener("click", function(){
    table.selectRow(1);
});

//deselect row on "deselect" button click
document.getElementById("deselect-row").addEventListener("click", function(){
    table.deselectRow(1);
});

//select row on "select all" button click
document.getElementById("select-all").addEventListener("click", function(){
    table.selectRow();
});

//deselect row on "deselect all" button click
document.getElementById("deselect-all").addEventListener("click", function(){
    table.deselectRow();
});