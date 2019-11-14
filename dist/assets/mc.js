define(()=>{
	function show(){
        //轮播图
    
    
    $(".menu-select-btn").children("li").hover(function(){
        $(".menu-content-wrap").css({
            display:"block"
        })
        // console.log($(this).index())
        $(".menu-content-wrap").children("div").
        eq($(this).index()).css({
            display:"block"
        }).siblings().css({
            display:"none"
        })
        $(".menu-content-wrap").hover(()=>{
            $(".menu-content-wrap").css({
                display:"block"
            })
        },()=>{
            $(".menu-content-wrap").css({
                display:"none"
            })
        })
    },()=>{
        $(".menu-content-wrap").css({
            display:"none"
        })
    })

    //轮播图
	}	
	return {
		show:show
	}
})