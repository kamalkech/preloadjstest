$( document ).ready(function() {

    /*
    // Make canvas responsive
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
    */

    // Modal vex
    vex.defaultOptions.className = 'vex-theme-os';
    vex.open({
        content: $('#gallery'),
        afterOpen: function($vexContent) {
           // return $vexContent.append($el);
        },
        afterClose: function() {
            return console.log('vexClose');
        }
    });

});
