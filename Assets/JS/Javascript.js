// Section 1: Code for opening screen.
var navHeader = document.querySelector('.link');
var button = document.querySelector('.button');
var intro = document.querySelector('.intro');
var logoSpan = document.querySelectorAll('.intro-name');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('intro-name-active');
            }, (idx + 1) * 400)
        });
        
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('intro-name-active');
                    span.classList.add('intro-name-fade');
                }, (idx + 1) * 50)
            })
        }, 3500);

        setTimeout(()=>{
            intro.style.opacity = '0';
        }, 3500)

        setTimeout(()=>{
            intro.style.display = 'none';
        }, 5000)

        setTimeout(()=>{
            navHeader.classList.remove('link');
            button.disabled = false;
        }, 5000)
    })
})

// Section 2: Code for navbar menu.
var offcanvasLink = document.querySelectorAll('.offcanvas-link');

console.log(offcanvasLink.length);
    for (i=0; i < offcanvasLink.length; i++) {
        offcanvasLink[0].addEventListener('click', () =>{
            setTimeout(()=>{
                {location.href = "#section1"}
            }, 400)      
        })
        offcanvasLink[1].addEventListener('click', () =>{
            setTimeout(()=>{
                {location.href = "#section2"}
            }, 400)      
        })
        offcanvasLink[2].addEventListener('click', () =>{
            setTimeout(()=>{
                {location.href = "#section3"}
            }, 400)      
        })
        offcanvasLink[3].addEventListener('click', () =>{
            setTimeout(()=>{
                {location.href = "#section4"}
            }, 400)      
        })
        offcanvasLink[4].addEventListener('click', () =>{
            setTimeout(()=>{
                {location.href = "#section5"}
            }, 400)      
        })
        offcanvasLink[5].addEventListener('click', () =>{
            setTimeout(()=>{
            {location.href = "#section6"}
            }, 400)      
        })
        offcanvasLink[6].addEventListener('click', () =>{
            setTimeout(()=>{
            {location.href = "#section7"}
            }, 400) 
        })
    }

// Section 3: Code for opening toast.
const toastLiveExample = document.getElementById('liveToast')
    if (window) {
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(()=>{
                const toast = new bootstrap.Toast(toastLiveExample)
                toast.show()           
            }, 5000)
        })
    }

// Section 4: Code for mouseover text event.
var changeColor = document.querySelectorAll('.change-color');

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(()=>{
            changeColor.forEach((span, idx)=>{
                span.addEventListener("mouseover", my_first_Function);
                function my_first_Function() {
                span.style.color = 'rgba(0, 0, 0, 0.4)';
                }
                span.addEventListener("mouseout", my_second_Function);
                function my_second_Function() {
                span.style.color = 'rgba(0, 0, 0, 0.700)';
                }
            });
        }, 5000)
    })

// Section 5: Code for mouseover offcanvas navbar menu item event.
var changeNavitem = document.querySelectorAll('.change-nav-item');

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(()=>{
            changeNavitem.forEach((span, idx)=>{
                span.addEventListener("mouseover", my_third_Function);
                function my_third_Function() {
                span.style.color = 'rgba(0, 0, 0, 1)';
                span.style.backgroundColor = 'white';
                }
                span.addEventListener("mouseout", my_fourth_Function);
                function my_fourth_Function() {
                span.style.color = 'white';
                span.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                }
            });
        }, 5000)
    })

// Section 6: Code for mouseover navbar link text event.
var changeNavlink = document.querySelectorAll('.change-nav-link');

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(()=>{
            changeNavlink.forEach((span, idx)=>{
                span.addEventListener("mouseover", my_fifth_Function);
                function my_fifth_Function() {
                span.style.color = 'Lightgrey';
                }
                span.addEventListener("mouseout", my_sixth_Function);
                function my_sixth_Function() {
                span.style.color = 'whitesmoke';
                }
            });
        }, 5000)
    })

// Section 7: Code for image slideshow.
let slideIndex = 0;
    showSlides();
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 5000);
    } 

// Section 8: Code for hobbies section slideshow.
let slideIndextwo = 0;
    showSlidestwo();
    function showSlidestwo() {
        let i;
        let slides = document.getElementsByClassName("hobby-slide-one");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndextwo++;
        if (slideIndextwo > slides.length) {slideIndextwo = 1}    
        slides[slideIndextwo-1].style.display = "block";  
        setTimeout(showSlidestwo, 4000);
    }

let slideIndexthree = 0; 
    showSlidesthree();
    function showSlidesthree() {
        let i;
        let slides = document.getElementsByClassName("hobby-slide-two");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndexthree++;
        if (slideIndexthree > slides.length) {slideIndexthree = 1}    
        slides[slideIndexthree-1].style.display = "block";  
        setTimeout(showSlidesthree, 4000);
    }

let slideIndexfour = 0;
    showSlidesfour();
    function showSlidesfour() {
        let i;
        let slides = document.getElementsByClassName("hobby-slide-three");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndexfour++;
        if (slideIndexfour > slides.length) {slideIndexfour = 1}    
        slides[slideIndexfour-1].style.display = "block";  
        setTimeout(showSlidesfour, 4000);
    }

let slideIndexfive = 0; 
    showSlidesfive();
    function showSlidesfive() {
        let i;
        let slides = document.getElementsByClassName("hobby-slide-four");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndexfive++;
        if (slideIndexfive > slides.length) {slideIndexfive = 1}    
        slides[slideIndexfive-1].style.display = "block";  
        setTimeout(showSlidesfive, 4000);
    }