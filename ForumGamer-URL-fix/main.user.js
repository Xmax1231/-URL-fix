// ==UserScript==
// @name         巴哈姆特電玩資訊站 URL fixed
// @namespace    https://www.facebook.com/xmax1231
// @version      1.0
// @description  gamer.com.tw url fixed
// @author       XMAX
// @match        https://m.gamer.com.tw/*
// @grant        none
// ==/UserScript==

(function(){
    if(location.href.search(/m.gamer.com.tw\/forum/)!=-1){
        location.href=location.href.replace(/m.gamer.com.tw\/forum/i,"forum.gamer.com.tw");
    }else if(location.href.search(/m.gamer.com.tw\/home/)!=-1){
    	location.href=location.href.replace(/m.gamer.com.tw\/home/i,"home.gamer.com.tw");
	}
})();
