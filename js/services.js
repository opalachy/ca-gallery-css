'use strict'

var gProjectNames = ['Touch the num', 'In-Picture', 'Minesweeper', 'Bookshop'];
var gTitle = ['Touch the number in order', 'Choose the correct picture', 'Exposed the clear field and revil the mines', 'This is a book store'];
var gProjects;


function _createProject(title) {
    return {
        id: title,
        name: title,
        title: getTitle(),
        desc: makeLorem(),
        url: getUrl(title),

    }
}

function createProjects() {
   var projects = []
    for (var i = 0; i < gProjectNames.length; i++) {
        projects.push(_createProject(gProjectNames[i]));
    }
    gProjects = projects;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getUrl(title){
return (`img/${title}.JPG`);
}

function getProjects(){
    return gProjects;
}

function getProjectById(projectId) {
    var projectIdx = gProjects.findIndex(function (project) {
        return projectId === project.id;
    });
    return gProjects[projectIdx];
}

function getTitle(){
    return gTitle.shift();
}
