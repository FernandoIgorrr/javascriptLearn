function moveon(){
    var answer = confirm("Ready to move on?");
    if(answer){
        //window.location = "https://google.com";
    }
    document.getElementById("text").innerHTML = answer;
   // console.log(answer);
}

function debug(msg){
    var log     = document.getElementById("debuglog");
    if(!log){
        log     = document.createElement("div");
       // console.log(log);
        log.id  =   "debuglog";
        log.className = "pink-name";

        log.innerHTML   = "<h1>Debug log</h1>"
        document.getElementById("qq").appendChild(log);
    }

    var pre     = document.createElement("pre");
    var text    = document.createTextNode(msg);
    var h2      = document.createElement("h2");

    pre.appendChild(h2);
    h2.appendChild(text);
    
    log.appendChild(pre);
}

function hide(e, reflow){
   // console.log(reflow);
    if(reflow){
        e.style.display = "none";
    }
    else{
        e.style.visibility = "hidden";
    }
}

function show(e, reflow){
    if(reflow){
        e.style.display = "inline";
    }
    else{
        e.style.visibility = "visible";
    }
}

function paintBlue(e){
    if(!e.className){
        e.className = "background-blue";
    }
    else{
        e.className += " background-blue";
    }
}

function myButton(e, reflow){
    if(reflow){
        var button  = document.createElement("button");
        button.id   = "button";
        button.onclick      = () => {
            hide(e,true);
            button.remove();
            myButton(e,false);
        };
        button.textContent  = "HIDE";
    }
    else{
        var button  = document.createElement("button");
        button.id   = "button";
        button.onclick      = () => {
            e.style.display = "block";
            show(e,true);
            button.remove();
            myButton(e,true);
        };
        button.textContent  = "SHOW";
    }
    document.getElementById("qq").appendChild(button);
}

function hide2(event) { event.target.style.visibility = "hidden"; }



function imgArray(){
    var images = document.getElementsByTagName("img");

    for(i = 0;i < images.length;i++){
        console.log(`-------${i}----------`);
        var image   = images[i];
        if(image.addEventListener){
            image.addEventListener("click", hide2, false);
        }
    }
}