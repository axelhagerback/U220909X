console.log('It is alive');

build();

function build() {
    const divSidebar = document.createElement('div');
    divSidebar.setAttribute('id', 'sidebar');
    divSidebar.className = 'container';
    app.appendChild(divSidebar);


    //Test för sidebar dropdown collapse
    const dropdown = document.createElement('div');
    dropdown.className = 'collapse';
    dropdown.setAttribute('id', 'collapseExample');

    const cardBody = document.createElement('div');
    cardBody.className = 'card card-body';
    cardBody.innerHTML = 'HAHAHAHA';

    /*const aboutMe = document.createElement('a');
    aboutMe.className = 'btn btn-primary';
    aboutMe.innerHTML = 'About me';
    aboutMe.setAttribute('data-toggle', 'collapse');
    aboutMe.setAttribute('href', '#collapseExample');
    aboutMe.setAttribute('role', 'button');
    aboutMe.setAttribute('aria-expanded', 'false');
    aboutMe.setAttribute('aria-controls', 'collapseExample');
    divSidebar.appendChild(aboutMe); */

    const btnAboutMe = document.createElement('button');
    btnAboutMe.setAttribute('type', 'button');
    btnAboutMe.className = 'btn btn-primary';
    btnAboutMe.innerHTML = 'About Me';
    btnAboutMe.setAttribute('data-toggle', 'collapse');
    btnAboutMe.setAttribute('data-target', '#collapseExample');
    btnAboutMe.setAttribute('aria-expanded', 'false');
    btnAboutMe.setAttribute('aria-controls', 'collapseExample');
    divSidebar.appendChild(btnAboutMe);
    
    divSidebar.appendChild(dropdown);

    collapseExample.appendChild(cardBody);
}