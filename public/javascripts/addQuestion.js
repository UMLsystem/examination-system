$(function(){
   var cource;
$('#cource').change(function(){

  cource = $('#cource').val();
    console.log(cource);
  $.post('/getcource',{cource:cource},function(){



  });
});

});
