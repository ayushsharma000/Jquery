// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$("#first").click(function(){
    $("p").hide();
})
$("#second").click(function(){
    $("p").toggle();
})



// Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$("#third").click(function(){
    $.ajax({
        url : "https://jsonplaceholder.typicode.com/todos/12",
        type : "GET",
        success : function(data){
            console.log(data);
            document.getElementsByTagName("p")[1].innerText = data.title;
        }
    })
})