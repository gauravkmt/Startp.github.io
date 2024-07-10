// JavaScript for scroll-to-top button
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.addEventListener('DOMContentLoaded', function () {
  var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');

  dropdownSubmenus.forEach(function (submenu) {
    submenu.querySelector('.dropdown-toggle').addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Close any currently open submenu
      var openSubmenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu.show');
      openSubmenus.forEach(function (openSubmenu) {
        if (openSubmenu !== submenu.querySelector('.dropdown-menu')) {
          openSubmenu.classList.remove('show');
        }
      });

      // Toggle the current submenu
      submenu.querySelector('.dropdown-menu').classList.toggle('show');
    });
  });
});

document.addEventListener('click', function (e) {
  var openSubmenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu.show');
  openSubmenus.forEach(function (submenu) {
    if (!submenu.parentElement.contains(e.target)) {
      submenu.classList.remove('show');
    }
  });
});

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});