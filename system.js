
var box1= document.querySelector('.inbox-profile-1');
var box2= document.querySelector('.inbox-profile-2');
var box3= document.querySelector('.inbox-profile-3');
var slide= document.querySelector('inbox-profile-1');
var slidebox= ['box1','box2','box3'];
var x= 1;
function nextbutton(){
    x++;
    return div_return();
}
function previousbutton(){
    x--;
    if(x==0){
        x=3;
    }else if(x==-1){
        x=2;
    }
    return div_return();
}
function div_return(){
    if(x==1){
        box1.style.display = 'block';
        box2.style.display = 'none';
        box3.style.display = 'none';
    }else if(x==2){
        box1.style.display = 'none';
        box2.style.display = 'block';
        box3.style.display = 'none';
    }else if(x==3){
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'block';
        x=0;
    }
}
document.getElementById('object-box-hover').addEventListener("mouseover",function(){
    document.querySelector('.hover-notif').style.display = 'none';
    document.querySelector('.hover-notif-2').style.display = 'block';
})
document.getElementById('h1-hover-box').addEventListener("mouseover",function(){
    document.querySelector('.hover-notif-2').style.display = 'none';
    document.querySelector('.hover-notif-3').style.display = 'block';
})
document.getElementById('ref-hover-box').addEventListener("mouseover",function(){
    document.querySelector('.hover-notif-3').style.display = 'none';
    document.querySelector('.hover-notif').style.display = 'block';
})

function btp_what(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function nexthtml(){
    window.location.href = 'ucsp-h.html';
}