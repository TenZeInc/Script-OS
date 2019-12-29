﻿function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('datetime').innerHTML = h + ":" + m + " | " + 
    (("0"+(today.getMonth()+1)).slice(-2)) +"/"+ (("0"+today.getDate()).slice(-2)) +"/"+ (today.getFullYear());
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}

var changelog = `Script OS Changelog:
#Script OS 3.1
-Bugs fixed
-New commands added to Script AI
#Script OS 3.0.1
-Bugs fixed
-Donate Button Removed
-Terminal Removed
#Script OS 3.0
-DockZoom added
-IconZoom added
-Filesystem remade
-Websearch added
-vmOS added
-About page added to settings
-Background images will now save to localStorage
-Files will now save to localStorage
-Changelog added to About page
-Lockscreen bugs fixed
-Donate button added
-Script AI[ALPHA] added
-Browser issues fixed(websites like google.com and youtube.com now work if you install the iFrame Allow chrome extension)
#Script OS 2.9.6
-Startup screen added
#Script OS 2.9.5
-Files app redesigned
-Fixed file saving issues
-Lock screen added
#Script OS 2.9.4 
-Shortcuts added 
-Bug Fixes 
-HTML Support added 
#Script OS 2.9.3 
-Files app working in demo mode 
-Happy 1 Year of Script OS 
#Script OS 2.9.2
-HTML Editor added
-Themes color opacity increased 
-Mothers Day 
#Script OS 2.9.1
-Themes added
-Subscribe to PewDiePie button removed
-App center redesigned 
#Script OS 2.9
-DarkMode added
-Script OS Redesigned
-App system improved
-Multi app window support
-All apps redesigned`;

var savedbackground = localStorage.getItem('background');

if(savedbackground){
    document.body.style.backgroundImage = localStorage.getItem('background');
}

var codearea = document.createElement('textarea');
var filecontainer = document.createElement('div');
var filesapp = localStorage.getItem("Files");

if(filesapp){
    filecontainer.innerHTML = localStorage.getItem("Files");
}

function openFile(filesname){
    scriptApp('VisualCode');
    var filecontent = localStorage.getItem(filesname);
    codearea.value = filecontent; 
}

var apphistory = document.createElement('div');
var appthing = document.createElement('h1');
var histclosebutt = document.createElement('h1');
apphistory.id = 'apphistory';
appthing.innerHTML = "Nothing to see here...";
histclosebutt.innerHTML = "Close";
histclosebutt.onclick = function (){
    desktopbody.removeChild(apphistory);
}
apphistory.appendChild(histclosebutt);
apphistory.appendChild(appthing);


function dragWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
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

var textarea = document.createElement("textarea");
var navbar = document.createElement('div');
var desktopbody = document.getElementById('desktopbody');
var startupscreen = document.createElement('img');
startupscreen.style.width = '100%';
startupscreen.style.height = '100%';
startupscreen.src = 'images/Script-OS.gif';
var actioncenter = document.createElement('div');
actioncenter.style = 'position: absolute; width: 100%; top: 100px; animation: slidetop; animation-duration: 2s; height: 25%;';
var appcenter = document.createElement('div');

function startUp(){
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = 'black';
    desktopbody.appendChild(startupscreen);
    setTimeout(loadDesktop, 2500);
}

var websearch = document.createElement('input');
var searchbutt = document.createElement('input');
var exitbutt = document.createElement('input');
websearch.style = 'border-radius: 25px; width: 75%; height: 100px; font-size: 75px; z-index:10; left:0; top:100px; animation:slidetop; animation-duration: 2s; position:absolute; background: rgba(255,255,255,0.5); color: black;';
websearch.type = 'text';
websearch.placeholder = 'Search the web';
websearch.onchange = function() { scriptApp("Browser"); browserview.src = "https://www.bing.com/search?q=" + websearch.value; }
searchbutt.onclick = function () {scriptApp("Browser"); browserview.src = "https://www.bing.com/search?q=" + websearch.value;};
searchbutt.type = 'image';
searchbutt.src = 'https://www.tcwreckersales.com/wp-content/uploads/2017/01/search-icon-white.png';
searchbutt.className = 'appicon';
searchbutt.style = 'width:50px; height:50px; animation:slidetop; z-index:10; animation-duration: 4s; position:absolute; right:0; top: 100px;';
exitbutt.onclick = function () {websearch.value = ''; desktopbody.removeChild(websearch); desktopbody.removeChild(searchbutt); desktopbody.removeChild(exitbutt);};
exitbutt.type = 'image';
exitbutt.src = 'images/exit button.png';
exitbutt.className = 'appicon';
exitbutt.style = 'width:50px; height:50px; position:absolute; z-index:10; animation:slidetop; animation-duration: 3s; right:55px; top: 100px;';

