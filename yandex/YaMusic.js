// ==UserScript==
// @name         YaMusic1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://music.yandex.ru/radio
// @match        https://music.yandex.ru/*
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

    let frameList = document.querySelectorAll("iframe");
for (let i = 0; i < frameList.length; i++) {
	frameList[i].remove();
}

    /**
    * Окошко с рекламой
    */
    let firstMusicPanel = document.querySelector(".head");

    if (firstMusicPanel && firstMusicPanel.previousSibling) {
        firstMusicPanel.previousSibling.remove();
    }

    /**
    * Окошко с рекламой
    */
    let canvasWrapper = document.querySelector(".page-root");

    if (canvasWrapper) {
        let children = canvasWrapper.children;
        for (let i = 0; i < children.length; i++) {
            if (!children[i].classList.contains("head")) {
                console.log("removed " + children[i].className);
                //children[i].remove();
                children[i].style.marginTop = "-250px";
            } else {
                break;
            }
        }
    }

    /*let firstPanelGeometry = firstMusicPanel.getBoundingClientRect();

    if (firstPanelGeometry.top > 0) {
        console.log(firstMusicPanel.previousSibling);
        firstMusicPanel.previousSibling.remove();
    }*/

    // Теперь реклама сбоку

    let sideBar = document.querySelector(".sidebar");
    console.log(sideBar);

    if (sideBar) {
        for (let i = 0; i < sideBar.children.length; i++) {
        //if (hasFrame(sideBar.children[i])) {
        sideBar.children[i].style.display = "none";
        //}
        }
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