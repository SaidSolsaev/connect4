import {gsap} from "gsap";


function animate(location){
    gsap.fromTo(`.testpiece_${location}`,
        {y: -500},
        {
            y: 0,
            duration: 1,
            ease: "bounce"
        }
    
    )
}

function flashWin(){
    gsap.from('.win', {
        opacity: 0,
        duration: 1,
        yoyo: true,
        repeat: -1
    })
}

function flashTop(){
    let timeline = gsap.timeline()
    timeline.fromTo('.top', {
        opacity: 0,
        backgroundColor: 'none'
    },
        {
         opacity: 60,
         backgroundColor: 'pink',
         duration: .5,
         yoyo: true,
         repeat: 3   
        }
    )

    timeline.to(".top", {
        opacity: 100,
        backgroundColor: "none"
    })
}


export {animate, flashWin, flashTop}