//Desktop Loading Sequence
function loadDesktop(){
    desktopbody.removeChild(startupscreen);
    if(savedbackground){
        document.body.style.backgroundImage = localStorage.getItem('background');
    } else{
        document.body.style.backgroundImage = 'url("images/Script OS 3.0 .png")';
    }
    navbar.className = 'navbar';
    navbar.id = 'navbar';
    desktopbody.appendChild(navbar);
    document.body.style.backgroundImage = 'url';

    var actionmenuicon = document.createElement('input');
    actionmenuicon.type = 'image';
    actionmenuicon.src = 'images/Script OS logo 3.png';
    actionmenuicon.onclick = function () {desktopbody.appendChild(actioncenter); };
    actionmenuicon.title = 'ActionMenu';
    actionmenuicon.style = "width:50px; height:50px; z-index: 100; position:absolute; left:0;" ;
    navbar.appendChild(actionmenuicon);

    var searchweb = document.createElement('input');
    searchweb.type = 'image';
    searchweb.src = 'https://www.tcwreckersales.com/wp-content/uploads/2017/01/search-icon-white.png';
    searchweb.onclick = function () {desktopbody.appendChild(websearch); desktopbody.appendChild(searchbutt); desktopbody.appendChild(exitbutt);};
    searchweb.title = 'Search the Web';
    searchweb.style = "width:50px; height:50px; z-index: 100; position:absolute; right:0;";
    navbar.appendChild(searchweb);

    var appicon1 = document.createElement('input');
    appicon1.type = 'image';
    appicon1.src = 'images/Settings-icon.png';
    appicon1.className = 'appicon';
    appicon1.title = 'Settings';
    appicon1.onclick = function () { scriptApp('Settings'); };
    navbar.appendChild(appicon1);
    
    var appicon2 = document.createElement('input');
    appicon2.type = 'image';
    appicon2.src = 'images/script os S Browser icon.png';
    appicon2.className = 'appicon';
    appicon2.title = 'S Browser';
    appicon2.onclick = function () { scriptApp('Browser')}
    navbar.appendChild(appicon2);

    var appicon3 = document.createElement('input');
    appicon3.type = 'image';
    appicon3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/600px-Google_Drive_logo.png';
    appicon3.className = 'appicon';
    appicon3.title = 'Files';
    appicon3.onclick = function () { scriptApp('Files')}
    navbar.appendChild(appicon3);

    actioncenter.className = 'app';

    var app1 = document.createElement('input');
    app1.type = 'image';
    app1.src = "images/Settings-icon.png";
    app1.title = 'Settings';
    app1.onclick = function () {scriptApp('Settings');};
    app1.className = 'appchoice';
    appcenter.appendChild(app1);

    var app2 = document.createElement('input');
    app2.type = 'image';
    app2.src = "images/script os S Browser icon.png";
    app2.title = 'S Browser';
    app2.onclick = function () {scriptApp('Browser');};
    app2.className = 'appchoice';
    appcenter.appendChild(app2);

    var app3 = document.createElement('input');
    app3.type = 'image';
    app3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/600px-Google_Drive_logo.png";
    app3.title = 'Files';
    app3.onclick = function () {scriptApp('Files');};
    app3.className = 'appchoice';
    appcenter.appendChild(app3);

    var app5 = document.createElement('input');
    app5.type = 'image';
    app5.src = "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png";
    app5.title = 'Discord';
    app5.onclick = function () {scriptApp('Discord');};
    app5.className = 'appchoice';
    appcenter.appendChild(app5);

    var app6 = document.createElement('input');
    app6.type = 'image';
    app6.src = "images/VisualCode logo.png";
    app6.title = 'VisualCode';
    app6.onclick = function () {scriptApp('VisualCode');};
    app6.className = 'appchoice';
    appcenter.appendChild(app6);

    var app7 = document.createElement('input');
    app7.type = 'image';
    app7.src = "images/script os shortcuts logo.png";
    app7.title = 'Shortcuts';
    app7.onclick = function () {scriptApp('Shortcuts');};
    app7.className = 'appchoice';
    appcenter.appendChild(app7);

    var app8 = document.createElement('input');
    app8.type = 'image';
    app8.src = "images/vmOS.png";
    app8.title = 'vmOS';
    app8.onclick = function () {scriptApp('vmOS');};
    app8.className = 'appchoice';
    appcenter.appendChild(app8);

    var app10 = document.createElement('input');
    app10.type = 'image';
    app10.src = "images/ScriptAI logo.png";
    app10.title = 'ScriptAI';
    app10.onclick = function () {scriptApp('ScriptAI');};
    app10.className = 'appchoice';
    appcenter.appendChild(app10);

    var actionarea = document.createElement('div');
    actionarea.id = 'actionarea';
    actionarea.appendChild(appcenter);
    actioncenter.appendChild(actionarea);

    var closebutt = document.createElement('button');
    closebutt.innerHTML = 'Close';
    closebutt.onclick = function () { desktopbody.removeChild(actioncenter); };
    actionarea.appendChild(closebutt);

    var reloadbutt = document.createElement('button');
    reloadbutt.innerHTML = 'Reload';
    reloadbutt.onclick = function () { location.reload(); };
    actionarea.appendChild(reloadbutt);

    var signoutbutt = document.createElement('button');
    signoutbutt.innerHTML = 'Sign Out';
    signoutbutt.onclick = function () { signOut(); };
    actionarea.appendChild(signoutbutt);

    var shutdownbutt = document.createElement('button');
    shutdownbutt.innerHTML = 'Shutdown';
    actionarea.appendChild(shutdownbutt);

}

