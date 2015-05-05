(function ($) {
  $(document).ready(function() {
    $('ul.slide-news').find('.desc p').each(function(){
      var height = $(this).height();
      while (height > 48) {
        var text = $(this).find('a').html();
        var lastSpace = text.lastIndexOf(' ');
        var newText = text.substring(0, lastSpace) + '...';
        $(this).find('a').html(newText);
        height = $(this).height();
      }
    });
  
    if ($('.content-chart').length > 0) {
      $('.content-chart').hide();
      $('#tabs-1').show();
       $(".chart li a img").mouseenter(function (){
          var parent = $(this).parents('li.chart-item');
          if (!$(parent).hasClass('ui-tabs-active')) {
              var replaceImg = $( this ).attr( "src" ).replace( ".png","-active.png");
              $( this ).attr( "src", replaceImg);
          }
      });
       $(".chart li a img").mouseout(function (){
           var parent = $(this).parents('li.chart-item');
          if (!$(parent).hasClass('ui-tabs-active')) {
             var replaceImg = $( this ).attr( "src" ).replace( "-active.png" ,".png");
              $( this ).attr( "src", replaceImg);
          }
      });
      $(".chart li a").click(function (){
          /*var isActive = $( this ).find("img").attr( "src" ).indexOf("-active.png");
          if (isActive == -1) {
              var replaceImg = $( this ).find("img").attr( "src" ).replace( ".png","-active.png");
              $( this ).find("img").attr( "src", replaceImg);
          }*/

          if (!$(this).parent('li.chart-item').hasClass('ui-tabs-active')) {
                var currentActiveImg = $(".chart li.ui-tabs-active").find("img").attr( "src" ).replace( "-active.png" ,".png");
                  $(".chart li.ui-tabs-active").find("img").attr( "src", currentActiveImg );
                  $(".chart li.ui-tabs-active").removeClass('ui-tabs-active');
                  $(this).parent('li.chart-item').addClass('ui-tabs-active');
                  $('.content-chart').hide();
                  var contentDivId = $(this).attr('class');
                  $('#' + contentDivId).show();
                  
          }

          $('html, body').animate({
                    scrollTop: $('#' + contentDivId).offset().top
                  }, 1000);

      });
    
    }
    $(document).ready(function(){
      //   $('.toggle').click(function(){
      //       var myUL = $(this).siblings(".submenu").toggleClass("showme");
      //       $("div").not(myUL).removeClass("showme");
      //   })
      //     $(".toggle").mouseenter(function (){
      //    var myUL = $(this).siblings(".submenu").toggleClass("showme");

      // });
       $('.content .content-right .list-company-pj .block .row .columns.text > ul > li > ul > li').hover(function(){
           $(this).find(".submenu").fadeIn(500);
        },function(){
           $(this).find(".submenu").hide();
        });
    });

    // image preview function, demonstrating the ui.dialog used as a modal window
    function viewLargerImage( $link ) {
      var src = $link.attr( "href" ),
        title = $link.siblings( "img" ).attr( "alt" ),
        $modal = $( "img[src$='" + src + "']" );
 
      if ( $modal.length ) {
        $modal.dialog( "open" );
      } else {
        var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
          .attr( "src", src ).appendTo( "body" );
        setTimeout(function() {
          img.dialog({
            title: title,
          });
        }, 1 );
      }
    }       
         
    if($("#accordion").length > 0)
    {
      //$("#accordion").accordion({ active :  $("#accordion").children("li").length});
      $('#accordion').accordion({
        collapsible:true,    
        heightStyle: "content",
        beforeActivate: function(event, ui) {
             // The accordion believes a panel is being opened
            if (ui.newHeader[0]) {
                var currHeader  = ui.newHeader;
                var currContent = currHeader.next('.ui-accordion-content');
             // The accordion believes a panel is being closed
            } else {
                var currHeader  = ui.oldHeader;
                var currContent = currHeader.next('.ui-accordion-content');
            }
             // Since we've changed the default behavior, this detects the actual status
            var isPanelSelected = currHeader.attr('aria-selected') == 'true';

             // Toggle the panel's header
            currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));

            // Toggle the panel's icon
            currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

             // Toggle the panel's content
            currContent.toggleClass('accordion-content-active',!isPanelSelected)    
            if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

            return false; // Cancel the default action
        }
    });
    }    
    
    var anchorEles = $('#accordion-custom .panel-title a');
    if (anchorEles.length > 0) {
      for (i=1;i<anchorEles.length;i++) {
        $(anchorEles[i]).addClass('collapsed');
      }
   
      $('#accordion-custom .panel-title a').click(function(){
        var currentEle = this;
        if ($(currentEle).hasClass('collapsed')) { // Currently collapsed
          // Try to get the open item and closed it
          var anchorEles = $('#accordion-custom .panel-title a');
          console.log(anchorEles.length);
          if (anchorEles.length > 0) {
            for (i=0;i<anchorEles.length;i++) {
              console.log($(anchorEles[i]).hasClass('collapsed'));
              if (!$(anchorEles[i]).hasClass('collapsed')) {
                console.log("YEAH");
                $(anchorEles[i]).addClass('collapsed');
                $(anchorEles[i]).parents('.panel-heading').siblings('.panel-collapse').slideUp();
                break;
              }
            }
          }
          
          // Try to open the selected one
          $(currentEle).removeClass('collapsed');
          $(currentEle).parents('.panel-heading').siblings('.panel-collapse').slideDown();
        }
        return false;
      });
    }
  
    var searchPlaceholderText = $('#block-search-form #search-block-form input[name="search_block_form"]').attr('placeholder');
    if(typeof(searchPlaceholderText) != 'undefined'){
        $('#block-search-form #search-block-form input[name="search_block_form"]').attr('placeholder', searchPlaceholderText.toUpperCase());    
    }
    
  
    // $('#block-search-form #search-block-form input[name="search_block_form"]').focus(function(){
    $('#block-search-form').mouseover(function(){
      if ($('#block-search-form').hasClass('login-search')) {
        $('#block-search-form').removeClass('login-search');
        $('#block-search-form #search-block-form input[name="search_block_form"]').focus();
      }
    });
  
    // $('#block-search-form #search-block-form input[name="search_block_form"]').blur(function(){
    $('#block-search-form').mouseout(function(){
      if (!$('#block-search-form').hasClass('login-search')) {
        // $(this).val('');
        $('#block-search-form').addClass('login-search');
        $('#block-search-form #search-block-form input[name="search_block_form"]').blur();
        // $('#block-search-form #search-block-form input[name="search_block_form"]').val('');
      }
    });
    
    $('#block-search-form #search-block-form .submit #search_block_submit').click(function(){
      if ($('#block-search-form').hasClass('login-search')) {
        $('#block-search-form').removeClass('login-search');
        $('#block-search-form #search-block-form input[name="search_block_form"]').focus();
        return false;
      } else {
        this.form.submit();
      }
    });
    
    var footerMenuMegazineContent = $('#small-logo-megazine').html();
    $('#small-logo-megazine').html('<span class="small-logo-megazine">' + footerMenuMegazineContent + '</span>');
    
    var autoStartSlider =   true;     
    if($('.bxslider li').length == 1){
        autoStartSlider =   false;   
    }
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: autoStartSlider,
    });   
    
    $('.slidernews').bxSlider({
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 245,
      slideMargin: 22
    });
    $('.slidermagazine').bxSlider({
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 245,
      slideMargin: 22
    });
    $('input').iCheck({
    labelHover: false,
    cursor: true
    });
     $('.account').hover(function(){
        $('.region-usermenu').fadeIn(500)
    },function(){
        $('.region-usermenu').hide()
    });
       $('.click-magazine-popup').bind('click', function(e) {
        // Prevents the default action to be triggered. 
        e.preventDefault();
        
        // Triggering bPopup when click event is fired
        /* var sliderPopup = $('.slide-inside-magazine-popup').bxSlider({
          adaptiveHeight: true,
          mode: 'fade',
          speed: 500,
          autoHidePager: true,
        }); */
        
        var nid = $(this).parents('div.columns').attr('data-popup');
        console.log(nid);
        if (typeof nid != 'undefined') {
          var popupSelector = '.magazine-popup-' + nid;
          var sliderSelector = '.slide-inside-magazine-popup.parent-' + nid;
          console.log(popupSelector);
          var sliderPopup = '';
          setTimeout('slider.reloadSlider()',1000);
          $(popupSelector).bPopup({
            appendTo: '.block-magazine.highlighted-region',
            closeClass: 'b-close',
            transition: 'fadeIn',
            speed: 3000,
            follow: [false, false],
            onOpen: function(){
              setTimeout(function(){
                sliderPopup = $(sliderSelector).bxSlider({
                  adaptiveHeight: true,
                  mode: 'fade',
                  speed: 500,
                  autoHidePager: true,
                });
                 $(".bx-pager-item:only-child").addClass("only-child");
                console.log(typeof sliderPopup);
              },100);

            },
            onClose: function(){
              if (typeof sliderPopup != 'undefined') {
                sliderPopup.destroySlider();
              }
            }
          });
        }
      });

    
    
    // Invoke the plugin
    if($.browser.msie == true && ($.browser.version == "8.0" || $.browser.version == "9.0")){
    /*! http://mths.be/placeholder v2.0.8 by @mathias */
;(function(window, document, $) {

    // Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
    var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function() {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this
                .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.placeholder')
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function(element) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }

                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function(element, value) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }

                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != safeActiveElement()) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function() {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function() {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({ 'type': 'text' });
                    } catch(e) {
                        $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
                    }
                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-password': $input,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

    function safeActiveElement() {
        // Avoid IE9 `document.activeElement` of death
        // https://github.com/mathiasbynens/jquery-placeholder/pull/99
        try {
            return document.activeElement;
        } catch (exception) {}
    }

}(this, document, jQuery));
    
        
        
        $('input, textarea').placeholder();
        // That’s it, really.
        // Now display a message if the browser supports placeholder natively
        var html;
        if ($.fn.placeholder.input && $.fn.placeholder.textarea) {
          html = '<strong>Your current browser natively supports <code>placeholder</code> for <code>input</code> and <code>textarea</code> elements.</strong> The plugin won’t run in this case, since it’s not needed. If you want to test the plugin, use an older browser ;)';
        } else if ($.fn.placeholder.input) {
          html = '<strong>Your current browser natively supports <code>placeholder</code> for <code>input</code> elements, but not for <code>textarea</code> elements.</strong> The plugin will only do its thang on the <code>textarea</code>s.';
        }
        if (html) {
          $('<p class="note">' + html + '</p>').insertAfter('form');
        }    
    }
    
  });
})(jQuery);


document.createElement('header');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('nav');
document.createElement('footer');
