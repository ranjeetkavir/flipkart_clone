var slides = document.querySelectorAll(".slide")

var ind = document.getElementById("indicator")




var a =  document.getElementsByClassName("active")


var flag = 0;



    slides.forEach(
        (slide, index) => {
        slide.style.left = `${index * 100}%`
       
        // slide.innerHTML = `${a}`;
    }
    
)
    

const changeSlide = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${flag * 100}%)`
           
            slides.display = `${a}`;
        }
    )
}


var prebtn = document.querySelector("#pre")

prebtn.addEventListener("click",function(){
    if(slides.length > flag){
        flag--
        changeSlide()
        
        }
        else{
            flag++
            changeSlide()
        }
})


var nextbtn = document.querySelector("#next")

nextbtn.addEventListener("click",function(){
    if(flag < slides.length){
        flag++
        changeSlide()
        }
        else{
            flag = 0
            changeSlide()
        }
})



var srch = document.querySelector("#searchbox")

srch.addEventListener("click",function(){
   alert("efhheh")
})


//  var clutter= "";


//  for(i=1;i<=50;i++){
    
//    clutter +=  ` <a href="">Radha Dress For Girls |</a> `;

// }
   
// document.querySelector(".content").innerHTML=clutter;