/*==========================================================
    LSPD DISPATCH BUILDER
    UTILS
==========================================================*/

/*==========================================================
    CREATE FORM GROUP
==========================================================*/

function createFormGroup(labelText, selectId){

    const group = document.createElement("div");

    group.className = "form-group";



    const label = document.createElement("label");

    label.htmlFor = selectId;

    label.textContent = labelText;



    const select = document.createElement("select");

    select.id = selectId;



    group.appendChild(label);

    group.appendChild(select);



    return group;

}



/*==========================================================
    ADD OPTION
==========================================================*/

function addOption(select, value, text){

    const option = document.createElement("option");

    option.value = value;

    option.textContent = text;

    select.appendChild(option);

}



/*==========================================================
    REMOVE ALL DROPDOWNS AFTER
==========================================================*/

function removeAfter(selectId){

    const currentSelect = document.getElementById(selectId);



    if(!currentSelect){

        return;

    }



    const currentGroup = currentSelect.parentElement;



    let next = currentGroup.nextElementSibling;



    while(next){

        if(next.classList.contains("button-row")){

            break;

        }



        const remove = next;

        next = next.nextElementSibling;

        remove.remove();

    }

}



/*==========================================================
    GET INCIDENT
==========================================================*/

function getIncidentById(id){

    return DATABASE.robberies.incidentTypes.find(

        incident => incident.id === id

    );

}



/*==========================================================
    GET LOCATION
==========================================================*/

function getLocationById(incidentId, locationId){

    const incident = getIncidentById(incidentId);



    if(!incident){

        return null;

    }



    return incident.locations.find(

        location => location.id === locationId

    );

}



/*==========================================================
    GET ROBBERY TEMPLATE
==========================================================*/

function getRobberyTemplateById(id){

    return DATABASE.robberies.templates.find(

        template => template.id === id

    );

}



/*==========================================================
    GET GENERAL TEMPLATE
==========================================================*/

function getGeneralTemplateById(id){

    return DATABASE.general.templates.find(

        template => template.id === id

    );

}



/*==========================================================
    RESET APPLICATION
==========================================================*/

function resetApplication(){

    resetSelections();

}



/*==========================================================
    CLEAR WORKFLOW
==========================================================*/

function clearWorkflow(){

    workflowContainer.innerHTML = "";

}



/*==========================================================
    DEBUG DATABASE
==========================================================*/

function printDatabase(){

    console.log(DATABASE);

}



/*==========================================================
    VERSION
==========================================================*/

function printVersion(){

    console.log(

        DATABASE_INFO.application,

        DATABASE_INFO.version

    );

}