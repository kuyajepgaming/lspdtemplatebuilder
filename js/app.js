/*==========================================================
    LSPD TOOLKIT
    APP.JS
==========================================================*/

document.addEventListener("DOMContentLoaded", initializeApp);

/*==========================================================
    INITIALIZE APPLICATION
==========================================================*/

function initializeApp(){

    console.clear();

    console.log("====================================");
    console.log(DATABASE_INFO.application);
    console.log("Version:", DATABASE_INFO.version);
    console.log("====================================");

    initializeEngine();

    initializeUI();

    initializeClipboard();

    console.log("Application Ready.");

}