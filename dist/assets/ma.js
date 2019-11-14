define(()=>{

	function show(){
		$(document).on("scroll",function(){
            if($(document).scrollTop()>300){
                $(".lc-top").css({
                    display:"block",
                })
            }else{
                $(".lc-top").css({
                    display:"none",
                })
            }
        })
	}
	
	return {
		show:show
	}
})
