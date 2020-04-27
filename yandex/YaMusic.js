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

    // Важно проверить чтобы не вылезало окно, после первой песни.

    setInterval(function () {
        let popupList = document.querySelectorAll(".crackdown-popup");
        if (popupList.length < 1) {
            return;
        }

        console.log("Найдено всплывающее окно.. Пробую закрыть.");
        let isWindowClosed = false;

        for (let i = 0; i < popupList.length; i++) {
            let popupWindow = popupList[i];

            if (popupWindow.getBoundingClientRect && popupWindow.getBoundingClientRect().width < 1) {
                continue;
            }

            // закрыть.
            isWindowClosed = true;
            popupWindow.querySelector(".d-button").click();
        }

        if (!isWindowClosed) {
            return;
        }
        // Запустати музыку...
        document.querySelector(".player-controls__btn.deco-player-controls__button.player-controls__btn_play").click();
    }, 10000);
})();