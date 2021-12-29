/*------------------------------*/

const app_ind = Vue.createApp({
    data(){
        return{

        }
    },
    methods: {
        toggleShowProduct(sectionId) {
            const $navigationLinks = $(".s-header__nav li a");
            $navigationLinks.parent().removeClass("current");
            let $activeLink = $('.s-header__nav li a[href="#' + sectionId + '"]');
            $activeLink.parent().addClass("current");
            console.log("--------------------sectionID-----------",sectionId);
        }
    },
    created() {
        
    },
    mounted() {
        
        
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
                console.log("$navigationLinks:", $navigationLinks);
                $activeLink.parent().addClass("current");

                if(this.element.id.includes("solutions1") || this.element.id.includes("solutions2") || this.element.id.includes("solutions3") || this.element.id.includes("solutions4"))   {
                
                    $('.s-header__nav li a[href="#' + $('section#' + "solutions").attr("id") + '"]').parent().addClass("current");
                
                }
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
        

    },
    computed: {

    }
})
app_ind.mount('#app_ind')