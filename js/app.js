
//Global used to represent the current selection being chosen
var current;

 //Highlights the first selection
 function go(){
        $('area.'+current).mapster('set',false);
        var key = document.getElementById("mySelect").value;
        $('area.'+key).mapster('set',true);
        current = key;
        
     };


//Highlight the selection for the second selection options
function go2(){
        $('area.'+current).mapster('set',false);
        var key = document.getElementById("mySelect2").value;
        $('area.'+key).mapster('set',true);  
        current = key;       
     };
