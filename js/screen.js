//var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function getcell(){
    var tbl = document.getElementById("table");

    if (tbl != null) {

        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++)
                tbl.rows[i].cells[j].onclick = function () { getval(this); }
        }
    }
    function getval(cel) {
        
        sendData("V0",cel.innerHTML);
        //console.log(cel.innerHTML);

    }
}