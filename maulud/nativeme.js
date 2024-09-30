// Define your ad container first, ensuring it's available in the DOM
var adContainer = document.createElement('div');
adContainer.id = 'container-2fff9116256672b819523a02a8cabcd7';
document.body.appendChild(adContainer);  // Append container to the body or a specific location

// Now, dynamically create the script element for the ad
var adScript = document.createElement('script');
adScript.async = true;
adScript.setAttribute('data-cfasync', 'false');
adScript.src = '//amusinghump.com/2fff9116256672b819523a02a8cabcd7/invoke.js';

// Append the script to the body (or head)
document.body.appendChild(adScript);
