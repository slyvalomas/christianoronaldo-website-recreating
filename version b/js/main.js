const footerSittings = document.querySelector(".footer__nav")
const nav__sittings = document.querySelector(".nav__sittings")
footerSittings.addEventListener("click", function () {
    if (footerSittings.classList.contains("active")) {
      footerSittings.classList.remove("active");
      nav__sittings.style.transform = 'translateX(-10000px)';
      nav__sittings.style.right="1000px"
    } else {
      footerSittings.classList.add("active");
      nav__sittings.style.transform = 'none';
      nav__sittings.style.right="0px"
      
    }
  });

const email = document.querySelector(".email")

email.addEventListener("click",function(){
  if (email.style.borderColor="orange"){
    email.style.borderColor="white"
  }else{
    email.style.borderColor="orange"
  }
})
email.addEventListener("blur" ,function(){
  this.style.borderColor = "#ccc"
})
    const next = document.querySelector(".next")
    const before = document.querySelector(".before")
    const video = document.getElementById("video-container")
    let currentIndex = 0;
    function index(){
        
    }
    next.addEventListener("click",function(){
        if (currentIndex<3)
        currentIndex++;
    const translateValue = `translateX(-${currentIndex * 25}%)`
    video.style.transform=translateValue
    })
    before.addEventListener("click",function(){
        if (currentIndex>0)
        currentIndex--;
    const translateValue = `translateX(-${currentIndex*25}%)`
    video.style.transform=translateValue
    })

console.log("go one")
