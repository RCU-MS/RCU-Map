//Global used to represent the current selection being chosen
var current;

//Highlight selection for the first selection options
 function go(){
        //Sets the previous selection to false (clearing the map from previous)
        $('#Image-Maps-Com-image-maps-2015-08-13-174118').mapster('set',false, ''+current);

       
        var key = document.getElementById("mySelect").value;

        $('#Image-Maps-Com-image-maps-2015-08-13-174118').mapster('set',true, ''+key);
        current = key;
     };

//Highlight the selection for the second selection options
function go2(){

        $('#Image-Maps-Com-image-maps-2015-08-13-174118').mapster('set',false, ''+key);

        var key = document.getElementById("mySelect").value;
        $('#Image-Maps-Com-image-maps-2015-08-13-174118').mapster('set',false, ''+current);

         key = document.getElementById("mySelect2").value;
        $('#Image-Maps-Com-image-maps-2015-08-13-174118').mapster('set',true, ''+key);  
        current = key;   
        
     }
