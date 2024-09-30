window.addEventListener('load', function() {
    var adContainer = document.createElement('div');
    adContainer.id = 'container-2fff9116256672b819523a02a8cabcd7';
    document.body.appendChild(adContainer);

    var adScript = document.createElement('script');
    adScript.async = true;
    adScript.setAttribute('data-cfasync', 'false');
    adScript.src = '//amusinghump.com/2fff9116256672b819523a02a8cabcd7/invoke.js';
    
    adScript.onload = function() {
        console.log("Ad script loaded successfully.");
    };
    adScript.onerror = function() {
        console.log("Failed to load ad script.");
    };
    
    document.body.appendChild(adScript);
});
