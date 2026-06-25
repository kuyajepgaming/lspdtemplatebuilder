/*==========================================================
    LSPD DISPATCH BUILDER
    TEMPLATE ENGINE
==========================================================*/

/*==========================================================
    INITIALIZE
==========================================================*/

function initializeEngine(){

    console.log("Template Engine Loaded");

}



/*==========================================================
    GENERATE DISPATCH
==========================================================*/

function generateDispatch(){

    const output = document.getElementById("result");



    /*==========================================
        CATEGORY
    ==========================================*/

    if(!currentCategory){

        output.value = "Please select a category.";

        return;

    }



    /*==========================================
        GENERAL
    ==========================================*/

    if(currentCategory === "general"){

        generateGeneralDispatch();

        return;

    }



    /*==========================================
        ROBBERIES
    ==========================================*/

    if(currentCategory === "robberies"){

        generateRobberyDispatch();

        return;

    }



    output.value = "Invalid category.";

}



/*==========================================================
    GENERAL
==========================================================*/

function generateGeneralDispatch(){

    const output = document.getElementById("result");



    if(!currentTemplate){

        output.value = "Please select a template.";

        return;

    }



    const template = DATABASE.general.templates.find(

        item => item.id === currentTemplate

    );



    if(!template){

        output.value = "Template not found.";

        return;

    }



    output.value = template.output;

}



/*==========================================================
    ROBBERIES
==========================================================*/

function generateRobberyDispatch(){

    const output = document.getElementById("result");



    if(!currentIncident){

        output.value = "Please select an incident type.";

        return;

    }



    if(!currentLocation){

        output.value = "Please select a location.";

        return;

    }



    if(!currentTemplate){

        output.value = "Please select a status.";

        return;

    }



    const incident = DATABASE.robberies.incidentTypes.find(

        item => item.id === currentIncident

    );



    if(!incident){

        output.value = "Incident not found.";

        return;

    }



    const location = incident.locations.find(

        item => item.id === currentLocation

    );



    if(!location){

        output.value = "Location not found.";

        return;

    }



    const template = DATABASE.robberies.templates.find(

        item => item.id === currentTemplate

    );



    if(!template){

        output.value = "Template not found.";

        return;

    }



    output.value = parseTemplate(

        template.output,

        location

    );

}



/*==========================================================
    PARSE TEMPLATE
==========================================================*/

function parseTemplate(template, location){

    let text = template;



    text = text.replaceAll(

        "{LOCATION}",

        location.name

    );



    text = text.replaceAll(

        "{POSTAL}",

        location.postal

    );



    return text;

}



/*==========================================================
    CLEAR OUTPUT
==========================================================*/

function clearOutput(){

    document.getElementById("result").value = "";



    if(typeof resetCopyButton === "function"){

        resetCopyButton();

    }

}