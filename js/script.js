function darkMode(){
    const imgdark=document.getElementById('img-dark');
    imgdark.classList.add('active');

    const imglight=document.getElementById('img-light');
    imglight.classList.remove('active');

    const bodyelement=document.getElementById('body');
    bodyelement.classList.add('theme-dark');
    const bodylelement=document.getElementById('body');
    bodylelement.classList.remove('theme-light');

}
function lightMode(){
    const imglight=document.getElementById('img-light');
    imglight.classList.add('active');

    const imgdark=document.getElementById('img-dark');
    imgdark.classList.remove('active');

    const bodylelement=document.getElementById('body');
    bodylelement.classList.add('theme-light');
    const bodyelement=document.getElementById('body');
    bodyelement.classList.remove('theme-dark');
    
}
function  changeimg(num){
    const mainimg=document.getElementById('main-prodimg');
    if(num==1){
        mainimg.src="./images/cow2.jpg";

    }
    else if(num==2){
        mainimg.src="./images/cow1.jpg";
    }
    else if(num==3){
        mainimg.src="./images/milk1.jpg";
    }
    else if(num==4){
        mainimg.src="./images/c3.jpg";
    }

}