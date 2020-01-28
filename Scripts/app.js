"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    
    // Lab 1 part 1 variable
    let products;

    // Lab 1 part 2 variable
    let contactUsLI;
    let contactUsLIParent;
    let HRLI;

    //Lab 1 part 3 variables
    let bottomNav;
    let h4CopyRight;

    let pageBody;
    let jqueryScriptParent;

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        // Method 1
        // step1 - bind / connect to the element that you wish to manipulate
        products = document.getElementById("products");

        products.innerHTML="<a class='nav-link' href='#'><i class='fas fa-map'></i> Projects </a>";
        
        /* //Method 2
        productsLI = document.getElementById("products");

        productsLI.firstElementChild.innerHTML = "<i class='fas fa-map'></i> Projects" */

        /* //Method 3
        productsLI = document.getElementById("products");

        productsLI.firstElementChild.lastChild.textContent = " Projects" */
        
        //Lab 1 2nd answer
        contactUsLI = document.getElementById('contact');
        contactUsLIParent = contactUsLI.parentNode;
        HRLI = contactUsLI.cloneNode(true);
        HRLI.id = "hr";
        HRLI.firstElementChild.innerHTML = "<i class='fas fa-map'></i> Human Resources";
        
        contactUsLIParent.insertBefore(HRLI, contactUsLI);

        // Lab 1 3rd answer
        bottomNav = document.createElement('nav');
        bottomNav.className = "navbar fixed-bottom navbar-light bg-light";

        h4CopyRight = document.createElement('h4');
        h4CopyRight.textContent = "@ CopyRight 2020.";

        bottomNav.appendChild(h4CopyRight);

        pageBody = document.getElementsByTagName('body')[0];
        // pageBody.appendChild(bottomNav);

        jqueryScriptParent =  pageBody.children[4].parentNode;

        jqueryScriptParent.insertBefore(bottomNav, pageBody.children[4]);

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        console.log("%cMain Program Body", "color: green;")
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

