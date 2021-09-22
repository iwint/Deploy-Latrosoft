$(document).ready(function () {
 
    $('.mobile-menu').click(function () { 
        $(".mobile-menu").toggleClass("mobile-menu-rotate");
        $('.nav-list').toggle(()=>{
            
            $('.nav-list').show("slow");
        });
      
    });

    
    
    $('.start-btn').click(function () { 
        $("body"). css("overflow", "hidden"); 
        $('.proposal').toggle();
        
    });
    $('.close').click(function () { 
        $("body"). css("overflow", "scroll"); 
        $('.proposal').hide();
       
    });

    $('pro').click(function () { 
    
        
    });









    
   

});


    


