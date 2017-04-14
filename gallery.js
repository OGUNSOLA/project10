$(document).ready(function() {
  
 


 $('form').submit(function (evt) {
    var $submitButton = $('#submit');
    var $searchField = $('#search');
    evt.preventDefault();
   
    var gifSearch = $searchField.val();
    var link1= "http://api.giphy.com/v1/gifs/search?q=";
    var link2 = link1 + gifSearch;
    var GifAPI = link2 +"&limit=12&rating=pg&api_key=dc6zaTOxFJmzC";
    console.log(GifAPI);


    var gifList;
    var gifHTML = "";
    $.getJSON(GifAPI, function(response){
        
            $.each(response.data.images, function(i, image){
                gifHTML += '<li class="imageList">';
                gifHTML += '<a href="' + image.fixed_height.url + '">';
                gifHTML += '<img src= " ' + image.fixed_width_small_still + ' "></a></li>';

            });
        
        // for (var i=0; i< response.data;i++){
        //     console.log(respose.data[i].images.fixed_height.url);
        //     gifList += '<li class="imageList" ><a href="respose.data[i].images.fixed_height.url"> <img src="respose.data[i].images.fixed_width_small_still"/></a></li>';
        // }
    	
    });

    $('#gifs').html(gifHTML);


   

  }); // end click

}); // end ready

// var photoHTML = '';
//       if (data.items.length > 0) {
//         $.each(data.items,function(i,photo) {
//           photoHTML += '<li class="grid-25 tablet-grid-50">';
//           photoHTML += '<a href="' + photo.link + '" class="image">';
//           photoHTML += '<img src="' + photo.media.m + '"></a></li>';
//         }); // end each
//       } else {
//         photoHTML = "<p>No photos found that match: " + animal + ".</p>"
//       }
//       $('#photos').html(photoHTML);