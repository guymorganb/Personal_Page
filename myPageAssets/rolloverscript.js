
$(document).ready(() => {

    // process each img tag
    $("#image_rollovers img").each( (index, img) => {
        const oldURL = img.src;      // gets the src attribute
        const newURL = img.id;       // gets the id attribute

        // preload rollover image		
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

         //set up event handlers for hovering over an image
        $("#image_rollovers img").hover(   // use jQuery syntax to access hover() method
            () => { $("#image_rollovers img").css({ transition: "all 1s ease-in-out", transformStyle: "preserve-3d", transform: "rotateY(180deg)" })
                img.src = newURL  // hover over
            },
           () => { $("#image_rollovers img").css({ transition: "all 0.5s ease-in-out", transformStyle: "preserve-3d", transform: "rotateY(0deg)"})
            img.src = oldURL   // hover out
           }
        ); 
       // $("#image_rollovers img").mouseover( 
       //     () => img.src = newURL )
       // $("#image_rollovers img").mouseout( 
       //     () => img.src = oldURL)
    });
});