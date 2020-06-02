'use strict';

const app = {
    rust: document.getElementById("color"),
    portrait: document.getElementById("portrait"),
    painting: document.getElementById("portrait"),
    sikkemaWip: document.getElementById("sikkemaBrothers"),
    sikkema: document.getElementById("sikkemaBrothers"),
    antelopeIslandWip: document.getElementById("antelopeIsland"),
    antelopeIsland: document.getElementById("antelopeIsland"),
    asherWip: document.getElementById("andersonBrothers"),
    andersonBrothers: document.getElementById("andersonBrothers"),
    boysHedgehogPhoto: document.getElementById("boysHedgehog"),
    boysHedgehog: document.getElementById("boysHedgehog"),
    mayaPortrait: document.getElementById("maya"),
    maya: document.getElementById("maya"),
    steveOlliePhoto: document.getElementById("steveOllieCollage"),
    steveOllieCollage: document.getElementById("steveOllieCollage"),
    westheimerGirlsWip: document.getElementById('westheimerGirls'),
    westheimerGirls: document.getElementById("westheimerGirls"),
    sofiaWip: document.getElementById("sofia"),
    sofia: document.getElementById("sofia"),
    addButton: document.getElementById("plus"),
    counter: document.getElementById("counter"),
    selfPortrait: document.getElementById("portrait")

}


app.rust.onmouseenter = function() {
    this.style.backgroundColor = "BurlyWood";
} 

app.rust.onmouseleave = function() {
    this.style.backgroundColor = "PaleVioletRed";
}

app.portrait.onmouseover = function (){
    this.style.backgroundImage = 
    "url('images/LarissaPhoto.jpeg')"
} 

app.painting.onmouseleave = function (){
    this.style.backgroundImage = 
    "url('images/portraitPainting.jpg')"
} 

app.sikkemaWip.onmouseover = function (){
    this.style.backgroundImage =
        "url('images/SikkemaBoysWIP.jpeg')"
    }

app.sikkema.onmouseleave = function (){
    this.style.backgroundImage =
    "url('images/SikkemaBrothers.jpeg')"
}

app.antelopeIslandWip.onmouseover = function () {
    this.style.backgroundImage =
    "url('images/AntelopeIslandWIP.jpeg')"
}


app.antelopeIsland.onmouseleave = function () {
    this.style.backgroundImage =
        "url('images/AntelopeIsland.jpeg')"
    }

app.asherWip.onmouseover = function () {
    this.style.backgroundImage =
    "url('images/AsherWIP.jpeg')"
}


app.andersonBrothers.onmouseleave = function () {
    this.style.backgroundImage =
    "url('images/AndersonBrothers.jpeg')"
}


app.boysHedgehogPhoto.onmouseover = function () {
    this.style.backgroundImage =
    "url('images/BoysHedgehogPhoto.png')"
}


app.boysHedgehog.onmouseleave = function () {
    this.style.backgroundImage =
    "url('images/BoysHedgehog.jpeg')"
}

app.mayaPortrait.onmouseover = function () {
    this.style.backgroundImage =
    "url('images/Maya.jpeg')"
}


app.maya.onmouseleave = function () {
    this.style.backgroundImage =
    "url('images/MayaPortrait.jpeg')"
}


app.steveOlliePhoto.onmouseover = function () {
    this.style.backgroundImage =
    "url('images/SteveOlliePhoto.jpeg')"
}


app.steveOllieCollage.onmouseleave = function () {
    this.style.backgroundImage =
    "url('images/SteveOllieCollage.jpg')"
}


app.westheimerGirlsWip.onmouseover = function () {
    this.style.backgroundImage =
    "url('images/WestheimerGirlsWIP.jpeg')"
}


app.westheimerGirls.onmouseleave = function () {
    this.style.backgroundImage =
    "url('images/WestheimerGirls.jpeg')"
}


app.sofiaWip.onmouseover = function () {
    this.style.backgroundImage =
    "url('images/SofiaWIP.jpeg')"
}


app.sofia.onmouseleave = function () {
    this.style.backgroundImage =
    "url('images/Sofia.jpeg')"
}



let mess = document.getElementById('message');
let myName = document.getElementById("fName");

function showMessage() {
    let message = "Welcome " + myName.value + "! Please enjoy my artwork.";
    mess.innerText = message;
}



function handleChange(event) {
    console.log(event.target.value)
    myName.value = event.target.value;
    showMessage();
    
}
showMessage()




let count = 0;
    app.addButton.addEventListener("click", function(){
    count++;
    app.counter.innerText = count;
}
)




function flashtext(ele,col) {
    const colorCheck = document.getElementById(ele).style.color;

      if (colorCheck === 'pink') {
        document.getElementById(ele).style.color = col;
      } else {
        document.getElementById(ele).style.color = 'pink';
      }
    }

   
    setInterval(function() {
        flashtext("list",'white');
        flashtext("list2",'white');
        flashtext("list3",'white');
        flashtext("message",'white'); 
    }, 500 )



function backgColor(element) {
    let colors =['red','orange','yellow','green','blue','purple'];
        document.getElementById(element).style.backgroundColor = colors[5];

}
    backgColor("rectangle");



let announce = document.getElementById("announcements")
const announcements =["All Artwork Original", "Commissions Available", "Pet Portraits Too!","Select Your Own Fabrics"]
function announcement (arr) {
    for (let i =0;i < announcements.length;i++){
       announce.innerHTML = announcements[i];

       setTimeout(function() {
           announce.innerHTML = announcements[0];
        },1000);

       setTimeout(function() {
            announce.innerHTML = announcements[1];
        },3000);

       setTimeout(function() {
            announce.innerHTML = announcements[2];
        },2000);
    
    }
}
if(announce.innerHTML = announcements[1]) {
    announcement(announcements)
}
    setInterval(function() {
        announcement(announcements);

    }, 3000
)

let navigation = {
    title: "Artist's Bio",
    url:'artistBio.html' ,
    
}




function portraitClick() {
    
    app.selfPortrait.addEventListener("click", function() {
         
       window.open(navigation.url)
    })
        console.log("Hello");

    }



   



