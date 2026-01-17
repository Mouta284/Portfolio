"use strict";

const topBt = document.querySelector("#backtop");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBt.style.display = "block";
    } else {
        topBt.style.display = "none";
    }
}

topBt.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const searchBar = document.querySelector("#searchWords");
const mainBody = document.querySelector("#main-content");

if(searchBar && mainBody) {
    const bodyContent = mainBody.innerHTML;

    searchBar.addEventListener('input', (input) => {
        const searchIn = input.target.value.trim();

        
        if(searchIn === ""){
            mainBody.innerHTML = bodyContent;
        } else if(searchIn.lenght < 2){
            mainBody.innerHTML = bodyContent;
        } else {
            const regex = new RegExp(`${searchIn}(?![^<]*>)`, 'gi'); // g is global and i is case-insesitive
            const wordHighlight = bodyContent.replace(regex, (match) => `<mark>${match}</mark>`);
            mainBody.innerHTML = wordHighlight;
        }
    });
} else {
    console.error("SearchBar or MainBody not found!");
}
