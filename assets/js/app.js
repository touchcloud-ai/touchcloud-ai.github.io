const app = Vue.createApp({
    data(){
        return{
            showProduct: [
                {product:"gotcha", ishow: false},
                {product:"aisense", ishow: false},
                {product:"greygoose", ishow: false},
                {product:"kekki", ishow:false},
                {product:"abaci", ishow:false},
                {product:"axis", ishow:false},
                {product:"box", ishow:false},
            ],
            toogleShowBtn: false,
        }
    },
    methods: {
        toggleShowProduct(ind) {
            toogleShowBtn = true
            console.log(ind)
            this.showProduct[ind].ishow = true
            for(var i=0; i< this.showProduct.length;i++)
            {
                if(i != ind)
                {
                    this.showProduct[i].ishow = false
                }
            }
            console.log("ind:",ind,"-",this.showProduct[ind].product)
            //swiper.slideTo(ind); 
            //console.log("swiper ind:", swiper.activeIndex)
            toogleShowBtn = false
        },
        initialProductStatus(){
            for(var i=0; i< this.showProduct.length;i++)
            {
                this.showProduct[i].ishow = false;
            }
        },

        
    },
    created() {
        
    },
    mounted() {
        /* New Swiper - carousel
        * ------------------------------------------------------ */
    var swiper2 = new Swiper('.swiper-container', {
        loop: false,
        effect: 'coverflow',
        grabCursor: true,
        initialSlide:3,
        centeredSlides: true,
        allowTouchMove: false,
        slideToClickedSlide: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows : false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable :true,
            //type: 'fraction',
            //type : 'progressbar',
            //type : 'custom',
        },
        });
        
        /* Highlight the current section in the navigation bar
        * ------------------------------------------------------ */
        const $sections = $(".target-section");
        const $navigationLinks = $(".s-header__nav li a");
        $sections.waypoint( {

            handler: function(direction) {

                let $activeSection;

                $activeSection = $('section#' + this.element.id);
                console.log("element:", this.element.id);
                if (direction === "up") $activeSection = $activeSection.prevAll(".target-section").first();

                let $activeLink = $('.s-header__nav li a[href="#' + $activeSection.attr("id") + '"]');

                $navigationLinks.parent().removeClass("current");
                $activeLink.parent().addClass("current");

            }
        });

        /* Mobile Menu
        * ---------------------------------------------------- */ 
        const $toggleButton = $('.s-header__menu-toggle');
        const $nav = $('.s-header__nav');


        $toggleButton.on('click', function(event){
            event.preventDefault();
            $toggleButton.toggleClass('is-clicked');
            $nav.slideToggle();
        });

        // add mobile class
        if ($toggleButton.is(':visible')) $nav.addClass('mobile');

        $(window).resize(function() {
            if ($toggleButton.is(':visible')) $nav.addClass('mobile');
            else $nav.removeClass('mobile');
        });

        $('.s-header__nav ul').find('a').on("click", function() {
            if ($nav.hasClass('mobile')) {
                $toggleButton.trigger('click');
            }
        });



    },
    updated(){
        var swiper = new Swiper(".mySwiper", {
            grabCursor: false,
            effect: "creative",
            creativeEffect: {
            prev: {
                shadow: false,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });

        var swiper_wordCard = new Swiper(".wordCard", {
            grabCursor: false,
            effect: "creative",
            creativeEffect: {
            prev: {
                shadow: false,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
              },
            
          });

        

    },
    computed: {

    }
})
app.mount('#app')