//Sign In
function signIn(){
    desktopbody.removeChild(headertext);
    desktopbody.removeChild(timetxt);
    desktopbody.removeChild(loginbar);
    desktopbody.appendChild(navbar);
    desktopbody.appendChild(conmenu1);
}

var headertext = document.createElement('h2');
var timetxt = document.createElement('h1');
var loginbar = document.createElement('div');

//Sign Out
function signOut(){
    headertext.innerHTML = 'Script OS';
    headertext.style.fontSize = '100px';
    timetxt.style.fontSize = '85px';
    loginbar.className = 'logbar';
    headertext.style.animation = 'rgb';
    headertext.style.animationDuration = '6s';
    timetxt.style.animation = 'rgb';
    timetxt.style.animationDuration = '6s';
    desktopbody.style.color = 'white';
    desktopbody.style.textAlign = 'center';
    loginbar.onclick = function () { signIn(); };
    desktopbody.innerHTML = '';
    desktopbody.appendChild(headertext);
    desktopbody.appendChild(timetxt);
    desktopbody.appendChild(loginbar);
    startLockTime();
    function startLockTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        m = checkLockTime(m);
        timetxt.innerHTML = h + ":" + m;
        var t = setTimeout(startLockTime, 500);
    }

    function checkLockTime(i) {
        if (i < 10) { i = "0" + i; }
        return i;
    }
}

//Context Menu
var conmenu1 = document.createElement('div');
var conmenu1butt1 = document.createElement('li');
var conmenu1butt2 = document.createElement('li');
var conmenu1butt3 = document.createElement('li');
conmenu1.style.color = 'white';
conmenu1.className = 'menu';
conmenu1butt1.innerHTML = 'Customize';
conmenu1butt1.onclick = function () { scriptApp('Personalization'); };
conmenu1butt2.innerHTML = 'Settings';
conmenu1butt2.onclick = function () { scriptApp('Settings'); };
conmenu1butt3.innerHTML = 'About';
conmenu1butt3.onclick = function () { scriptApp('About'); };
desktopbody.appendChild(conmenu1);
conmenu1.appendChild(conmenu1butt1);
conmenu1.appendChild(conmenu1butt2);
conmenu1.appendChild(conmenu1butt3);

//DarkMode Toggle
function darkToggle(){
    var darkmodeon = document.getElementById("darkmodetoggle").checked;
    if(darkmodeon == true){
        darkMode();
    }else if(darkmodeon == false){
        lightMode();
    }
    console.log(darkmodeon);
}

