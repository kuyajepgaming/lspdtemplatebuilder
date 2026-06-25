/*==========================================================
    LSPD DISPATCH BUILDER
    CLIPBOARD
==========================================================*/

let copyButton = null;

/*==========================================================
    INITIALIZE
==========================================================*/

function initializeClipboard(){

    copyButton = document.getElementById("copyBtn");

    copyButton.addEventListener(

        "click",

        copyDispatch

    );

}



/*==========================================================
    COPY DISPATCH
==========================================================*/

function copyDispatch(){

    const output = document.getElementById("result");

    if(output.value.trim()===""){

        return;

    }

    navigator.clipboard.writeText(output.value);

    setCopiedState();

}



/*==========================================================
    COPIED STATE
==========================================================*/

function setCopiedState(){

    copyButton.classList.add("copied");

    copyButton.innerHTML = "✓ Copied";

}



/*==========================================================
    RESET BUTTON
==========================================================*/

function resetCopyButton(){

    if(!copyButton){

        return;

    }

    copyButton.classList.remove("copied");

    copyButton.innerHTML = "Copy";

}