/**
 * Created by Administrator on 2016/8/22 0022.
 */
window.onload=function(){
    var container=document.getElementById("container");
    var list =document.getElementById("list");
    var buttons=document.getElementById("buttons").getElementsByTagName("span");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var animated=false;
    var len=3;
    var time;
    var interval = 3000;
    /*   next.onclick=function(){
     list.style.left=list.offsetLeft-400+"px";
     };
     prev.onclick=function(){
     list.style.left=list.offsetLeft+400+"px";
     };����һ*/
    var index=1;

    function showButton(){
        for(i=0;i<buttons.length;i++){
            if(buttons[i].className=="on"){
                buttons[i].className="";
            }
        }
        buttons[index-1].className="on";
    }
    function animate(offset){
        if (offset == 0) {
            return;
        }
        animated=true;
        var newLeft=list.offsetLeft+offset;
        var time=500;//λ����ʱ��
        var interval=10;//λ��ʱ����
        var speed=offset/(time/interval);//ÿ��λ����

        function go(){
            if( (speed<0&&list.offsetLeft>newLeft)||(speed>0&&list.offsetLeft<newLeft) ){
                list.style.left=list.offsetLeft+speed+"px";
                setTimeout(go,interval);
            }
            else{
                list.style.left=newLeft+"px";
                if(newLeft>-400){
                    list.style.left=-400*len+"px";
                }
                if(newLeft<-400*len){
                    list.style.left=-400+"px";
                }
                animated=false;
            }
        }
        go();
    }
    next.onclick=function(){
        if (animated) {
            return;
        }
        if(index==3){
            index=1;
        }else{
            index+=1;
        }
        showButton();
        animate(-400);
    };
    prev.onclick=function(){
        if (animated) {
            return;
        }
        if(index==1){
            index=3;
        }else{
            index-=1;
        }
        showButton();
        animate(400);
    };
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick=function(){
            if (animated) {
                return;
            }
            if(this.className=="on"){
                return;
            }
            var myIndex=parseInt(this.getAttribute("index"));
            var offset=-400*(myIndex-index);

            animate(offset);
            index=myIndex;
            showButton();
        }
    }
    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, interval);
    }

    play();
    /*next.addEventListener("click",function(){
     list.style.left=list.offsetLeft-400+"px";},false);*/
};
