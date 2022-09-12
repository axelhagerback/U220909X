console.log('It is alive');

build();

function build() {

    //Creates sidebar, Change into function
    const divSidebar = document.createElement('div');
    divSidebar.setAttribute('id', 'sidebar');
    divSidebar.className = 'container w-25 vh-100 float-start bg-primary border-end border-3';
    app.appendChild(divSidebar);

    const divContent = document.createElement('div');
    divContent.setAttribute('id', 'content');
    divContent.className = 'container w-75 vh-100 float-end bg-info';
    app.appendChild(divContent);
    
    buildSidebar(divSidebar);
    buildContent(divContent);
}

function buildSidebar(divSidebar) {
//Button for home
const divColumnHead = document.createElement('div');
divColumnHead.className = 'd-flex flex-column mt-2'; //To see what is where
divSidebar.appendChild(divColumnHead);

const sidebarHead = document.createElement('button');
sidebarHead.setAttribute('type', 'button');
sidebarHead.className = 'btn border-0';
sidebarHead.innerHTML = '<h1>HOME</h1>';
divColumnHead.appendChild(sidebarHead);

const line = document.createElement('hr');
sidebarHead.appendChild(line);


//Button for About Me
const divColumnTop = document.createElement('div');
divColumnTop.className = 'col-12 p-2 mt-3 float-start text-center';
divSidebar.appendChild(divColumnTop);

const aboutMeBtn = document.createElement('button');
aboutMeBtn.setAttribute('type', 'button');
aboutMeBtn.innerHTML = '<h5>About me</h5>';
aboutMeBtn.className = 'btn border-0';
divColumnTop.appendChild(aboutMeBtn);

/* forces next column to break to new line, make a function of it?
const columnBreak = document.createElement('div');
columnBreak.className = 'w-100';
divColumnTop.appendChild(columnBreak); */

//Dropdown menu for My Experience
const divColumnMid = document.createElement('div');
divColumnMid.className = 'col-12 p-2 mt-3 float-start text-center'; //To see what is where
divSidebar.appendChild(divColumnMid);

const divDropdown = document.createElement('div');
divDropdown.className = 'dropdown';
divColumnMid.appendChild(divDropdown);

const dropdownBtn = document.createElement('button');
dropdownBtn.className = 'btn border-0 dropdown-toggle';
dropdownBtn.setAttribute('type', 'button');
dropdownBtn.setAttribute('data-bs-toggle', 'dropdown')
dropdownBtn.setAttribute('data-bs-auto-close', 'false');
dropdownBtn.innerHTML = '<h5>My Experience</h5>';
//dropdownBtn.setAttribute('aria-expanded', 'false');   Dont know if it works
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
divColumnBot.className = 'col-12 p-2 mt-3 float-start text-center';
divSidebar.appendChild(divColumnBot);

const contactBtn = document.createElement('button');
contactBtn.setAttribute('type', 'button');
contactBtn.className = 'btn border-0';
contactBtn.innerHTML = '<h5>Contact</h5>';
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

function buildContent(divContent) {

    const mainContent = document.createElement('div');
    mainContent.className = 'container w-75 h-50 mx-auto mt-5 bg-info border border-3';
    divContent.appendChild(mainContent);

    const textContent = document.createElement('p');
    textContent.className = 'float-start w-50 pt-2 pe-2';
    textContent.innerHTML = '<h2>Axel Hägerbäck</h2><br>'+
    'Welcome, to my personal site!<br>' +
    'Explore the different pages to find out who I am as a person, what experience I have and what my goals are.<br>' +
    'Feel free to contact me using any method on the contact pagee.';
    mainContent.appendChild(textContent);


}