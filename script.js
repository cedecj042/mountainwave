$(document).ready(function(){
    //Initialize Scrollmagic
    let controller = new ScrollMagic.Controller();
    //build a scene
    let scene = new ScrollMagic.Scene({
        triggerElement:'#discoverID',
        duration:'100%',
        triggerHook:0.5
    })
    .setClassToggle('#discoverID','fade-in')//add class to the project
    .addTo(controller);

    let scene1 = new ScrollMagic.Scene({
        triggerElement:'#featuredID',
        duration:'100%',
        triggerHook:0.7
    })
    .setClassToggle('#featuredID','fade-in')//add class to the project
    .addTo(controller);

})

