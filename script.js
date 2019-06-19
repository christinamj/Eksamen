window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#menuknapluk").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#burger").classList.toggle("hidden");

    if (document.querySelector("#containerforside")) {
        document.querySelector("#containerforside").classList.toggle("hidden");
    }

    if (document.querySelector("#menuknap")) {
        document.querySelector("#menuknap").classList.toggle("hidden");
    }

    if (document.querySelector("#portfoliecontainer")) {
        document.querySelector("#portfoliecontainer").classList.toggle("hidden");
    }

    if (document.querySelector("#dokcontainer")) {
        document.querySelector("#dokcontainer").classList.toggle("hidden");
    }


    if (document.querySelector("#overskriftres")) {
        document.querySelector("#overskriftres").classList.toggle("hidden");
    }

    if (document.querySelector("#doknativecontainer")) {
        document.querySelector("#doknativecontainer").classList.toggle("hidden");
    }

    if (document.querySelector("#dscontainer")) {
        document.querySelector("#dscontainer").classList.toggle("hidden");
    }

    if (document.querySelector("#redesigncon")) {
        document.querySelector("#redesigncon").classList.toggle("hidden");
    }
    if (document.querySelector("#omcontainer")) {
        document.querySelector("#omcontainer").classList.toggle("hidden");
    }
    if (document.querySelector("#col")) {
        document.querySelector("#col").classList.toggle("hidden");
    }

    if (document.querySelector("#dokcontainerveg")) {
        document.querySelector("#dokcontainerveg").classList.toggle("hidden");
    }



}
