// Jacob Stangers Portfolio

$(document).ready(function () {

  $('.work').on('click', function() {
    // console.log(this);
    console.log(this + ' was pressed');

    
  });

//   $('button selector').click(function(){
//     window.location.href='the_link_to_go_to.html';
//  })

  // $('.project-box').on('click', 'div', function() {});

  // $( ".work" ).hover(
  //   function() {
  //     $( this ).css('box-shadow', '10px 10px');
  //   }, function() {
  //     $( this ).css('box-shadow', ' ');
  //   }
  // );

  // cool disappering trick!!!
  // $( ".work" ).hover(
  //   function() {
  //     $( this ).toggle('shadow');
  //   }, function() {
  //     $( this ).toggleClass('shadow');
  //   }
  // );


  $(".work").hover(function() {
    $(this).css(
        "box-shadow", "7px 7px 15px #888"
    );
}, function() {
    $(this).css(
        "box-shadow", "0px 0px 0px #888"
    );
});
  
});
