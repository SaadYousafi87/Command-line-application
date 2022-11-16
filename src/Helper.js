

function addManager(manager){
    var section = document.createElement("section");
    var heading = document.createElement("div");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    var detail = document.createElement("div");
    var id = document.createElement("p");
    var email = document.createElement("a");
    var officeNum = document.createElement("p");

    section.setAttribute("class", "team-member");
    heading.setAttribute("class", "team-heading");
    h2.setAttribute("class", "name");
    h2.value = manager.getName();
    h3.setAttribute("class", "role");
    h3.value = manager.getRole();
    detail.setAttribute("team-info");
    id.value = manager.gerId();
    email.setAttribute("href", "mailto:"+manager.getEmail());
    email.value = manager.getEmail();
    officeNum.value = "Office number: "+manager.getOfficeNumber();

    heading.append(h2, h3);
    detail.append(id, email, officeNum);
    var sectionTop = document.getElementsByClassName("top-layer");
    sectionTop.append(heading, detail);
    main.appendChild(sectionTop);  
}

function addEngineer(engineer){
    var section = document.createElement("section");
    var heading = document.createElement("div");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    var detail = document.createElement("div");
    var id = document.createElement("p");
    var email = document.createElement("a");
    var github = document.createElement("a");

    section .setAttribute("class", "team-member");
    heading.setAttribute("class", "team-heading");
    h2.setAttribute("class", "name");
    h2.value = engineer.getName();
    h3.setAttribute("class", "role");
    h3.value = engineer.getRole();
    detail.setAttribute("class", "team-info");
    id.value = engineer.getId();
    email.setAttribute("href", "mailto:"+engineer.getEmail());
    email.value = engineer.getEmail();
    github.setAttribute("href", "www."+engineer.getGithub()+".github.com");
    github.value = "GitHub: "+engineer.getGithub();

    heading.append(h2, h3);
    detail.append(id, email, github);
    var sectionTop = document.getElementsByClassName("top-layer");
    sectionTop.append(heading, detail);
    main.appendChild(sectionTop);
}

function addIntern(intern){
    var section = document.createElement("section");
    var heading = document.createElement("div");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    var detail = document.createElement("div");
    var id = document.createElement("p");
    var email = document.createElement("a");
    var school = document.createElement("p");

    section.setAttribute("class", "team-member");
    heading.setAttribute("class", "team-heading");
    h2.setAttribute("class", "name");
    h2.value = intern.getName();
    h3.setAttribute("class", "role");
    h3.value = intern.getRole();
    detail.setAttribute("class", "team-info");
    id.value = intern.getId();
    email.setAttribute("href", "mailto:"+intern.getEmail());
    email.value = intern.getEmail();
    school.value = intern.getSchool();

    heading.append(h2, h3);
    detail.append(id, email, school);
    var sectionTop = document.getElementsByClassName("top-layer");
    sectionTop.append(heading, detail);
    main.appendChild(sectionTop);
}

module.exports = {
    addManager,
    addEngineer,
    addIntern
};
