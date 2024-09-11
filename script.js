
var swiper = new Swiper(".my-swiper-container", {
    slidesPerView: 1,

    spaceBetween: 0,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".a-carousel-right",
        prevEl: ".a-carousel-left",
    },
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});

var myswiper = new Swiper(".group-swiper-container", {
    slidesPerView: 7,
    spaceBetween: 10,
    slidesPerGroup: 7,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var itsswiper = new Swiper(".group2-swiper-container", {
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var itzswiper = new Swiper(".group3-swiper-container", {
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var letsswiper = new Swiper(".group4-swiper-container", {
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var lastswiper = new Swiper(".group5-swiper-container", {
    slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// This is popup

document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');

    // Show the popup
    popup.style.display = 'block';

    // Hide the popup after 5 seconds 
    setTimeout(function() {
        popup.style.display = 'none';
    }, 5000);
});

// This is popup end

// This is back top button

let mybutton = document.getElementById("backtoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});

// This is back top button end


// This is accordion jquery

$(document).ready(function(){
    // Hide all subcategories initially
    $('.hmenu-compress-section').hide();
    
    // Toggle subcategories on click
    $('.hmenu-item').click(function(e){
        e.preventDefault();
        $(this).next('.hmenu-compress-section').slideToggle('fast');
    });
    
    // Toggle the See all / See less links
    $('.toggle-all').click(function(e){
        e.preventDefault();
        var $this = $(this);
        $this.toggle();
        $this.siblings('.toggle-all').toggle();
        
        if($this.text().trim() === "See all"){
            $('.hmenu-compress-section').slideDown('fast');
        } else {
            $('.hmenu-compress-section').slideUp('fast');
        }
    });
});

$(document).ready(function(){
    // Hide all subcategories initially
    $('#hmenu-section').hide();
    
    // Toggle subcategories on click
    $('#hmenu-item-second').click(function(e){
        e.preventDefault();
        $(this).next('#hmenu-section').slideToggle('fast');
    });
    
    // Toggle the See all / See less links
    $('.toggle-all-second').click(function(e){
        e.preventDefault();
        var $this = $(this);
        $this.toggle();
        $this.siblings('.toggle-all-second').toggle();
        
        if($this.text().trim() === "See all"){
            $('#hmenu-section').slideDown('fast');
        } else {
            $('#hmenu-section').slideUp('fast');
        }
    });
});


// This is accordion jquery end


// This is side navbar

var hamburgerMenu = document.querySelector('.nav-hamburger-menu');
var hmenuSidebar = document.querySelector('.hmenu-sidebar');
var darkBg = document.querySelector('.hmenu-dark-bg');

hamburgerMenu.addEventListener('click', function(){
    if(hmenuSidebar.style.display == 'none') {
        hmenuSidebar.style.display = "block";
        darkBg.style.display = "block";
    }
    else{
        hmenuSidebar.style.display = "none";
    }
});

var closeIcon = document.querySelector('.hmenu-close-icon');

closeIcon.addEventListener('click', function() {
    if(hmenuSidebar.style.display == "block"){
        hmenuSidebar.style.display = "none";
        darkBg.style.display = "none";
    }
    else{
        hmenuSidebar.style.display = "none";
    }
})



// This is side navbar end