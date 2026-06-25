/*==========================================================
    LSPD DISPATCH BUILDER
    UI
==========================================================*/

/*==========================================================
    APPLICATION STATE
==========================================================*/

let currentCategory = "";
let currentIncident = "";
let currentLocation = "";
let currentTemplate = "";

const workflowContainer = document.getElementById("workflowContainer");

/*==========================================================
    INITIALIZE
==========================================================*/

function initializeUI(){

    buildCategoryDropdown();

}

/*==========================================================
    CATEGORY
==========================================================*/

function buildCategoryDropdown(){

    workflowContainer.innerHTML = "";

    const group = createFormGroup(
        "Category",
        "categorySelect"
    );

    const select = group.querySelector("select");

    addOption(
        select,
        "",
        "Select Category"
    );

    DATABASE.categories.forEach(category=>{

        addOption(
            select,
            category.id,
            category.name
        );

    });

    select.addEventListener(
        "change",
        categoryChanged
    );

    workflowContainer.appendChild(group);

}

/*==========================================================
    CATEGORY CHANGED
==========================================================*/

function categoryChanged(event){

    currentCategory = event.target.value;
    currentIncident = "";
    currentLocation = "";
    currentTemplate = "";

    clearOutput();

    removeAfter("categorySelect");

    if(currentCategory===""){
        return;
    }

    switch(currentCategory){

        case "general":

            buildGeneralTemplateDropdown();

            break;

        case "robberies":

            buildIncidentDropdown();

            break;

    }

}

/*==========================================================
    GENERAL TEMPLATE
==========================================================*/

function buildGeneralTemplateDropdown(){

    const group = createFormGroup(
        "Template",
        "generalTemplate"
    );

    const select = group.querySelector("select");

    addOption(
        select,
        "",
        "Select Template"
    );

    DATABASE.general.templates.forEach(template=>{

        addOption(
            select,
            template.id,
            template.name
        );

    });

    select.addEventListener(
        "change",
        generalTemplateChanged
    );

    workflowContainer.appendChild(group);

}

/*==========================================================
    GENERAL TEMPLATE CHANGED
==========================================================*/

function generalTemplateChanged(event){

    currentTemplate = event.target.value;

    clearOutput();

    if(currentTemplate){

        generateDispatch();

    }

}

/*==========================================================
    RESET
==========================================================*/

function resetSelections(){

    currentCategory = "";
    currentIncident = "";
    currentLocation = "";
    currentTemplate = "";

    clearOutput();

}
/*==========================================================
    INCIDENT TYPE
==========================================================*/

function buildIncidentDropdown(){

    const group = createFormGroup(
        "Incident Type",
        "incidentSelect"
    );

    const select = group.querySelector("select");

    addOption(
        select,
        "",
        "Select Incident Type"
    );

    DATABASE.robberies.incidentTypes.forEach(incident=>{

        addOption(
            select,
            incident.id,
            incident.name
        );

    });

    select.addEventListener(
        "change",
        incidentChanged
    );

    workflowContainer.appendChild(group);

}



/*==========================================================
    INCIDENT CHANGED
==========================================================*/

function incidentChanged(event){

    currentIncident = event.target.value;

    currentLocation = "";
    currentTemplate = "";

    clearOutput();

    removeAfter("incidentSelect");

    if(currentIncident===""){
        return;
    }

    buildLocationDropdown();

}



/*==========================================================
    LOCATION
==========================================================*/

function buildLocationDropdown(){

    const incident = DATABASE.robberies.incidentTypes.find(
        item => item.id === currentIncident
    );

    if(!incident){
        return;
    }

    const group = createFormGroup(
        "Location",
        "locationSelect"
    );

    const select = group.querySelector("select");

    addOption(
        select,
        "",
        "Select Location"
    );

    incident.locations.forEach(location=>{

        addOption(
            select,
            location.id,
            `${location.name} (Postal ${location.postal})`
        );

    });

    select.addEventListener(
        "change",
        locationChanged
    );

    workflowContainer.appendChild(group);

}



/*==========================================================
    LOCATION CHANGED
==========================================================*/

function locationChanged(event){

    currentLocation = event.target.value;

    currentTemplate = "";

    clearOutput();

    removeAfter("locationSelect");

    if(currentLocation===""){
        return;
    }

    buildStatusDropdown();

}



/*==========================================================
    STATUS
==========================================================*/

function buildStatusDropdown(){

    const group = createFormGroup(
        "Current Status",
        "statusSelect"
    );

    const select = group.querySelector("select");

    addOption(
        select,
        "",
        "Select Status"
    );

    DATABASE.robberies.templates.forEach(template=>{

        addOption(
            select,
            template.id,
            template.name
        );

    });

    select.addEventListener(
        "change",
        statusChanged
    );

    workflowContainer.appendChild(group);

}



/*==========================================================
    STATUS CHANGED
==========================================================*/

function statusChanged(event){

    currentTemplate = event.target.value;

    clearOutput();

    if(currentTemplate){

        generateDispatch();

    }

}
/*==========================================================
    REFRESH UI
==========================================================*/

function refreshUI(){

    clearOutput();

}



/*==========================================================
    REBUILD UI
==========================================================*/

function rebuildUI(){

    resetSelections();

    buildCategoryDropdown();

}



/*==========================================================
    READY CHECK
==========================================================*/

function isReadyToGenerate(){

    if(currentCategory===""){

        return false;

    }

    if(currentCategory==="general"){

        return currentTemplate !== "";

    }

    if(currentCategory==="robberies"){

        return (

            currentIncident !== "" &&
            currentLocation !== "" &&
            currentTemplate !== ""

        );

    }

    return false;

}



/*==========================================================
    GETTERS
==========================================================*/

function getCurrentCategory(){

    return currentCategory;

}



function getCurrentIncident(){

    return currentIncident;

}



function getCurrentLocation(){

    return currentLocation;

}



function getCurrentTemplate(){

    return currentTemplate;

}



/*==========================================================
    DEBUG
==========================================================*/

function printSelections(){

    console.group("LSPD Dispatch Builder");

    console.log("Category :", currentCategory);

    console.log("Incident :", currentIncident);

    console.log("Location :", currentLocation);

    console.log("Template :", currentTemplate);

    console.groupEnd();

}



/*==========================================================
    RESET WORKFLOW
==========================================================*/

function resetWorkflow(){

    resetSelections();

    buildCategoryDropdown();

}



/*==========================================================
    WINDOW EXPORTS
==========================================================*/

window.lspd = {

    refreshUI,

    rebuildUI,

    resetWorkflow,

    printSelections,

    isReadyToGenerate,

    getCurrentCategory,

    getCurrentIncident,

    getCurrentLocation,

    getCurrentTemplate

};