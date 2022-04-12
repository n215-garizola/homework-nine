import * as MODEL from "../model/model.js";


function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Content";
    if (pageName == "") {
        pageContent = "homeContent";
    }
    //$("#app").html(eval(pageContent));


    MODEL.modelPageName(pageContent);

    
}

function dynamicListener() {

    console.log("dynamci");
}

function initListeners() {
    $(window).on("hashchange", route);
    //console.log(MODEL.myName);
    route();
}

$(document).ready(function(){
    initListeners();

});
