;(function($){
    "use strict";

    //登录注册
    $(".headerR").find(".hr2").hover(function(){
        $(this).find("ul").css({
            display:"block"
        })
        $(this).css({
            border:"1px solid #dddddd",
            borderBottom:"none",
            background:"#ffffff"
        })
        $(this).children("a").css({
            color:"#333",
        })
    },function(){
        $(this).find("ul").css({
            display:"none"
        })
        $(this).css({
            border:"none",
            background:"#333"
        })
        $(this).children("a").css({
            color:"#fff",
        })
    })

    $(".headerR").find(".hr3").hover(function(){
        $(this).find("ul").css({
            display:"block"
        })
        $(this).css({
            border:"1px solid #dddddd",
            borderBottom:"none",
            background:"#ffffff"
        })
        $(this).children("a").css({
            color:"#333",
        })
    },function(){
        $(this).find("ul").css({
            display:"none"
        })
        $(this).css({
            border:"none",
            background:"#333"
        })
        $(this).children("a").css({
            color:"#fff",
        })
    })

    $(".headerR").find(".hr4").hover(function(){
        $(this).find(".hr4div").css({
            display:"block"
        })
        $(this).css({
            border:"1px solid #dddddd",
            borderBottom:"none",
            background:"#ffffff"
        })
        $(this).children("a").css({
            color:"#333",
        })
    },function(){
        $(this).find(".hr4div").css({
            display:"none"
        })
        $(this).css({
            border:"none",
            background:"#333"
        })
        $(this).children("a").css({
            color:"#fff",
        })
    })
    //登录注册


    //搜索框
    $("#search-ipt").focus(function(){
        $(".search-slide").css({
            display:"block"
        })
    })
    $("#search-ipt").blur(function(){
        $(".search-slide").css({
            display:"none"
        })
    })


    $(".close1").click(function(){
        $(".nav-r").css({
            display:"none"
        })
        $(".nav-cart").css({
            marginRight:0,
        })
    })
    //搜索框


    // //轮播图
    
    
    // $(".menu-select-btn").children("li").hover(function(){
    //     $(".menu-content-wrap").css({
    //         display:"block"
    //     })
    //     // console.log($(this).index())
    //     $(".menu-content-wrap").children("div").
    //     eq($(this).index()).css({
    //         display:"block"
    //     }).siblings().css({
    //         display:"none"
    //     })
    //     $(".menu-content-wrap").hover(()=>{
    //         $(".menu-content-wrap").css({
    //             display:"block"
    //         })
    //     },()=>{
    //         $(".menu-content-wrap").css({
    //             display:"none"
    //         })
    //     })
    // },()=>{
    //     $(".menu-content-wrap").css({
    //         display:"none"
    //     })
    // })

    // //轮播图


    //楼层
    $(".lc-tv").on("click",function(){
        $("html").animate({
            scrollTop:805
        },500)
    })
    $(".lc-parts").on("click",function(){
        $("html").animate({
            scrollTop:1620
        },500)
    })
    $(".lc-life").on("click",function(){
        $("html").animate({
            scrollTop:2290
        },500)
    })
    // $(".lc-top").on("click",function(){
    //     $("html").animate({
    //         scrollTop:0
    //     },500)
    // })
    // $(document).on("scroll",function(){
    //     if($(document).scrollTop()>300){
    //         $(".lc-top").css({
    //             display:"block",
    //         })
    //     }else{
    //         $(".lc-top").css({
    //             display:"none",
    //         })
    //     }
    // })
    // 楼层



    

})(jQuery);