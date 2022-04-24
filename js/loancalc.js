$(function(){
    console.log("testando");
    $("#button").on("click",function () {
        let loan        = parseInt($("#loan").val());
        let interest    = parseInt($("#annual-interest").val());
        let years       = parseInt($("#years").val());
        let calc        = loan*((interest*years)/100 +1);
        console.log(calc);

        //$("#loan-val1").text($("#loan").val());
        //$("#loan-val2").text($("#annual-interest").val());
        //$("#loan-val3").text($("#years").val());
        $("#loan-val1").text(calc);
    });
});