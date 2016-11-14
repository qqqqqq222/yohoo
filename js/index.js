/**
 * Created by lenovo on 2016/11/7.
 */
$(function(){
    var wrap1=document.getElementById("wrap1");
    var inner1=document.getElementById("inner1");
    var spanList1=document.getElementById("inner1").getElementsByTagName("img");
    var time1;
    var index1=5;
    var Distance1=wrap1.offsetHeight;
    function AutoGo1(){
        var start=inner1.offsetTop;
        var end=index1*Distance1*(-1);
        var change=end-start;
        var timer;
        var t=0;
        var maxT=20;
        timer=setInterval(function(){
            t++;
            if(t>=maxT){
                clearInterval(timer);
                clickFlag=true;
            }
            inner1.style.top=change/maxT*t+start+"px";
            if(index1==0&&t>=maxT){
                inner1.style.top=0;
                index1=4;
            }
        },17);
    }

    time1=setInterval(forward1,1000);
    function forward1(){
        index1--;
        if(index1==0){
            index1=4;
        }
        AutoGo1();
    }
    function backward1(){
        index1--;
        //当图片下标到第一张让它返回到倒数第二张，
        //left值要变到最后一张才不影响过渡效果
        if(index1=1){
            index1=spanList1.length-1;
            inner1.style.top=(index1)*Distance1*(-1)+"px";
        }
        AutoGo1();
    }
})