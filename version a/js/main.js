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

console.log("go one")