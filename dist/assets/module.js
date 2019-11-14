//路径的配置
require.config({
    //	基目录的路径
        baseUrl:"../assets/",
    //	小模块的路径
        paths:{
    //		名字：要引入的模块的路径
            qa:"ma",
            qb:"mb",
            qc:"mc",
            jq:"./jquery"
        }
    })
    
    
    require(["qa","qb","qc","jq"],(a,b,c,_)=>{     
        a.show();
        b.show();
        c.show();
    })