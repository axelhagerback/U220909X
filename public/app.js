console.log('It is alive');

build();

function build() {
    const divSidebar = document.createElement('div');
    divSidebar.setAttribute('id', 'sidebar');
    divSidebar.className = 'container';
    app.appendChild(divSidebar);
 const divDropdown = document.createElement('div');
    divDropdown.className = 'dropdown';
    divSidebar.appendChild(divDropdown);

    const dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'btn btn-secondary dropdown-toggle';
    dropdownBtn.setAttribute('type', 'button');
    dropdownBtn.setAttribute('data-bs-toggle', 'dropdown')
    dropdownBtn.innerHTML = 'About Me';
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
    dropdownItemA.innerHTML = 'Action';
    dropdownList.appendChild(dropdownItemA);

    const dropdownItemB = document.createElement('button');
    dropdownItemB.className = 'dropdown-item';
    dropdownItemB.setAttribute('type', 'button');
    dropdownItemB.innerHTML = 'Not Action';
    dropdownList.appendChild(dropdownItemB);

    



    /*
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
    */
    



    //Test för sidebar dropdown collapse
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