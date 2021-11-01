
var toggle = false;
function toggleMenu(){
    if(toggle){
        document.querySelector(".menu").style.transform = "translateX(-100%)";
        toggle = false;
        console.log(toggle)
    } else {
        document.querySelector(".menu").style.transform ="translateX(0%)";
        toggle = true;
        console.log(toggle)
    }
}
function Home(){
    document.querySelector(".main").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}
function About(){
    document.querySelector(".about").scrollIntoView({behavior: "smooth", block: "center", inline: "start"})
}
function Contact(){
    document.querySelector(".contact").scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
}