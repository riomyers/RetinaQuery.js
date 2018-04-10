/*
The MIT License (MIT)

Copyright (c) 2017 Rio Myers

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

How to use:
Add @2x to the end of each retina image in your website like this: "retinaimage@2x.png"
The script below will automatically change your images' src if a retina version is available with @2x
The width and height of the original image is automatically added to the HTML of the retina version
so there is no need to do this manually

Use http://retinize.it/ for a Photoshop shortcut to create retina versions of your images

To enable the script add script to the header or footer of your documents (wherever you keep your scripts)
<script>
//Apply retina query to all elements in the body a.k.a everything
$('body').retinaQuery();

//Disable retina on specific elements, of course you can change the class to anything you'd like
$('.noretina').retinaQuery({nope: true});

//Force retina on specific elements, of course you can change the class to anything you'd like
$('.forceretina').retinaQuery({force: true})
</script>

*/
;(function ($, window, document, undefined) {

    $.fn.retinaQuery = function(options) {

    var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
    var isRetina = pixelRatio > 1;
	var retinaQueries = "(-webkit-min-device-pixel-ratio: 1.5),\
	(min--moz-device-pixel-ratio: 1.5),\
	(-o-min-device-pixel-ratio: 3/2),\
	(min-device-pixel-ratio: 1.5),\
	(min-resolution: 1.5dppx),\
	(min-resolution: 144dpi)";
    var isRetinaQuery = window.matchMedia(retinaQueries).matches;

      var defaults = {
          force : false,
          nope  : false,
          on    : true
      }

     var settings = $.extend(defaults, options);

       return this.each( function() {

       //Window load necessary to get width and height for Safari
       $(window).load(function() {

		$('img').each(function() {
		    //Change to http if you dont' use ssl
		    var noExt = $(this).attr('src').lastIndexOf("https://", 0) !== 0;
	
		    var Width = $(this).width();
		    var Height = $(this).height();
	
			//Force Retina
			if(settings.force) {if (noExt) {$(this).attr('src', $(this).attr('src').replace(".","@2x."))}};
	
			//Run Retina
			if(settings.on) {if (isRetina || isRetinaQuery) {if (noExt) {$(this).attr('src', $(this).attr('src').replace(".","@2x."))}}};
	
			//No Retina
			if(settings.nope) {if (noExt) {$(this).attr('src', $(this).attr('src').replace("@2x.","."))}};

    		$(this).attr({ width: Width, height: Height});

			$(this).error(function(){
    			$(this).attr('src', $(this).attr('src').replace("@2x.","."))
			});
		  });//end window load
		});
	 });
  }
})(jQuery, window, document);
