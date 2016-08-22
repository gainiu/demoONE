/**
 * Created by Administrator on 2016/8/22 0022.
 */
window.onload=function(){
    var container=document.getElementById("container");
    var list =document.getElementById("list");
    var buttons=document.getElementById("buttons").getElementsByTagName("span");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");


    next.onclick=function(){
        list.style.left=list.offsetLeft-400+"px";
    }
};

