;(function($){
    "use strict";
    $.fn.extend({
        banner:function(options){
            this.obj = {};
            var that = this.obj;

            that.imgs = options.imgs;
            that.list = options.list === false ? false : true;
            that.autoplay = options.list === false ? false : true;
            that.delayTime = options.delayTime || 3000;
            that.moveTime = options.moveTime || 200;
            
            that.index = 0;
            that.iprev = that.imgs.length-1;

            if(options.left!=undefined&&options.left.length>0 && options.right!=undefined&&options.right.length>0){
                options.left.click(btnLeft);
                options.right.click(btnRight);
            }
            function btnLeft(){
                if(that.index === 0){
                    that.index = that.imgs.length-1;
                    that.iprev = 0;
                }else{
                    that.index--;
                    that.iprev = that.index+1;
                }
                move(-1);
            }
            function btnRight(){
                if(that.index === that.imgs.length-1){
                    that.index = 0;
                    that.iprev = that.imgs.length-1;
                }else{
                    that.index++;
                    that.iprev = that.index-1;
                }
                move(1)
            }
            function move(t){
                that.imgs.eq(that.index).css({left:that.imgs.eq(0).width()*t})
                .stop().animate({left:0});
                that.imgs.eq(that.iprev).css({left:0})
                .stop().animate({left:-that.imgs.eq(0).width()*t});


                if(that.list){
                    ul.children("li").css({
                        background:"#949291"
                    }).eq(that.index).css({
                        background:"#2884c7"
                    })
                }
            }


            //是否有小圆点
            if(that.list){
                var str = "";
                for(var i=0;i<options.imgs.length;i++){
                    str += `<li></li>`;
                }
                var ul = $("<ul>").html(str);
                this.append(ul);
                ul.css({
                    width:"100%",
                    height:30,
                    display:"flex",
                    justifyContent:"center",
                    position:"absolute",
                    left:0,
                    bottom:-15,
                    listStyle:"none",
                    margin:0,
                    padding:0,
                    textAlign:"center",
                    lineHeight:"30px"
                }).children("li").css({
                    width:45,
                    height:5,
                    // borderRadius:"50%",
                    background:"#949291",
                    margin:"0 10px",

                    cursor:"pointer"
                }).eq(that.index).css({
                    background:"#2884c7"
                });

                //给li绑定事件
                ul.children("li").click(function(){
                    //点击时，通过点击的索引和当前索引比较大小，判断移动方向
                    if($(this).index()>that.index){
                        //图片左移
                        that.listMove($(this).index(),1);
                    }else if($(this).index()<that.index){
                        //图片右移
                        that.listMove($(this).index(),-1);
                    }
                    //点击之后设置li的当前项
                    $(this).css({
                        background:"#2884c7"
                    }).siblings().css({
                        background:"#949291"
                    })

                    that.index = $(this).index();
                })

                //li
                that.listMove = function(iNow,t){
                    options.imgs.eq(that.index).css({
                        left:0
                    }).stop().animate({
                        left:-options.imgs.eq(0).width()*t
                    })
                    options.imgs.eq(iNow).css({
                        left:options.imgs.eq(0).width() * t
                    }).stop().animate({
                        left:0
                    })
                }
            }

            //判断是否需要自动轮播
            
            if(that.autoplay){
                that.t = setInterval(()=>{
                    btnRight();
                },that.delayTime);

                this.hover(function(){
                    $(".btns").css({
                        display:"block"
                    })
                    clearInterval(that.t);
                },function(){
                    $(".btns").css({
                        display:"none"
                    })
                    that.t = setInterval(()=>{
                        btnRight()
                    },that.delayTime);
                })
            }
        }
    })
})(jQuery);