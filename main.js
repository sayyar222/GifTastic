


var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=l5NkLXSvrab3TPAQzz6b4kBTCtG5VQ9o&limit=10");
// sending request to use giphy API 
xhr.done(function(response) { 
    console.log("success got data", response); });
// promise and consoling data
    var gifs = response.data
//creating variable 
    for (i in gifs) 
    {
    $('inner').append("<img src='"+gifs[i].images.original.url+"' style='height:350px; width:350px;'/>")
}
    