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
const sporting = document.querySelector(".sportingl")
//.sportingl,.manu,.real,.jv,.alnasr,.portogal
const portugal= document.querySelector(".portogal")
const alnasr = document.querySelector(".alnasr")
const jv= document.querySelector(".jv")
const real= document.querySelector(".real")
const manU = document.querySelector(".manu")
const highlightsSection = document.querySelector(".highlightssection")
const next = document.querySelector(".next")
let currentIndex = 0;
function FCNames(){
  if (currentIndex===0){
    sporting.innerHTML=`<p class="clubs">sporting FC</p>`
    manU.innerHTML=""
    real.innerHTML=""
    jv.innerHTML=""
    alnasr.innerHTML=""
    portugal.innerHTML=""
    //----------------------
        sporting.style.borderBottom="1px solid whitesmoke"
        manU.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        real.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        jv.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        alnasr.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        portugal.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        //----------------------
            sporting.style.width="100%"
manU.style.width=""
            real.style.width=""
            jv.style.width=""
            alnasr.style.width=""
            portugal.style.width=""
  }else if (currentIndex===1){
    sporting.innerHTML=""
    manU.innerHTML=`<p class="clubs">manchester united</p>`
    real.innerHTML=""
    jv.innerHTML=""
    alnasr.innerHTML=""
    portugal.innerHTML=""
        //----------------------
        sporting.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        manU.style.borderBottom="1px solid whitesmoke"
        real.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        jv.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        alnasr.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        portugal.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
              //-------------------
              sporting.style.width="16.65%"
              manU.style.width="100%"
            real.style.width=""
              jv.style.width=""
              alnasr.style.width=""
              portugal.style.width=""
  }else if (currentIndex===2){
    sporting.innerHTML=""
    manU.innerHTML=""
    real.innerHTML=`<p class="clubs">real madrid</p>`
    jv.innerHTML=""
    alnasr.innerHTML=""
    portugal.innerHTML=""
        //----------------------
        sporting.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        manU.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        real.style.borderBottom="1px solid whitesmoke"
        jv.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        alnasr.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        portugal.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
                //----------------------
                sporting.style.width="16.65%"
                manU.style.width=""
                real.style.width="100%"
          jv.style.width=""
                alnasr.style.width=""
                portugal.style.width=""
  }else if (currentIndex===3){
    sporting.innerHTML=""
    manU.innerHTML=""
    real.innerHTML=""
    jv.innerHTML=`<p class="clubs">juventus fc</p>`
    alnasr.innerHTML=""
    portugal.innerHTML=""
        //----------------------
        sporting.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        manU.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        real.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        jv.style.borderBottom="1px solid whitesmoke"
        alnasr.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        portugal.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
                //----------------------
                sporting.style.width="16.65%"
             manU.style.width=""
                real.style.width=""
                jv.style.width="100%"
             alnasr.style.width=""
                portugal.style.width=""
  }else if (currentIndex===4){
    sporting.innerHTML=""
    manU.innerHTML=""
    real.innerHTML=""
    jv.innerHTML=""
    alnasr.innerHTML=`<p class="clubs">al naser fc</p>`
    portugal.innerHTML=""
        //----------------------
        sporting.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        manU.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        real.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        jv.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        alnasr.style.borderBottom="1px solid whitesmoke"
        portugal.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
                //----------------------
                sporting.style.width="16.65%"
              manU.style.width=""
                real.style.width=""
                jv.style.width=""
                alnasr.style.width="100%"
                portugal.style.width=""
  }else if (currentIndex===5){
    sporting.innerHTML=""
    manU.innerHTML=""
    real.innerHTML=""
    jv.innerHTML=""
    alnasr.innerHTML=""
    portugal.innerHTML=`<p class="clubs">portugal</p>`
        //----------------------
        sporting.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        manU.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        real.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        jv.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        alnasr.style.borderBottom="1px solid rgba(245, 245, 245, 0.421)"
        portugal.style.borderBottom="1px solid whitesmoke"
                //----------------------
                sporting.style.width="16.65%"
                manU.style.width=""
                real.style.width=""
                jv.style.width=""
                alnasr.style.width=""
                portugal.style.width="100%"
  }
}
next.addEventListener("click" ,function(){
  if (currentIndex<5){
    currentIndex++;
    const translateXValue = `translateX(-${currentIndex*16.65}%)`
    highlightsSection.style.transform=translateXValue
  }
  FCNames()
})


const prevues = document.querySelector(".prevues")
prevues.addEventListener("click" ,function(){
  if (currentIndex>0){
    currentIndex--;
    const translateXValue = `translateX(-${currentIndex*16.65}%)`
    highlightsSection.style.transform=translateXValue
  }
  FCNames()
})


console.log("go one")