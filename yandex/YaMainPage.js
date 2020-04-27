// ==UserScript==
// @name         Yandex Main Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.yandex.ru
// @match        https://yandex.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideBetween (obj1, obj2) {
        let tempObj = obj1;
        while (tempObj.nextSibling != obj2) {
            tempObj.nextSibling.style.display = "none";
            tempObj = tempObj.nextSibling;
        }
    }

    function getObjectTree (object) {
        let result = [];

        let tempObject = object;
        while (tempObject.parentNode != document) {
            result.push(tempObject);
            tempObject = tempObject.parentNode;
        }

        return result;
    }

    function getCommonParents(obj1, obj2) {
        let result = {};
        let objectTree1 = getObjectTree(obj1);
        let objectTree2 = getObjectTree(obj2);

        // label:
        for (let i = 0; i < objectTree2.length; i++) {
            for (let j = 0; j < objectTree1.length; j++) {
                if (objectTree2[i] == objectTree1[j]) {
                    // Найден общий предок...
                    result.parent = objectTree2[i];
                    result.firstInner = objectTree1[j - 1];
                    result.secondInner = objectTree2[i - 1];
                    return result;
                    // break label;
                }
            }
        }

        return result;
    }

    var hren = document.querySelector(".rows__row_last");
    console.log(hren);
    hren.remove();

    // Убить баннер на главной
// search
    let searchInput = document.querySelector(".input__control");
// closeWidget
    let widgetControl = document.querySelector(".weather__temp");

    // 3 объекта (Предки в DOM)
    let commonParentObj = getCommonParents(searchInput, widgetControl);
    if (commonParentObj.firstInner.nextSibling) {
        let banner = commonParentObj.firstInner.nextSibling;
        console.log("Element founded and hidden");
        console.log(commonParentObj);

        hideBetween(commonParentObj.firstInner, commonParentObj.secondInner);
        banner.style.display = "none";

        banner.addEventListener('DOMSubtreeModified', function () {
            console.log("Element founded and hidden");
            banner.style.display = "none";
        }, false);

    }


})();