//Stock apps in Script OS
function scriptApp(appsname){
    var app = document.createElement('div');
    var apphead = document.createElement('div');
    var appheadtext = document.createTextNode(appsname);
    var close = document.createElement('input');
    var fullscreen = document.createElement('input');
    var smallscreen = document.createElement('input');
    var headbuttdiv = document.createElement('div');
    var headtextdiv = document.createElement('div');
    var appnumber = Math.random();
    headtextdiv.style.textAlign = 'left';
    headtextdiv.style.width = '50%';
    headtextdiv.style.cssFloat = 'left';
    headbuttdiv.style.textAlign = 'right';
    headbuttdiv.style.width = '50%';
    headbuttdiv.style.cssFloat = 'right';
    appnumber++;
    app.className = 'app';
    apphead.className = 'appheader';
    close.type = 'image';
    close.title = 'Close';
    close.style.width = '20px';
    close.src = 'images/exit button.png';
    fullscreen.title = 'Fullscreen';
    fullscreen.type = 'image';
    fullscreen.style.width = '20px';
    fullscreen.src = 'images/fullscreen button.png';
    fullscreen.style.textAlign = 'right';
    smallscreen.type = 'image';
    smallscreen.title = 'Small';
    smallscreen.style.width = '20px';
    smallscreen.src = 'images/small screen button.png';
    headtextdiv.append(appheadtext);
    apphead.append(headtextdiv);
    apphead.append(headbuttdiv);
    headbuttdiv.append(close);
    headbuttdiv.append(fullscreen);
    headbuttdiv.append(smallscreen);
    app.appendChild(apphead);
    desktopbody.appendChild(app);
    app.id = appsname + appnumber;
    apphead.id = app.id + "header";
    dragWindow(document.getElementById(appsname + appnumber));
    close.onclick = function () { desktopbody.removeChild(app); };
    fullscreen.onclick = function () { app.style.width = '100%'; app.style.height = '92.5%'; app.style.top = '20px'; app.style.left = '0px'; };
    smallscreen.onclick = function () { app.style.width = '50%'; app.style.height = '50%'; };
    if (appsname === "Browser") {
        var inputbar = document.createElement("input");
        browserview = document.createElement('iframe');
        var backbutton = document.createElement('button');
        var forwardbutton = document.createElement('button');
        backbutton.innerHTML = '<';
        backbutton.style.borderRadius = '15px';
        backbutton.onclick = function () { window.history.back(); };
        forwardbutton.innerHTML = '>';
        forwardbutton.style.borderRadius = '15px';
        forwardbutton.onclick = function () { window.history.forward(); };
        app.appendChild(backbutton);
        app.appendChild(forwardbutton);
        inputbar.type = 'text';
        inputbar.placeholder = 'Website';
        inputbar.style.width = '75%';
        inputbar.style.borderRadius = '15px';
        inputbar.onchange = function () { browserview.src = "https://" + inputbar.value; };
        app.appendChild(inputbar);
        browserview.id = "browserview" + appnumber;
        browserview.src = 'newtab.html';
        browserview.title = 'whitmanCTF[welcome_to_script_os_717]';
        app.appendChild(browserview);
    } else if (appsname === "Settings") {
        var backgroundsettings = document.createElement('input');
        var themesettings = document.createElement('input');
        var about = document.createElement('input');
        var shortcuts = document.createElement('input');
        shortcuts.type = 'image';
        themesettings.type = 'image';
        backgroundsettings.type = 'image';
        about.type = 'image';
        shortcuts.src = 'images/script os shortcuts logo.png';
        themesettings.src = 'images/photosappicon.png';
        backgroundsettings.src = 'images/background icon.png';
        about.src = 'images/Script OS logo 3.png';
        shortcuts.style.width = '10%';
        about.style.width = '10%';
        themesettings.style.width = '10%';
        backgroundsettings.style.width = '10%';
        about.title = 'About';
        shortcuts.title = 'Shortcuts';
        themesettings.title = "Theme Settings";
        backgroundsettings.title = 'Personalization';
        about.onclick = function () { scriptApp("About"); };
        shortcuts.onclick = function () { scriptApp("Shortcuts"); };
        themesettings.onclick = function () { scriptApp("Themes"); };
        backgroundsettings.onclick = function () {scriptApp("Personalization"); };
        app.appendChild(shortcuts);
        app.appendChild(backgroundsettings);
        app.appendChild(themesettings);
        app.appendChild(about);ß
    } else if (appsname === "Terminal") {
        var termoutput = document.createElement('textarea');
        termoutput.style.width = '98%';
        termoutput.style.height = '85%';
        termoutput.style.resize = 'none';
        termoutput.style.backgroundColor = 'black';
        termoutput.style.color = 'white';
        if (window.console) console = { 
            log: function(){
                var output='',
                    console=termoutput;
                for (var i=0;i<arguments.length;i++) {
                    output+=arguments[i]+' ';
                }
                console.innerText+=output+"\n";
            }
        };
        var test=12345;
        console.log('This is currently being tested and does not work yet...');
        app.appendChild(termoutput);
    } else if (appsname === "Personalization"){
        var backgroundtxt = document.createElement("h1");
        backgroundtxt.innerHTML = "Background";
        app.appendChild(backgroundtxt);
        var choice1 = document.createElement('input');
        choice1.type = 'image';
        choice1.src = 'images/landscape.jpg';
        choice1.className = 'backgroundoption';
        choice1.onclick = function () { document.body.style.backgroundImage = 'url(images/landscape.jpg)'; 
        localStorage.setItem('background','url(images/landscape.jpg)'); };
        app.appendChild(choice1);
        var choice2 = document.createElement('input');
        choice2.type = 'image';
        choice2.src = 'images/imac-pro-wallpaper.jpg';
        choice2.className = 'backgroundoption';
        choice2.onclick = function () { document.body.style.backgroundImage = 'url(images/imac-pro-wallpaper.jpg)';
        localStorage.setItem('background','url(images/imac-pro-wallpaper.jpg)'); };
        app.appendChild(choice2);
        var choice3 = document.createElement('input');
        choice3.type = 'image';
        choice3.src = 'images/lamborghini ting.png';
        choice3.className = 'backgroundoption';
        choice3.onclick = function () { document.body.style.backgroundImage = 'url("images/lamborghini ting.png")';
        localStorage.setItem('background','url("images/lamborghini ting.png")'); };
        app.appendChild(choice3);
        var choice4 = document.createElement('input');
        choice4.type = 'image';
        choice4.src = 'images/Script-OS-3.png';
        choice4.className = 'backgroundoption';
        choice4.onclick = function () { document.body.style.backgroundImage = 'url(images/Script-OS-3.png)';
        localStorage.setItem('background','url(Script-OS-3.png)');};
        app.appendChild(choice4);
        var choice5 = document.createElement('input');
        choice5.type = 'image';
        choice5.src = 'images/pewds-pattern.jpg';
        choice5.className = 'backgroundoption';
        choice5.onclick = function () { document.body.style.backgroundImage = 'url(images/pewds-pattern.jpg)';
        localStorage.setItem('background','url(images/pewds-pattern.jpg)');};
        app.appendChild(choice5);
        var choice6 = document.createElement('input');
        choice6.type = 'image';
        choice6.src = 'images/animals_hero_giraffe_1_0.jpg';
        choice6.className = 'backgroundoption';
        choice6.onclick = function () { document.body.style.backgroundImage = 'url(images/animals_hero_giraffe_1_0.jpg)';
        localStorage.setItem('background','url(images/animals_hero_giraffe_1_0.jpg)');};
        app.appendChild(choice6);
        var choice7 = document.createElement('input');
        choice7.type = 'image';
        choice7.src = 'images/hbd-script-os.png';
        choice7.className = 'backgroundoption';
        choice7.onclick = function () { document.body.style.backgroundImage = 'url(images/hbd-script-os.png)';
        localStorage.setItem('background','url(images/hbd-script-os.png)');};
        app.appendChild(choice7);
        var backgroundinput = document.createElement('input');
        var backgroundaddbutt = document.createElement('button');
        backgroundaddbutt.innerHTML = 'Add';
        backgroundinput.placeholder = "Background URL";
        backgroundaddbutt.onclick = function () {
            document.body.style.backgroundImage = "url('" +  backgroundinput.value + "')"; 
            custombackground = document.createElement('input');
            custombackground.type = 'image';
            custombackground.src = backgroundinput.value;
            custombackground.className = 'backgroundoption';
            custombackground.onclick = function () { document.body.style.backgroundImage = "url('" +  backgroundinput.value + "')";
            localStorage.setItem('background',"url('" +  backgroundinput.value + "')");};
            app.appendChild(custombackground);
        };
        app.appendChild(backgroundinput);
        app.appendChild(backgroundaddbutt);
        var apptranstext = document.createElement("h1");
        apptranstext.innerHTML = "App Transparency";
        var transtogglelabel = document.createElement("label");
        var transtoggle = document.createElement("input");
        var transtogglespan = document.createElement("span");
        transtogglelabel.className = "switch";
        transtoggle.type = "checkbox";
        transtoggle.checked = true;
        transtoggle.onchange = function (){
            var ttoggle = transtoggle.checked;
            var appclass = document.getElementsByClassName("app");
            if(ttoggle == true){
                for(var i = 0; i< appclass.length; i++){
                    appclass[i].style.background = 'rgba(0,0,0,0.75)';
                }
            } else if(ttoggle == false){
                for(var i = 0; i< appclass.length; i++){
                    appclass[i].style.background = 'rgba(0,0,0,1)';
                }
            }
        }
        transtogglespan.className = "slider round";
        app.appendChild(apptranstext);
        app.appendChild(transtogglelabel);
        transtogglelabel.appendChild(transtoggle);
        transtogglelabel.appendChild(transtogglespan);
    } else if(appsname === "Discord"){
        var disframe = document.createElement('iframe');
        disframe.src = 'https://discordapp.com/';
        app.appendChild(disframe);
    } else if(appsname === "About"){
        var scriptosversion = document.createElement('h1');
        var browserversion = document.createElement('h1');
        var copyright = document.createElement('h1');
        var changelogbutt = document.createElement('button');
        changelogbutt.innerHTML = 'Changelog';
        changelogbutt.onclick = function() {scriptApp("Changelog");};
        app.style.color = 'white';
        browserversion.innerHTML = objbrowserName + ": " + objfullVersion;
        scriptosversion.innerHTML = "Script OS 3.1";
        copyright.innerHTML = "© Tyler Ruotolo 2018-2020";
        app.appendChild(scriptosversion);
        app.appendChild(copyright);
        app.appendChild(browserversion);
        app.appendChild(changelogbutt);
    }else if(appsname === "Changelog"){
        var changelogtext = document.createElement('textarea');
        changelogtext.value = changelog;
        changelogtext.style.width = '100%';
        changelogtext.style.height = '92.5%';
        changelogtext.readOnly = true;
        changelogtext.style.resize = 'none';
        app.appendChild(changelogtext);
    }else if(appsname === "Themes"){
        var theme1 = document.createElement("button");
        var theme2 = document.createElement("button");
        var theme3 = document.createElement("button");
        var theme4 = document.createElement("button");
        var theme5 = document.createElement("button");
        var theme6 = document.createElement("button");
        theme1.innerHTML = "Red";
        theme1.style.backgroundColor = "red";
        theme1.onclick = function () {
            document.getElementById('navbar').style.background = 'rgba(255,0,0,0.9)'; 
            document.getElementById('topnav').style.background = 'rgba(255,0,0,0.9)'; 
        };
        theme2.innerHTML = "Orange";
        theme2.style.backgroundColor = 'orange';
        theme2.onclick = function () {
            document.getElementById('navbar').style.background = 'rgba(255,165,0,0.9)'; 
            document.getElementById('topnav').style.background = 'rgba(255,165,0,0.9)'; 
        };
        theme3.innerHTML = "Yellow";
        theme3.style.backgroundColor = 'yellow';
        theme3.onclick = function () {
            document.getElementById('navbar').style.background = 'rgba(255,255,0,0.9)'; 
            document.getElementById('topnav').style.background = 'rgba(255,255,0,0.9)';
        };
        app.appendChild(theme1);
        app.appendChild(theme2);
        app.appendChild(theme3);
    } else if(appsname === "VisualCode"){
        var codeviewer = document.createElement("iframe");
        var savebutton = document.createElement("button");
        var openvbutton = document.createElement("input");
        savebutton.innerHTML = "Save in Docs";
        savebutton.onclick = function () {
            codearea.select();
            document.execCommand('copy');
            window.open("https://docs.google.com/document/u/0");
        };
        openvbutton.type = 'file';
        const defaultText = `
        <!DOCTYPE html> 
            <html lang="en"> 
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                </head>
                <body>
                    <h1>Hello, World</h1>
                </body>
            </html>`;
        codearea.value = defaultText;
        openvbutton.addEventListener("change", function () {
            if (this.files && this.files[0]) {
                var myFile = this.files[0];
                var reader = new FileReader();
                reader.addEventListener('load', function (e) {
                    codearea.value = e.target.result;
                });

                reader.readAsBinaryString(myFile);
            }
        });
        codearea.addEventListener('input', () => {
            codeviewer.srcdoc = codearea.value;
        });
        codeviewer.srcdoc = codearea.value;
        codearea.onkeydown = function () {
            if(event.keyCode === 9){
                var v = this.value, s = this.selectionStart,e = this.selectionEnd;
                this.value = v.substring(0, s) + '\t' + v.substring(e);
                this.selectionStart = this.selectionEnd = s + 1;
                return false;
            }
        };
        codearea.style.resize = 'none';
        codeviewer.style.resize = 'none';
        codeviewer.style.backgroundColor = 'white';
        codearea.style.height = '48%';
        codearea.style.width = '100%';
        codearea.style.display = 'block';
        codeviewer.style.height = '48%';
        codeviewer.style.width = '100%';
        codeviewer.style.display = 'block';
        app.appendChild(savebutton);
        app.appendChild(openvbutton);
        app.appendChild(codearea);
        app.appendChild(codeviewer);
    } else if(appsname === "Files"){
        var filecontainer = document.createElement("iframe");
        filecontainer.style = 'width: 99%; height:99%;';
        filecontainer.src = "https://google.com/drive"
        app.appendChild(filecontainer);
    } else if(appsname === "Shortcuts"){
        var appnameshort = document.createElement('input');
        var shortadd = document.createElement('button');
        var newshortcut = document.createElement('input');
        var navbar = document.getElementById("navbar");
        newshortcut.type = 'image';
        newshortcut.src = "images/script os shortcuts logo.png";
        newshortcut.style.width = '50px';
        newshortcut.style.height = '50px';
        newshortcut.style.textAlign = 'center';
        appnameshort.type = 'text';
        shortadd.innerHTML = 'Add';
        app.appendChild(appnameshort);
        app.appendChild(shortadd);
        shortadd.onclick = function () {
            newshortcut.title = appnameshort.value;
            newshortcut.innerHTML = appnameshort.value;
            newshortcut.className = 'appicon'
            newshortcut.onclick = function () {
                scriptApp(appnameshort.value);
            };
            navbar.appendChild(newshortcut);
            desktopbody.removeChild(app);
        };
    } else if(appsname === "vmOS"){
        var osview = document.createElement('iframe');
        var oschoice1 = document.createElement('button');
        var oschoice2 = document.createElement('button');
        var oschoice3 = document.createElement('button');
        var oschoice4 = document.createElement('button');
        osview.style.width = '98%';
        osview.style.height = '92.5%';
        oschoice1.innerHTML = 'lineOS[Currently Offline]';
        oschoice1.onclick = function () {osview.src = 'https://os.davecode.me';};
        oschoice2.innerHTML = 'Windows 93';
        oschoice2.onclick = function () {osview.src = 'https://windows93.net';};
        oschoice3.innerHTML = 'Script OS';
        oschoice3.onclick = function () {osview.src = 'https://scriptos.cf/';};
        oschoice4.innerHTML = 'eyeOS';
        oschoice4.onclick = function () {osview.src = 'https://s2.demo.opensourcecms.com/eyeOS/';};
        app.appendChild(oschoice1);
        app.appendChild(oschoice2);
        app.appendChild(oschoice3);
        app.appendChild(oschoice4);
        app.appendChild(osview);
    } else if(appsname === "ScriptAI"){
        var commandinput = document.createElement('input');
        var commandoutput = document.createElement('textarea');
        var micbutton = document.createElement('input');
        var recognizer = new webkitSpeechRecognition();
        recognizer.lang = "en";
        recognizer.onresult = function(event) {
            if (event.results.length > 0) {
                var result = event.results[event.results.length-1];
                if(result.isFinal) {
                    commandinput.value = result[0].transcript;
                }
            }  
        };
        commandinput.placeholder = 'Type a message';
        commandinput.style = 'height:15%; width:75%; font-size: 75px; border-radius: 30px';
        commandoutput.style = 'height:75%; width:100%; font-size: 65px; color:white; background-color: black';
        commandoutput.readOnly = true;
        micbutton.type = 'image';
        micbutton.disabled = true;
        micbutton.style.backgroundColor = 'white';
        micbutton.src = 'https://png.pngtree.com/svg/20151101/76e68d5d8b.svg';
        commandinput.onchange = function () {
            if(commandinput.value == "hey"){
                commandoutput.value = "Hi there!";
            }else if(commandinput.value == "hi"){
                commandoutput.value = "Hey!";
            } else if(commandinput.value == "whats up"){
                commandoutput.value = "What's up my diggity dogs?";
            } else if(commandinput.value == "what's up"){
                commandoutput.value = "What's up my diggity dogs?";
            } else if(commandinput.value == "how are you"){
                commandoutput.value = "I'm doing pretty good.";
            } else if(commandinput.value == "fuck you"){
                commandoutput.value = "That isn't very nice!";
            } else if(commandinput.value == "open youtube"){
                commandoutput.value = "Okay, opening youtube.com";
                scriptApp('Browser');
                browserview.src = 'https://youtube.com';
            } else if(commandinput.value == "what is the best meme account on instagram"){
                commandoutput.value = "The best meme account is @manystolenmemes";
            } else if(commandinput.value == "what is your favorite condiment"){
                commandoutput.value = "Ketchup!";
            } else if(commandinput.value == "who is the best rapper"){
                commandoutput.value = "Either Eminem or Logic, tough choice.";
            } else if(commandinput.value == "does minecraft or fortnite have more monthly players"){
                commandoutput.value = "Fortnite(sadly)";
            } else if(commandinput.value == "whats your favorite minecraft block"){
                commandoutput.value = "Anvils because you can drop them on things.";
            } else if(commandinput.value == "why does dr pepper come in a bottle"){
                commandoutput.value = "His wife is dead";
            } else if(commandinput.value == "what is the difference between a lamborghini and a trash can of dead babies"){
                commandoutput.value = "I don't have a lamborghini in my garage.";
            } else if(commandinput.value == "show me something funny"){
                commandoutput.value = "Look in a mirror!";
            } else if(commandinput.value == "do you work on macs"){
                commandoutput.value = "Yes, as long as you don't use Safari.";
            } else if(commandinput.value == "donate"){
                commandoutput.value = "...";
                scriptApp("Browser");
                browserview.src = "https://paypal.me/tylerruotolo"
            } else if(commandinput.value == ""){
                commandoutput.value = "";
            } else if(commandinput.value == "yes"){
                commandoutput.value = "Yes recieved!";
            } else if(commandinput.value == "no"){
                commandoutput.value = "Okay.";
            } else if(commandinput.value == "lock my computer"){
                commandoutput.value = "Locking your computer.";
                signOut();
            } else if(commandinput.value == "what is your name"){
                commandoutput.value = "My name is Script AI, I'm here to help!";
            } else if(commandinput.value == "what is the weather"){
                commandoutput.value = "Loading weather...";
                scriptApp("Browser");
                browserview.src = "https://www.google.com/search?q=weather";
            } else if(commandinput.value ==  "flag"){
                commandoutput.value = "I will not just give you the flag, what year was Script OS created?(type the year in to ScriptAI when you have it)";
            } else if(commandinput.value == "2018"){
                commandoutput.value = "You got it, the flag is whitmanCTF[script_os_is_simple]";
            } else{
                commandoutput.value = "Sorry, I didn't get that.";
            }
            var available_voices = window.speechSynthesis.getVoices();
            
            var english_voice = '';

            for(var i=0; i<available_voices.length; i++) {
                if(available_voices[i].lang === 'en-US') {
                    english_voice = available_voices[i];
                    break;
                }
            }
            if(english_voice === '')
                english_voice = available_voices[0];

            var utter = new SpeechSynthesisUtterance();
            utter.rate = 1;
            utter.pitch = 0.5;
            utter.text = commandoutput.value;
            utter.voice = english_voice;

            window.speechSynthesis.speak(utter);
        };
        micbutton.className = 'appchoice';
        micbutton.onclick = function () {
            recognizer.start();
        };
        app.appendChild(commandoutput);
        app.appendChild(commandinput);
        app.appendChild(micbutton);
    } else {
        var unavailableapp = document.createElement('h1');
        unavailableapp.innerHTML = "Currently Unavailable";
        app.appendChild(unavailableapp);
    }
}

