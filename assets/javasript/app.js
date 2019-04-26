
function searchArticles() {


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + "Bugs" + "&api-key=KxgeNYMs0n5wEEUIYdxAcKBGp0BYEsuz" ;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response); 
        
    
    }); 


}; 

searchArticles(); 