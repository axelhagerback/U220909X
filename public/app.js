console.log('It is alive');

build();

function build() {

    //Creates sidebar, Change into function
    const divSidebar = document.createElement('div');
    divSidebar.setAttribute('id', 'sidebar');
    divSidebar.className = 'container w-25 vh-100 float-start bg-info border border-3 rounded-end';
    app.appendChild(divSidebar);
    

    //Button for home
    const divColumnHead = document.createElement('div');
    divColumnHead.className = 'd-flex flex-column mt-2'; //To see what is where
    divSidebar.appendChild(divColumnHead);

    const sidebarHead = document.createElement('button');
    sidebarHead.setAttribute('type', 'button');
    sidebarHead.className = 'btn border-0';
    sidebarHead.innerHTML = '<h1>HOME</h1>';
    divColumnHead.appendChild(sidebarHead);



    //Button for About Me
    const divColumnTop = document.createElement('div');
    divColumnTop.className = 'd-flex flex-column p-2 mt-3 float-start';
    divSidebar.appendChild(divColumnTop);

    const aboutMeBtn = document.createElement('button');
    aboutMeBtn.setAttribute('type', 'button');
    aboutMeBtn.innerHTML = 'About me';
    aboutMeBtn.className = 'btn border-0';
    divColumnTop.appendChild(aboutMeBtn);

    /* forces next column to break to new line, make a function of it?
    const columnBreak = document.createElement('div');
    columnBreak.className = 'w-100';
    divColumnTop.appendChild(columnBreak); */

    //Dropdown menu for My Experience
    const divColumnMid = document.createElement('div');
    divColumnMid.className = 'd-flex flex-column p-2 mt-3 float-start'; //To see what is where
    divSidebar.appendChild(divColumnMid);

    const divDropdown = document.createElement('div');
    divDropdown.className = 'dropdown';
    divColumnMid.appendChild(divDropdown);

    const dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'btn border-0 dropdown-toggle';
    dropdownBtn.setAttribute('type', 'button');
    dropdownBtn.setAttribute('data-bs-toggle', 'dropdown')
    dropdownBtn.setAttribute('data-bs-auto-close', 'false');
    dropdownBtn.innerHTML = 'My Experience';
    //dropdownBtn.setAttribute('aria-expanded', 'false');   vet inte om funkar
    divDropdown.appendChild(dropdownBtn);

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.className = 'dropdown-menu';
    divDropdown.appendChild(dropdownMenu);

    const dropdownList = document.createElement('li');
    dropdownMenu.appendChild(dropdownList);

    const dropdownItemA = document.createElement('button');
    dropdownItemA.className = 'dropdown-item';
    dropdownItemA.setAttribute('type', 'button');
    dropdownItemA.innerHTML = 'Education';
    dropdownList.appendChild(dropdownItemA);

    const dropdownItemB = document.createElement('button');
    dropdownItemB.className = 'dropdown-item';
    dropdownItemB.setAttribute('type', 'button');
    dropdownItemB.innerHTML = 'Work Experience';
    dropdownList.appendChild(dropdownItemB);
    

    const divColumnBot = document.createElement('div');
    divColumnBot.className = 'd-flex flex-column p-2 mt-3 float-start';
    divSidebar.appendChild(divColumnBot);

    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('type', 'button');
    contactBtn.className = 'btn border-0';
    contactBtn.innerHTML = 'Contact';
    divColumnBot.appendChild(contactBtn);





    //Test for sidebar dropdown collapse
   /* const dropdown = document.createElement('div');
    dropdown.className = 'collapse';
    dropdown.setAttribute('id', 'collapseExample');
    divSidebar.appendChild(dropdown);

    const cardBody = document.createElement('div');
    cardBody.className = 'card card-body';
    cardBody.innerHTML = 'HAHAHAHA';
    dropdown.appendChild(cardBody);

    const btnAboutMe = document.createElement('button');
    btnAboutMe.setAttribute('type', 'button');
    btnAboutMe.className = 'btn btn-primary';
    btnAboutMe.innerHTML = 'About Me';
    btnAboutMe.setAttribute('data-toggle', 'collapse');
    btnAboutMe.setAttribute('data-target', '#collapseExample');
    btnAboutMe.setAttribute('aria-expanded', 'false');
    btnAboutMe.setAttribute('aria-controls', 'collapseExample');
    divSidebar.appendChild(btnAboutMe); */
    
    
    /*const aboutMe = document.createElement('a');
    aboutMe.className = 'btn btn-primary';
    aboutMe.innerHTML = 'About me';
    aboutMe.setAttribute('data-toggle', 'collapse');
    aboutMe.setAttribute('href', '#collapseExample');
    aboutMe.setAttribute('role', 'button');
    aboutMe.setAttribute('aria-expanded', 'false');
    aboutMe.setAttribute('aria-controls', 'collapseExample');
    divSidebar.appendChild(aboutMe); 

    
*/

}