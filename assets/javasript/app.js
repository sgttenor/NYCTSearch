
function searchArticles(query) {

    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=KxgeNYMs0n5wEEUIYdxAcKBGp0BYEsuz";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response); 
        
    
    }); 


}; 




$("#submit").on("click", function (event) {
  event.preventDefault(); 
  var submit = $("#search-term").val(); 
  console.log(submit); 
   
  searchArticles(submit); 
     
}); 