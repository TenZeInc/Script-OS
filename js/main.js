﻿function dragWindow(id) {
    var elmnt = document.getElementById(id);
    if (id === null) {
        console.warn('Element does not exist, id="' + id + '"');
        return;
    }

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt + "header")) {
        document.getElementById(elmnt + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragWindow("mydiv");
dragWindow("settings");
dragWindow("backgroundsettings");
dragWindow("usersettings");
dragWindow("browser");
dragWindow("filesapp");
dragWindow("apps");

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function newWindow(){
    var window = document.createElement('div');
    document.body.appendChild(window);
    var windowHeader = document.createElement('div');
    window.appendChild(windowHeader);
    window.id = 'testWindow';
    windowHeader.innerHTML = 'TESTING';
}
