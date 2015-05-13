(function ($) {
  Drupal.behaviors.lahalle_js_settings = {
    attach: function (context, settings) {    
        if(typeof($("#backtotop")) != "undefined" && typeof($('.content-right').offset()) != "undefined"){     
            var $backToTopOffsetLeft   =   parseInt($('.content-right').offset().left +  $('.content-right').width() + 10) + 'px';
            $("#backtotop").attr('style','background:url('+Drupal.settings.lahalle_js_settings.back_to_top_icon_path+')  no-repeat center center; left: ' + $backToTopOffsetLeft);
        }  
        
        var $shortcut_limit =   Drupal.settings.lahalle_js_settings.lahalle_core_shortcut_limit;
        var $shortcut_limit_error =   Drupal.settings.lahalle_js_settings.lahalle_core_shortcut_limit_error_text;
    
        // there's the gallery and the trash
        var $gallery = $( "#gallery" ),
            $trash = $( "#trash" );
        var recycle_icon = "<a title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
        // let the gallery items be draggable
        if($( "#gallery" ).length > 0 && $( "#trash" ).length > 0){
          if($( $trash ).children("li").length > 0){
            $( $trash ).children("li").each(function(){  
              if($(this).html().indexOf("Recycle this image") == -1 && !$(this).hasClass("ui-state-disabled")){
                $(this).append(recycle_icon);  
              }
            });  
          }
          var $initDragAndDrop = function(){
            
            $( "li", $gallery ).draggable({
              cancel: "a.ui-icon", // clicking an icon won't initiate dragging
              revert: "true", // when not dropped, the item will revert back to its initial position
              containment: "document",
              helper: "clone",
              
              connectToSortable: "#trash",
              addclass: 'block'
            });   
            
            $trash.sortable({
              accept: "#gallery > li",      
              cancel: '.ui-state-disabled',
              activeClass: "ui-state-highlight",
              helper: "clone",
              cursor: "move",
              revert: "true",
              connectWith: "#gallery",
              receive: function( event, ui ) {
                deleteImage( ui.item );
              },
              stop: function (event, ui) {  
                var $list = $( $trash ).children("li").length ? $( $trash ).children("li") : null; 
                var $cancelledItem  = null;
                $list.each(function(){
                  if($(this).hasClass("ui-state-disabled")){
                    $cancelledItem  = $(this);
                    $(this).remove();  
                  }
                });
                $( $trash ).append($cancelledItem);
              }
            });
         
            // let the gallery be droppable as well, accepting items from the trash
            $gallery.sortable({
              accept: "#trash > li",
              activeClass: "custom-state-active",    
              update: function ( event, ui ) { 
                recycleImage( ui.item );
              }   
            }); 
            
            $("#trash a.ui-icon-refresh").click(function(){ 
              $(this).parent().addClass("ui-draggable").fadeOut(function(){
                $(this).appendTo($gallery).fadeIn(function(){
                  $initDragAndDrop(); 
                });
              });       
            }); 
          }        
          $initDragAndDrop();    
        }
        
     
        // image deletion function
        
        function deleteImage( $item ) {  
          var $list = $( $trash ).children("li").length ? $( $trash ).children("li") : $item.find( "a.ui-icon-trash" ).remove(); 
          if($list.length <= parseInt($shortcut_limit) + 1){ 
            $item.fadeOut(function() {
              $list.each(function(){  
                if($(this).html().indexOf("Recycle this image") == -1 && !$(this).hasClass("ui-state-disabled")){
                  $(this).append(recycle_icon);  
                }
              });
              $initDragAndDrop();    
            }).remove();
          } 
          else{
            $list.each(function(){
              if($(this).html() == $($item).html()){
                $(this).remove();
              }
            });
            //$( "#dialog" ).html($shortcut_limit_error).dialog( "open" );   
            $( "#dialog" ).html($shortcut_limit_error).dialog({
              dialogClass: "shortcut-limit-popup",
              buttons: [
                {
                  text: "OK",
                  click: function() {
                    $( this ).dialog( "close" );
                  }
                }
              ]
            });
          } 
        }
     
        // image recycle function
        var trash_icon = "";
        function recycleImage( $item ) { 
          $initDragAndDrop();
        }
        if(!($.browser.msie == true && ($.browser.version == "8.0" || $.browser.version == "9.0"))){
          $('#user-login-form .form-text').focus(function(){  
            window.tempPlaceholder  = $(this).attr('placeholder'); 
            $(this).removeAttr('placeholder'); 
          });
          $('#user-login-form .form-text').blur(function(){  
            $(this).attr('placeholder', window.tempPlaceholder);  
          });
        }
    }
  };   
}(jQuery));