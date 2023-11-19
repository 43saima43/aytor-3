// search js start
document.querySelector('#search_show_btn').addEventListener('click',function(){
    document.querySelector('#search').classList.add('show');
})


// search js end
document.querySelector('#search_close_btn').addEventListener('click',function(){
    document.querySelector('#search').classList.remove('show');
})

 // slick jquery start
//  hero slider js start
$ (function() {
    $(".hero_slider").slick({
       autoplay:true,
       arrows:false,
       fade:true,
       speed:600,
       dots:true,
       dotsClass:'hero_slider_dots'
      });
// hero slider js end

// new arrival slider start
 $('.new_product_slider').slick({
    slidesToShow:4,
    arrows:false,
    autoplay:true,
    speed:600,
      
 })
// new arrival slider end

$('.deals_slider').slick({
    slidesToShow:2,
    arrows:false,
    autoplay:true,
    speed:600,
      
 })

     $('#deals_timer').countdown('2023/12/10', function(event) {
        var $this = $(this).html(event.strftime(''
         
         
          + ' <div><h4>%D</h4> <p>Days</p></div> '
          + '<span>:</span>'
          + ' <div><h4>%H</h4> <p> Hour </p></div> '
          + '<span>:</span>'
          + ' <div><h4>%M</h4> <p>Minute</p></div>   '
          + '<span>:</span>'
          + ' <div><h4>%S</h4> <p>Second</p> </div>  '));
      });
     
 });
 const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
