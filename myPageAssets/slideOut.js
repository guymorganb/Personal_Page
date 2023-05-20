var card = document.getElementById('activator')
var tl = gsap.timeline({defaults: {ease: "power2.inOut"}});

var toggle = false;
//let node = $('footer').textContent;

card.addEventListener('click', () => {
    toggle = !toggle;                           // set toggle state so it switches
    
    if(toggle ? tl.play() : tl.reverse());      //turnery operator
})
//console.log(node)
 //   if(toggle == true){
   //     node = node.remove()
   // }
    
    
    //console.log(node)


tl.to('.activator', {                   // we are grabbing the activator class and telling it to change the background and the border radius
    css: {background: 'linear-gradient(rgb(126, 100, 98) 0%, #0D598B 100%)',
        borderRadius: '5em 0 0 5em',
        boxShadow: '0 0 3em #63AAC0, -10px 10px 2em #0D598B',
        border: '#0D598B'}    //we are referencing the css document and updating it
})
tl.to('#slideBar', {                    // we are grabbing the sidebar and changing the css
    css: {clipPath: 'ellipse(100% 100% at 50% 50%)',
    boxShadow: '0 0 3em #63AAC0, -10px 10px 2em #0D598B'}       // here we update the CSS so the bar slides out
}, "-=.5")                              // Thid adjusts the timing for the silde out.
tl.to('.icon', {
    css: {opacity: 1,                   // set the opacity so the icons show back up again
        transform: 'translateX(0)'}
}, "-=.5")


tl.pause();
// tl is a function from gsap, and .to is one of its methods .tl=(timeline) we are creating a timeline animation that is going "to" where we specify
