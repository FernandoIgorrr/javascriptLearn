function jqdebug(msg){
    var log = $("#debuglog");
    if(log.length == 0){
        log = $("<div id='debuglog'><h1>Debug LOg</h1></div>");
        log.addClass("pink-name");
        $("#qq").append(log);
    }
    log.append($("<pre/>").text(msg));
}

function jqbutton(element){
    var log = element;
    var button = $("<button/>");
    button.attr("id","butao");
    if(log.length == 0 || log.css("display") == "none"){
        button.text("SHOW");
        button.click(function(){
            element.show();
            button.remove();
            jqbutton(element);
        });
        
    }
    else{
        button.text("HIDE");
        button.click(function(){
            element.hide();
            button.remove();
            jqbutton(element);
        });
    }
    $("#qq").append(button);
}