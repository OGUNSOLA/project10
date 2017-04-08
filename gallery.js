$(document).ready(function() {


 $('form').submit(function (evt) {
    
   evt.preventDefault();
   var $search = $('#search');
   var $submit = $('#submit');
   
 
     $search.prop('disabled',true);
    $submit.attr('disabled',true).val('searching...');

    // the AJAX part
    var movieTitle = $search.val();
    var flickerAPI1 = "http://img.omdbapi.com/?";
    var flickerAPI2 = flickerAPI1 + t=movieTitle;
    var flickerAPI = flickerAPI2 + "&apikey=a1a18855";
    
    var OMDBOptions = {
      type: movie,
      r: "json",
      t:movieTitle,
      page:10
    };
    function displayMovies(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<movieThumbnail>';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
       $searchField.prop('disabled',false);
    $submitButton.attr('disabled',false).val('search');
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready