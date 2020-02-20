// Jacob Stangers Portfolio

$(document).ready(function () {
  $('.work').on('click', function() {
    console.log(this);
    console.log('was pressed');
    
    
  });

  // $('.project-box').on('click', 'div', function() {});

  // $( ".work" ).hover(
  //   function() {
  //     $( this ).css('box-shadow', '10px 10px');
  //   }, function() {
  //     $( this ).css('box-shadow', ' ');
  //   }
  // );
  $( ".work" ).hover(
    function() {
      $( this ).toggle('shadow');
    }, function() {
      $( this ).toggleClass('shadow');
    }
  );
  
});
