// ==UserScript==
// @name         vk script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vk.com/feed
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function () {
        let maybeFriends = document.querySelector(".feed_friends_recomm");

        if (!maybeFriends) {
            return;
        }

        maybeFriends.style.display = "none";

    });


    // Your code here...
})();