$(document).ready(function(){
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date) {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/');
      }

      
    var url = "https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=348d958061777242b6ad397f17121add&units=metric";
    $.getJSON(url, function(data){
       
            $("#temp").html(data["main"]["temp"]+"&deg;");
            $("#city").html(data["name"]);
            
            
            $("#desc_image").attr("src"," http://openweathermap.org/img/wn/"+data["weather"][0]["icon"]+"@2x.png")
            var d = new Date();
            
            $("#wdate").html(formatDate(d));
    });


});
