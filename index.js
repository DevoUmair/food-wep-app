const nav = document.querySelector("#nav")
let link = document.querySelectorAll(".link")
let section = document.querySelectorAll(".section")
let win = document.querySelector("html")

function handleScroll() {

    let current = ""

    section.forEach( sec => {
           let secFromTop = sec.offsetTop
           let secHeight = sec.clientHeight
           let scrollin = win.scrollTop

           if(scrollin >= (secFromTop - secHeight /2.1)){
                current = sec.getAttribute("id")
           }
    })

     link.forEach( linkBtn => {
         linkBtn.classList.remove("text-[#fb8312]")
         if(linkBtn.classList.contains(current)){
            linkBtn.classList.add("text-[#fb8312]")
         }else{
            linkBtn.classList.remove("text-[#fb8312]")
         }
     });

    const scrollY = window.scrollY;

    if (scrollY > 300) {
        nav.classList.add("fixed")
        nav.classList.add("top-0")
        nav.classList.add("left-0")
        nav.classList.add("right-0")
        nav.classList.add("shadow-md")
        nav.classList.add("nav-top")
    } else {
        nav.classList.remove("fixed")
        nav.classList.remove("top-0")
        nav.classList.remove("left-0")
        nav.classList.remove("right-0")
        nav.classList.remove("shadow-md")
        nav.classList.remove("nav-top")
    }
}

window.addEventListener("scroll", handleScroll);

AOS.init();

const openMenu = document.querySelector(".open-menu")
const cancelMenu = document.querySelector(".cancel-menu")

const PopupBox = document.querySelector(".popup-box")
const sideBar = document.querySelector(".side-bar")
const sideBarLinks = document.querySelectorAll(".sidebar-link ")


openMenu.addEventListener("click", () => {
    PopupBox.classList.add("popup-box-open")
    sideBar.classList.add("right-[0]")
});

cancelMenu.addEventListener("click", () => {
    PopupBox.classList.remove("popup-box-open")
    sideBar.classList.remove("right-[0]")
});

sideBarLinks.forEach( eachLink => {
    eachLink.addEventListener("click" , () => {
        PopupBox.classList.remove("popup-box-open")
        sideBar.classList.remove("right-[0]")
    })
})
