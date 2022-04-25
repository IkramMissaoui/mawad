// ======================= js menu nav =====================
(() => {

    const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") &&
            window.innerWidth <= mediaSize) {
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expanded, collapse it
            if (menuItemHasChildren.classList.contains("active")) {
                collapseSubMenu();
            } else {
                // collapse existing expanded menuItemHasChildren
                if (navMenu.querySelector(".menu-item-has-children.active")) {
                    collapseSubMenu();
                }
                // expand new menuItemHasChildren
                menuItemHasChildren.classList.add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    });

    function collapseSubMenu() {
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
            .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
            .classList.remove("active");
    }

    function resizeFix() {
        // if navMenu is open ,close it
        if (navMenu.classList.contains("open")) {
            toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
        }
    }

    window.addEventListener("resize", function() {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    });

})();
// ===================== js shop cart========================
let p1price = document.getElementById('product1price')
let pqtn = document.getElementById('product-qtn')
let pqtn2 = document.getElementById('product-qtn2')
let total = document.getElementById('total')
let part1 = document.getElementById('part1')

function inc() {
    pqtn.innerHTML = +pqtn.innerHTML + 1
    pqtn2.innerHTML = +pqtn2.innerHTML + 1
    p1price.innerHTML = +p1price.innerHTML + 250;
    total.innerHTML = +total.innerHTML + 250
}

function dec() {
    if (pqtn.innerHTML == 0) {
        pqtn.innerHTML = pqtn.innerHTML
        pqtn2.innerHTML = pqtn2.innerHTML
        total.innerHTML = +total.innerHTML
        p1price.innerHTML = p1price.innerHTML
    } else {
        pqtn.innerHTML = +pqtn.innerHTML - 1
        pqtn2.innerHTML = +pqtn2.innerHTML - 1
        total.innerHTML = +total.innerHTML - 250
        p1price.innerHTML = +p1price.innerHTML - 250
    }

}
// ====================== js btn to top==================
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300)
            $('i').css({
                opacity: '1',
                'pointer-events': 'auto'
            });
        else {
            $('i').css({
                opacity: '0',
                'pointer-events': 'none'
            });
        }
    });
    $('i').click(function() {
        $('html').animate({ scrollTop: 0 }, 500);
    });
});