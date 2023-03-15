
let isNavVisible = true
let isNavVisibleMobile = true
document.querySelector('#hamburger').addEventListener('click', ()=>{
    const target = document.querySelector('#navtarget')
    if(isNavVisible === true){
        target.style.display = 'block'
        isNavVisible = false
        isNavVisibleMobile = false
    }else{
        target.style.display = 'none'
        isNavVisible = true
        isNavVisibleMobile = true
    }

});

window.addEventListener('resize', ()=> {
    if(window.innerWidth > 992){
        document.querySelector('#navtarget').style.display = "flex"
        isNavVisible = false
        isNavVisibleMobile = false
    }else if(window.innerWidth <= 992 && isNavVisibleMobile) {
        document.querySelector('#navtarget').style.display = "none"
        isNavVisible = true
        
    }
})
// Resizing stuff



