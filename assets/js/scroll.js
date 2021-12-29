(function($) {
    console.log('logs immediately');
    initImgState();
    t();
  })(jQuery);


function initImgState()
{
    var jsi1 = document.querySelector("#js-st-img1"),
        jsi2 = document.querySelector("#js-st-img2"),
        jsi3 = document.querySelector("#js-st-img3");

    jsi1.style.setProperty("z-index", 1);
    jsi1.style.setProperty("opacity", 0);
    jsi1.style.setProperty("visibility", "hidden");

    jsi2.style.setProperty("z-index", 1);
    jsi2.style.setProperty("opacity", 0);
    jsi2.style.setProperty("visibility", "hidden");

    jsi3.style.setProperty("z-index", 1);
    jsi3.style.setProperty("opacity", 0);
    jsi3.style.setProperty("visibility", "hidden");
}

function t() {
    var t = document.querySelector(".js-st-fixed-content")
      , e = window.innerHeight
      , r = t.offsetHeight
      , i = e / 2 - r / 2;
    
    console.log("inner:",e, ", centerPos:",i, "offsetHeight:",r);

    var jsi1 = document.querySelector("#js-st-img1"),
        jsi1Offset = document.querySelector(".serviceListScrollY1").offsetTop,
        js1ClientHeight = document.querySelector(".serviceListScrollY1").offsetHeight,
        jsi2 = document.querySelector("#js-st-img2"),
        jsi2Offset = document.querySelector(".serviceListScrollY2").offsetTop,
        js2ClientHeight = document.querySelector(".serviceListScrollY2").offsetHeight,
        jsi3 = document.querySelector("#js-st-img3"),
        jsi3Offset = document.querySelector(".serviceListScrollY3").offsetTop,
        js3ClientHeight = document.querySelector(".serviceListScrollY3").offsetHeight;

    console.log("scrollTop:", jsi2.scrollTop, "scrollY", scrollY);
    console.log("scrollY:",scrollY, "offset1:",jsi1Offset, " offset2:", jsi2Offset, "offset3:", jsi3Offset);
    console.log("client1:",js1ClientHeight,"client2:",js2ClientHeight,"client3:",js3ClientHeight);
    console.log("-------------------")
    if(scrollY < jsi1Offset-(jsi1Offset/3))
    {
        jsi1.style.setProperty("z-index", 1);
        jsi1.style.setProperty("opacity", 0);
        jsi1.style.setProperty("visibility", "hidden");

        jsi2.style.setProperty("z-index", 1);
        jsi2.style.setProperty("opacity", 0);
        jsi2.style.setProperty("visibility", "hidden");

        jsi3.style.setProperty("z-index", 1);
        jsi3.style.setProperty("opacity", 0);
        jsi3.style.setProperty("visibility", "hidden");
    }
    else if(scrollY < jsi1Offset + js1ClientHeight)
    {
        console.log("scroll:", )
        jsi1.style.setProperty("z-index", -1);
        jsi1.style.setProperty("opacity", 1);
        jsi1.style.setProperty("visibility", "inherit");

        jsi2.style.setProperty("z-index", 1);
        jsi2.style.setProperty("opacity", 0);
        jsi2.style.setProperty("visibility", "hidden");

        jsi3.style.setProperty("z-index", 1);
        jsi3.style.setProperty("opacity", 0);
        jsi3.style.setProperty("visibility", "hidden");
    }
    else if(  scrollY < js2ClientHeight + jsi2Offset) 
    {
        jsi1.style.setProperty("z-index", 1);
        jsi2.style.setProperty("z-index", -1);
        var opacity_val_up = 0;
        var opactity_val_down = 1;
        for(var i =0; i<10000; i++){
            opacity_val_up += 0.0001;
            opactity_val_down -= 0.0001;
            jsi1.style.setProperty("opacity", opacity_val_up);
            jsi2.style.setProperty("opacity", 1);
        }
        jsi1.style.setProperty("visibility", "hidden");
        jsi2.style.setProperty("visibility", "inherit");

        jsi3.style.setProperty("z-index", 1);
        jsi3.style.setProperty("opacity", 0);
        jsi3.style.setProperty("visibility", "hidden");
    }
    else if( scrollY <js3ClientHeight + jsi3Offset)
    {
        jsi2.style.setProperty("z-index", 1);
        jsi3.style.setProperty("z-index", -1);
        var opacity_val_up = 0;
        var opactity_val_down = 1;
        for(var i =0; i<10000; i++){
            opacity_val_up += 0.0001;
            opactity_val_down -= 0.0001;
            jsi2.style.setProperty("opacity", opacity_val_up);
            jsi3.style.setProperty("opacity", 1);
        }
        jsi2.style.setProperty("visibility", "hidden");
        jsi3.style.setProperty("visibility", "inherit");

        jsi1.style.setProperty("z-index", 1);
        jsi1.style.setProperty("opacity", 0);
        jsi1.style.setProperty("visibility", "hidden");
    }
/*
    if( scrollY > jsi2Offset - space1_2 && scrollY < jsi3Offset - space2_3)
    {
        jsi2.style.setProperty("z-index", -1);
        jsi2.style.setProperty("opacity", 1);
        jsi2.style.setProperty("visibility", "inherit");
    }
    else{
        jsi2.style.setProperty("z-index", 1);
        jsi2.style.setProperty("opacity", 0);
        jsi2.style.setProperty("visibility", "hidden");
    }

    if( scrollY > jsi3Offset - space1_2 && scrollY < jsi3Offset + jsi3.offsetHeight)
    {
        jsi3.style.setProperty("z-index", -1);
        jsi3.style.setProperty("opacity", 1);
        jsi3.style.setProperty("visibility", "inherit");
    }
    else{
        jsi3.style.setProperty("z-index", 1);
        jsi3.style.setProperty("opacity", 0);
        jsi3.style.setProperty("visibility", "hidden");
    }
    */

    
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    t();
    //console.log("scroll:",scroll);
    // Do something
});