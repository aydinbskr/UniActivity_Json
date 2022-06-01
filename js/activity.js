$(document).ready(function(){
    $("#date").datepicker({
        maxDate:'+90d',
        minDate: '+0d',
       
    });

    $( "#places" ).selectmenu();

    $.getJSON("js/dataActivity.json", function(data){
        var html = "";
        $.each(data.activities, function(i, item){
                html += "<div class='container inspectContainer'>";
                       
                html +="<div class='inspectImage'>";
                html +="<img src='"+item.image+"' id='Activity_image' alt='activity image'></div>";

                html +="<div class='inspectText'>";
                html += "<p class='date' >"+item.date+"</p>";
                html += "<p class='date' >"+item.place+"</p>";
                html += "<h4 id='Activity_title'>"+item.title+"</h4>";
                    
                html += "<p>"+item.description+"</p>";
                html +=  "<a class='formBtn' href='#'>Buy Ticket</a></div></div>";
                      
                
        });
        $("#activityBody").append(html);
    });
});
