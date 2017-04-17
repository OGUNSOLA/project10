$(document).ready(function() {
   var searchField = $("#search");
   var submitbtn = $("#submit");
 


 $('form').submit(function (evt) {
    evt.preventDefault();
   
    searchField.prop("disabled", true);
    submitbtn.attr("disabled", true).val("Searching...");
    
   
    var gifSearch = searchField.val();
    var link1= "http://api.giphy.com/v1/gifs/search?q=";
    var link2 = link1 + gifSearch;
    var GifAPI = link2 +"&limit=12&rating=pg&api_key=dc6zaTOxFJmzC";
    console.log(GifAPI);


     
          var gifHTML = "";
         $.getJSON(GifAPI, function(response){

        if (response.data.length == 0) {
        var errorMessage = "<p>" + gifSearch + " does not exist on the platform, try another serach key.</p>";
        $('#errorMessage').html(errorMessage);
        setTimeout(function(){
            $('#errorMessage').html("");
        }, 10000);

        searchField.prop("disabled", false);
        submitbtn.attr("disabled", false).val("Search");

    } else {




          for(var i=0; i < response.data.length;i++){
            gifHTML += '<div class="gallery">';
            gifHTML += '<li class="imageList">';
            gifHTML += '<a href=" ' + response.data[i].images.fixed_height.url + ' ">';
            gifHTML += '<img src= " ' + response.data[i].images.fixed_width_small_still.url + ' "></a></li>';
            gifHTML += '</div>';
         }
         $('.gifs').html(gifHTML);
          
     }

     searchField.prop("disabled", false);
    submitbtn.attr("disabled", false).val("Search");
        
    });
       

    // }
    
    
   


   

  }); 


 //lightbox code

 

var $gifs = $('.gifs');
var $overlay= $('<div class="overlay"></div>');
var $overlayContainer= $('<div class="overlayContainer"></div>');
var $overlayImage= $('<img>');
var $nextImage = $('<button id="next">NEXT</button>');
var $previousImage = $('<button id="previous">PREVIOUS</button>');
var image;
 

$('body').append($overlay);
 $overlay.append($overlayContainer);
 $overlayContainer.append($overlayImage);
$overlay.append($nextImage);
$overlay.append($previousImage);
$overlay.append('<p>CLICK IMAGE TO CLOSE</p>');
$overlay.append('<p class="appreciate">Powered by giffy.com</p>');




$gifs.on('click', 'a',function(evt){
    evt.preventDefault();
    $overlay.show();
    theCurrentImage(this);
});

function theCurrentImage(clickedImage){
    image = clickedImage;
    var displayedImage = $(image).attr('href');
    $overlayImage.attr('src', displayedImage);
    

}

$overlayContainer.click(function(){
    $overlay.hide();
});




$nextImage.click(function(){
    parentImage = $(image).parent().parent().next();
   if (parentImage.length!=0){
        newImage=$(parentImage).children().children('a')
    }
    theCurrentImage(newImage); 
});

$previousImage.click(function(){
    parentImage = $(image).parent().parent().prev();
   if (parentImage.length!=0){
        newImage=$(parentImage).children().children('a')
    }
    theCurrentImage(newImage); 
});




});