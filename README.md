RetinaQuery.js
==============

A tiny and easy to use plugin that swaps out the images by chaging the src if you're website is viewed from a Retina Device.

What is it?
A tiny and handy little plugin that swaps out the images by changing the source if you're on a Retina Device.

How to use it:
Add @2x to the end of each retina image in your website like this: 
original version: "retinaimage.png" 
retina version: "retinaimage@2x.png"

If a Retina device is detected, this script will automatically change your images to retina versions if they exist. 
The width and height of the original image is automatically added to the HTML of the retina version so there is no need to do this manually.
Use Retinize It for a photoshop shortcut to create retina versions of your images.
If the @2x retina image version does not exist the original non-retina image will be shown instead.
Make sure to include the script in the header or footer of your document

`````javascript

//To enable the plugin add it to the header or footer of your documents 
//(wherever you keep your scripts)

//Include jQuery
<script src="yourfolder/jquery.js"></script>

//Include the retina Query script
<script src="yourfolder/retina-query.js"><script/>

//Apply retina query to all elements in the body, a.k.a everything
<script>
$('body').retinaQuery();
 
//Disable retina on specific elements, of course you can change the class to anything you like
$('.noretina').retinaQuery({nope: true});
 
//Force retina on specific elements, of course you can change the class to anything you like
$('.forceretina').retinaQuery({force: true})
//</script>
`````
