let mode=document.getElementById("darkmode");
let img=document.getElementById("darkmodeimg");
let sideBar=document.getElementById("sideBar");
let content=document.getElementById("mainContent");
let query=document.querySelector("body");
let topbarimg=document.getElementsByClassName("topbarimg");
let one=document.getElementById("one");
function turnOnDark(){
    img.src="img/sun.png";
    mode.style.backgroundColor="black";
    sideBar.style.color="rgb(199, 199, 199)";
    sideBar.style.backgroundColor="#d15618";
    query.style.backgroundColor="black";
    query.style.color="white";
    content.style.backgroundColor="black";
    content.style.color="white";
    one.style.backgroundColor="black";
    one.style.color="white";
    topbarimg.style.color="white";
    document.getElementsByClassName("contrib-number").style.color="white";
}
document.getElementById("darkmode").addEventListener("click",function(){
    
    // let java1=document.getElementById("javadark1");
    // let java=document.getElementById("javadark");
    if(mode.innerHTML=='<img id="darkmodeimg" src="img/moon.png" alt="">'){
        img.src="img/sun.png";
        mode.style.backgroundColor="black";
        sideBar.style.color="rgb(199, 199, 199)";
        sideBar.style.backgroundColor="#d15618";
        query.style.backgroundColor="black";
        query.style.color="white";
        content.style.backgroundColor="black";
        content.style.color="white";
        one.style.backgroundColor="black";
        one.style.color="white";
        topbarimg.style.color="white";
    }else{
        img.src="img/moon.png";
        mode.style.backgroundColor="white";
        // mode.style.backgroundColor="black";
        sideBar.style.color="black";
        sideBar.style.backgroundColor="rgb(199, 199, 199)";
        query.style.color="black";
        query.style.backgroundColor="white";
        content.style.backgroundColor="white";
        content.style.color="black";
        one.style.backgroundColor="white";
        one.style.color="black";
    }
})
function goToGit(){
    window.open("https://github.com/pandeyneha0123","_blank");
}
function goToIn(){
    window.open("https://www.linkedin.com/in/neha-pandey-b7b687208/","_blank");
}
function showHome(){
    document.getElementById("content").style.display="block";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("contact_").style.display="none";
    document.getElementById("skills_").style.display="none";
    document.getElementById("projects_").style.display="none";
}
function showAbout(){
    document.getElementById("content").style.display="none";
    document.getElementById("aboutMe_").style.display="block";
    document.getElementById("contact_").style.display="none";
    document.getElementById("skills_").style.display="none";
    document.getElementById("projects_").style.display="none";
}
if(screen.width< 700){
    document.getElementById("content").style.display="block";
    document.getElementById("contact_").style.display="none";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("skills_").style.display="none";
    document.getElementById("projects_").style.display="none";

}
function showSkills(){
    document.getElementById("skills_").style.display="block";
    document.getElementById("contact_").style.display="none";
    document.getElementById("content").style.display="none";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("projects_").style.display="none";
}
function showProjects(){
    document.getElementById("skills_").style.display="none";
    document.getElementById("contact_").style.display="none";
    document.getElementById("content").style.display="none";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("projects_").style.display="block";
    document.getElementById("projects_").style.width="80vw";
}
function showContact(){
    document.getElementById("skills_").style.display="none";
    document.getElementById("content").style.display="none";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("projects_").style.display="none";
    document.getElementById("contact_").style.display="block";
    document.getElementById("contact_").style.width="80vw";
}
function goToMail(){
    window.open("mailto:sumitpanchal9034@gamil.com");
}
function goToResume(){
    // window.open("https://drive.google.com/file/d/1uXhdN0aRukVBCJm5lKZ0P1xO6aOLm_Ob/view?usp=sharing","_blank");
    window.open("https://drive.google.com/file/d/1_yw_dU3am4WPoBIHMdhLtTmAkClrHAwb/view?usp=share_link","_blank");
}
function goToWhatsapp(){
    window.open("https://wa.me/918168471581?text=Hello!%20Can%20you%20tell%20me%20more%20about%20you?");
}

if(screen.width>700){
    document.getElementById("mobile_navbar").style.display= "none";
}

let privScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollpos = window.pageYOffset;
        if(screen.width< 700){
            document.getElementById("mobile_navbar").style.display= "flex";
        }
        if (currentScrollpos > privScrollpos) {
            document.getElementById("mobile_navbar").style.top = "-10px";
            document.getElementById("mobile_navbar").style.left = "-10px";
        } else {
            document.getElementById("mobile_navbar").style.top = "-150px";
        }
        privScrollpos = currentScrollpos;
    }

    let dropDownMenuOpen=document.getElementById("dropDownMenuOpen");
    dropDownMenuOpen.addEventListener("click",function(){
        let menu=document.getElementById("dropDownMenu");
        menu.style.left="0px";
    })
    let dropDownMenuClose=document.getElementById("dropDownMenuClose");
    dropDownMenuClose.addEventListener("click",function(){
        let menu=document.getElementById("dropDownMenu");
        menu.style.left="-200px";
    })