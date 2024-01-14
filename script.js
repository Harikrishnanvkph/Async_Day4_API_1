var current = "";
var currentbtn = ""

//This function displays HTML element as per input id
function display(id){
    var method = document.querySelector(".method");
    if(current === id+""){
        return;
    }else{
        method.innerHTML = "";
    }
    var tim = document.querySelectorAll(".anch");
    for(let a of tim){
        if(a.id === id){
            current = a.id;
            document.getElementById(id).style = "background-color:#fb9f9f;"
            method.append(dropdownStatus(a.id));
            continue;
        }
        document.getElementById(a.id).style = "background-color:transparent;"
    }
}

//This function returns a div element as per input id
function dropdownStatus(id){
    var div = document.createElement("div");
    if(id === "RangeEntry"){
        div.innerHTML = `
        <form action="#" class="AllInAll">
            <label for="imageMover">Choose Options</label><br>
            <div>
                <input type="text" id="imageMover" placeholder="type error code here">
                <input type="button" value="Run image" onclick="beepimage()">
            </div>
            <div class="innerDiv">
            <b>
                <p>100 - 103         => Information Responses</p>
                <p>200 - 208 and 226 => Successful Responses</p>
                <p>(300 - 305),307,308         => Redirection Responses</p>
                <p>(400 - 418),(420 - 429),431,444,450,451,497,498,499 => Client Responses</p>
                <p>(500 - 504),(506-511),(521 - 523),525,530,599     => Server Responses</p><b>
                <br>
                <p>Note: If the Inputed value is incorrect will display 404 error code</p>
            </div>
        </form>`
    }else{
        div.className = "row";
        div.append(
            buttonCreate(100),buttonCreate(101),buttonCreate(102),buttonCreate(103),buttonCreate(200),buttonCreate(201),
            buttonCreate(202),buttonCreate(203),buttonCreate(204),buttonCreate(205),buttonCreate(206),buttonCreate(207),
            buttonCreate(208),buttonCreate(226),buttonCreate(300),buttonCreate(301),buttonCreate(302),buttonCreate(303),
            buttonCreate(304),buttonCreate(305),buttonCreate(307),buttonCreate(308),buttonCreate(400),
            buttonCreate(401),buttonCreate(402),buttonCreate(403),buttonCreate(404),buttonCreate(405),buttonCreate(406),
            buttonCreate(407),buttonCreate(408),buttonCreate(409),buttonCreate(410),buttonCreate(411),buttonCreate(412),
            buttonCreate(413),buttonCreate(414),buttonCreate(415),buttonCreate(416),buttonCreate(417),buttonCreate(418),
            buttonCreate(420),buttonCreate(421),buttonCreate(422),buttonCreate(423),buttonCreate(424),
            buttonCreate(425),buttonCreate(426),buttonCreate(427),buttonCreate(428),buttonCreate(429),buttonCreate(431),
            buttonCreate(444),buttonCreate(450),buttonCreate(451),buttonCreate(497),buttonCreate(498),buttonCreate(499),
            buttonCreate(500),buttonCreate(501),buttonCreate(502),buttonCreate(503),buttonCreate(504),buttonCreate(506),
            buttonCreate(507),buttonCreate(508),buttonCreate(509),buttonCreate(510),buttonCreate(511),buttonCreate(521),
            buttonCreate(522),buttonCreate(523),buttonCreate(525),buttonCreate(530),buttonCreate(599)
        )
    }
    return div;
}


//This function will create a button and will return it
function buttonCreate(val){
    var buttonDiv = document.createElement("div");
    buttonDiv.className = "col-md-2";
    var button = document.createElement("button");
    button.innerText = val;
    button.className = "btn-primary";
    button.setAttribute("value", val);
    button.setAttribute("type", "button");
    button.setAttribute("onclick", `showimage(${val})`);
    buttonDiv.append(button);
    return buttonDiv;
}

//This function display the image to .image column as per the input value {val}
function showimage(val){
    console.log(val);
    var method = document.querySelector(".image > img");
    method.setAttribute("src", `https://http.cat/${val}`);
}

//This function takes the text from RangeEntry textbox and calls showimage
function beepimage(){
    var txt = document.querySelector("#imageMover");
    var mlm = txt.value;
    showimage(mlm)
}
