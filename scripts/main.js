$(function(){
    console.log("document ready");
    $.ajax({
        type: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
        success: function(response){
            $("#chuckSays").replaceWith(response.value);
        },
        error: function(error){
            console.error(error)
        }
    })
})