//Browser Version
var objappVersion = navigator.appVersion;
var objAgent = navigator.userAgent; 
var objbrowserName = navigator.appName; 
var objfullVersion = ''+parseFloat(navigator.appVersion); 
var objBrMajorVersion = parseInt(navigator.appVersion,10); 
var objOffsetName,objOffsetVersion,ix; 
if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) { 
    objbrowserName = "Chrome"; 
    objfullVersion = objAgent.substring(objOffsetVersion+7); 
}else if ((objOffsetVersion=objAgent.indexOf("MSIE"))!=-1) { 
    objbrowserName = "Microsoft Internet Explorer(It is reccomended that you use Chrome)"; 
    objfullVersion = objAgent.substring(objOffsetVersion+5); 
}else if ((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1) { 
    objbrowserName = "Firefox(It is reccomended that you use Chrome)"; 
}else if ((objOffsetVersion=objAgent.indexOf("Safari"))!=-1) { 
    objbrowserName = "Safari(It is reccomended that you use Chrome)"; 
    objfullVersion = objAgent.substring(objOffsetVersion+7); 
    if ((objOffsetVersion=objAgent.indexOf("Version"))!=-1) objfullVersion = objAgent.substring(objOffsetVersion+8); 
}

//Dark and Light Mode
function darkMode(){
    navbar.style.background = 'rgba(0,0,0,0.5)';
    document.getElementById('topnav').style.background = 'rgba(0,0,0,0.5)';
    websearch.style.background = 'rgba(0,0,0,0.5)';
    websearch.style.color = 'white';
}

function lightMode(){
    navbar.style.background = 'rgba(255,255,255,0.5)';
    document.getElementById('topnav').style.background = 'rgba(255,255,255,0.5)';
    websearch.style.background = 'rgba(255,255,255,0.5)';
    websearch.style.color = 'black';
}

var ALPHABET = "abcdefghijklmnopqrstuvwxyz";




function caesarDecrypt(encryptedMessage, key){
    
    return caesarEncrypt(encryptedMessage, -key);

}

function caesarEncrypt(message, key){
    var encryptedResult = "";
    
    for(var i = 0; i < message.length; i++){
        var originalCharacter = message.charAt(i);
        
        var alphabeticIndex = ALPHABET.indexOf(originalCharacter);
        if(alphabeticIndex >= 0){
            var newIndex = alphabeticIndex + key + ALPHABET.length;
            newIndex = newIndex % ALPHABET.length;
            
            var newCharacter = ALPHABET.charAt(newIndex);
            
            encryptedResult += newCharacter
        }
        
        else{
            encryptedResult += originalCharacter;
        }
    }
    
    return encryptedResult;
}