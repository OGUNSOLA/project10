$(document).ready(function() {
  
 


 $('form').submit(function (evt) {
    var $submitButton = $('#submit');
    var $searchField = $('#search');
    evt.preventDefault();
   
    var gifSearch = $searchField.val();
    var link1= "http://api.giphy.com/v1/gifs/search?q=";
    var link2 = link1 + gifSearch;
    var GifAPI = link2 +"&limit=12&rating=pg&api_key=dc6zaTOxFJmzC";



    
    var gifHTML = "";
    $.getJSON(GifAPI, function(response){

          for(var i=0; i < response.data.length;i++){
            gifHTML += '<li class="imageList">';
            gifHTML += '<a href=" ' + response.data[i].images.fixed_height.url + ' ">';
            gifHTML += '<img src= " ' + response.data[i].images.fixed_width_small_still.url + ' "></a></li>';
         }
         $('#gifs').html(gifHTML);
     
    	
    });

   


   

  }); 

});