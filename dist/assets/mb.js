define(()=>{
	function show(){
        $(".lc-top").on("click",function(){
            $("html").animate({
                scrollTop:0
            },500)
        })
	}	
	return {
		show:show
	}
})