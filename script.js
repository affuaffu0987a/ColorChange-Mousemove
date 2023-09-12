let rectangle=document.querySelector("#mouseOverColorChange")
// console.log(rectangle);


rectangle.addEventListener("mousemove",(position)=>{
    let rectangleDetails = rectangle.getBoundingClientRect()
    let rectPosition = position.x - rectangleDetails.left;
    let rectWidth = rectangleDetails.width/2;
    // console.log(rectPosition);
    if(rectPosition < rectWidth){
        // rectangle.style.backgroundColor=`rgb(${rectPosition},0,0)`
        let redColor=gsap.utils.mapRange(0,rectWidth,rectWidth,0,rectPosition)
        gsap.to(rectangle,{
            backgroundColor: `rgb(${redColor},0,0)`,
        })

    }
    else{
         // rectangle.style.backgroundColor=`rgb(0,0,${rectPosition})`
        let greenColor = gsap.utils.mapRange(rectWidth, rectangleDetails.width,0,rectWidth, rectPosition)
        gsap.to(rectangle,{
            backgroundColor: `rgb(0,${greenColor},0)`
        })
    }
})

rectangle.addEventListener("mouseleave",()=>{
    gsap.to(rectangle,{
        backgroundColor:"white"
    })
})