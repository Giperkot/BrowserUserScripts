// ==UserScript==
// @name         YaMusic1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://music.yandex.ru/radio
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hasFrame (elm) {
        if (elm.innerHTML.indexOf("<iframe") != -1) {
            return true;
        }

        return false;
    }


    let firstMusicPanel = document.querySelector(".head");

    if (firstMusicPanel.previousSibling) {
        firstMusicPanel.previousSibling.remove();
    }

    /*let firstPanelGeometry = firstMusicPanel.getBoundingClientRect();

    if (firstPanelGeometry.top > 0) {
        console.log(firstMusicPanel.previousSibling);
        firstMusicPanel.previousSibling.remove();
    }*/

    // Теперь реклама сбоку

    let sideBar = document.querySelector(".sidebar");
    console.log(sideBar);

    for (let i = 0; i < sideBar.children.length; i++) {
        //if (hasFrame(sideBar.children[i])) {
            sideBar.children[i].style.display = "none";
        //}
    }

    /*
    var config = { attributes: true, childList: true, subtree: true };
    var callback = function(mutationsList, observer) {
        console.log("startModify");
        for (let i = 0; i < sideBar.children.length; i++) {
        if (hasFrame(sideBar.children[i])) {
            console.log("findFrame");
            sideBar.children[i].style.display = "none";
        }
    }
    };
    var observer = new MutationObserver(callback);
    observer.observe(sideBar, config);
    */


    //console.log(firstMusicPanel.getBoundingClientRect());


    /*function findFrames () {
        var frameList = document.querySelectorAll("iframe");
        console.log(frameList);
        for (let i = 0; i < frameList.length; i++) {
            if (frameList[i].style.display == "none") {
                continue;
            }
            frameList[i].style.display = "none";
        }
    }
    setInterval(findFrames, 1000);
    */






    // Your code here...
})();
