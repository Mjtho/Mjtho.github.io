$(document).ready(function(){
        $(".main-div")
        .mousemove(function(e){
        var offset = $(this).offset();
        $(this).children('.follow').css({'top': e.pageY - (offset.top + 20), 'left': e.pageX- (offset.left+160)}).css('visibility', 'visible');
        })
        .mouseleave(function(e){
        $(this).children('.follow').css('visibility', 'hidden');
        });


        $(".nav-left, .nav-right, footer").mousemove(function(e){
        $('.follow').css('visibility', 'hidden');
        });

        document.querySelector( "#nav-toggle" )
        .addEventListener( "click", function() {
          this.classList.toggle( "active" );

          $(".primary-nav").toggleClass("is-visible");
        });

    });

