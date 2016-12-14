 function paginateFresh(dataContainer,tatal,pageNum,pageSize){
    	var min=(pageNum-1)*pageSize;
    	var max=pageNum*pageSize;
    	for(var i=1;i<=tatal;i++){
    		if((i>min)&&(i<=max)){
    			$(dataContainer+" tr:nth-child("+i+")").show();
    		}
    		else{
    			$(dataContainer+" tr:nth-child("+i+")").hide();
    		}
    	}
    	$('#pageSize').val(pageSize);
    	$('#pageNum').val(pageNum);
    }
    function initPaginationBar(pagBar,dataContainer,total,pageSize1,pageNum1){
    	$('#'+pagBar).pagination({
    		total:total,
    		pageList:[10,15,20,25,30,35,40,45],
    		pageSize:pageSize1,
    		pageNumber:pageNum1,
    		onSelectPage:function(pageNumber, pageSize){
    			$(this).pagination('loading');
    			paginateFresh(dataContainer,total,pageNumber,pageSize);
    			$(this).pagination('loaded');
    		}
    	});
    }
    function addPagBar(dataContainer,barContainer,pageSize,pageNum){
    	var total=$(dataContainer+' tr').length;
    	if(total<=0){
    		$('#'+barContainer).hide();
    	}
    	else{
    		if(total<pageSize){
    		    $(dataContainer).show();
    	    }
    	    else{
    		    paginateFresh(dataContainer,total,pageNum,pageSize);
    		    $(dataContainer).show();
    	    }
    		$('#'+barContainer).html();
    	    initPaginationBar(barContainer,dataContainer,total,pageSize,pageNum);
    	    $('#'+barContainer).show();
    	}
    }
    function alertAction(){
    	if($.trim($("#alertMsg").html())!=""){
          	 if($.trim($("#alertMsg").html()).indexOf("success")!=-1){
              	 $("#msg").removeClass("alert-error");
              	 $("#msg").addClass("alert-success");
               }
          	 else{
          		 $("#msg").addClass("alert-error");
              	 $("#msg").removeClass("alert-success");
          	 }
               $("#msg").show();
           }
           else{
          	 $("#msg").hide();
           }
    }
    function addAlert(info){
    	$("#alertMsg").html(info);
    	alertAction();
    }
    function initAlert(){
    	$("#closeBut").click(function(){
            $("#msg").hide();
        });
    	alertAction();
    }
Date.prototype.format = function(format) {   
        /*  
         * eg:format="yyyy-MM-dd hh:mm:ss";       */  
        var o = {   
            "M+" : this.getMonth() + 1, // month   
            "d+" : this.getDate(), // day   
            "h+" : this.getHours(), // hour   
            "m+" : this.getMinutes(), // minute   
            "s+" : this.getSeconds(), // second   
            "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter   
            "S" : this.getMilliseconds()   
            // millisecond   
        }  ; 
        if (/(y+)/.test(format)) {   
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4  
                            - RegExp.$1.length));   
        }   
        for (var k in o) {   
           if (new RegExp("(" + k + ")").test(format)) {   
               format = format.replace(RegExp.$1, RegExp.$1.length == 1? o[k]: ("00" + o[k]).substr(("" + o[k]).length));   
            }   
        }   
        return format;   
    } ; 
$(function(){

	initAlert();
 });
