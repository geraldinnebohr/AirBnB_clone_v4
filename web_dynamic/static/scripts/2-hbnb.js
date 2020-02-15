$.getJSON("http://0.0.0.0:5001/api/v1/status/?jsoncallback=?", function(data) {
    console.log(data);
});

$( document ).ready(() => {
    let x = [];
    let amen = [];
    console.log("hola");
    /*$.getJSON("http://0.0.0.0:5001/api/v1/status/?callback=?", function(data) {
      console.log(data.status);
    });*/

  $("input[type='checkbox']").change(function(){
    if(this.checked){
      alert($(this).attr("data-name"));
      x.push($(this).attr("data-id"));
      amen.push($(this).attr("data-name"));
      $(".amenities h4").text(amen);
    }
    else {
      let index = x.indexOf($(this).attr("data-id"));
      //console.log(index);
      x.splice(index, 1);
      amen.splice(index, 1);
      if (amen.length > 0) {
        $(".amenities h4").text(amen);
      } else {
        $(".amenities h4").html('&nbsp;');  
      }
    }
  //console.log(x, amen);
  });

});
