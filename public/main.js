
// Accordiom funtion on the nav menu
document.querySelector('#hamburger').addEventListener('click', ()=>{
    if (document.querySelector('#navtarget').offsetHeight > 0 ){
        document.querySelector('#navtarget').style.height = 0 +"px"
    }else {
        const navItems = document.querySelectorAll("#navtarget > .nav-item")
        let total = 0
        for (let i = 0; i < navItems.length; i++){
            total += navItems[i].offsetHeight
        }
        document.querySelector('#navtarget').style.height = total + "px"
    }
    
    
})



