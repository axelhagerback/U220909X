console.log('It is alive');

build();

function build() {

    //Creates sidebar, Change into function
    const divSidebar = document.createElement('div');
    divSidebar.setAttribute('id', 'sidebar');
    divSidebar.className = 'container w-25 vh-100 position-fixed float-start bg-info border-end border-dark border-3';
    app.appendChild(divSidebar);

    const divContent = document.createElement('div');
    divContent.setAttribute('id', 'content');
    divContent.className = 'container vh-100 w-75 float-end';
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
aboutMeBtn.innerHTML = '<h5>About Me</h5>';
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

//Button for contact
const divColumnBot = document.createElement('div');
divColumnBot.className = 'col-12 p-2 mt-3 float-start text-center';
divSidebar.appendChild(divColumnBot);

const contactBtn = document.createElement('button');
contactBtn.setAttribute('type', 'button');
contactBtn.className = 'btn border-0';
contactBtn.innerHTML = '<h5>Contact</h5>';
divColumnBot.appendChild(contactBtn);


//div for two icons
const iconRow = document.createElement('div');
iconRow.className = 'position-absolute bottom-0 start-0';
divSidebar.appendChild(iconRow);

const gitHubBtn = document.createElement('h1');
gitHubBtn.className = 'bi bi-github float-start';
iconRow.appendChild(gitHubBtn);

const linkedIn = document.createElement('h1');
linkedIn.className = 'bi bi-linkedin float-start';
iconRow.appendChild(linkedIn);




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

    //div for main content
    const mainContent = document.createElement('div');
    mainContent.className = 'container bg-info w-75 h-50 mx-auto mt-5 rounded-4';
    divContent.appendChild(mainContent);

    
    const textContent = document.createElement('p');
    textContent.className = 'float-start w-50 pt-2 pe-4';
    textContent.innerHTML = '<h2>Axel Hägerbäck</h2><br>'+
    'Welcome, to my personal site!<br>' +
    'Explore the different pages to find out who I am as a person, what experience I have and what my goals are.<br>' +
    'Feel free to contact me using any method on the contact page.';
    mainContent.appendChild(textContent);

    //Picture of me
    const image = document.createElement('img');
    image.className = 'float-end w-50 h-100 rounded-3';
    image.setAttribute('src', 'mig_själv.jpg');
    image.setAttribute('alt', 'Picture of myself');
    mainContent.appendChild(image);


    
    

}