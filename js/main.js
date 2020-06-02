'use strict'


console.log('Starting up');

function initPage() {
  createProjects();
  renderProjects();
}

function renderProjects() {
  var projects = getProjects();
  var strHtmls = projects.map(function (project) {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="openModal('${project.id}')" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.url}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div> `
  });
  var elDiv = document.querySelector('.row.portfolio');
  elDiv.innerHTML = strHtmls.join('');
}

function openModal(projectId) {
  var project = getProjectById(projectId);
   var strHtmls = `<h2>${project.name}</h2>
  <p class="item-intro text-muted">${project.title}</p>
  <a href="https://opalachy.github.io/Oren-Palachy---1st-Project/">Minesweeper</a>
  <br><img class="img-fluid d-block mx-auto" src="${project.url}" alt="">
  <p>${project.desc}</p> 
   <ul class="list-inline">
  <button class="btn btn-primary" data-dismiss="modal" type="button">
  <i class="fa fa-times"></i>
  Close Project</button>`
  var elDivModal = document.querySelector('.modal-body');
  elDivModal.innerHTML = strHtmls;
}

function sendEmail(){
  var elInpEmail = document.querySelector('.form-control.email').value; 
  var elInpSubject = document.querySelector('.form-control.subject').value; 
  var elInpTextArea = document.querySelector('.form-control.textArea').value; 
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${elInpEmail}&su=${elInpSubject}&b
  ody=${elInpTextArea}`,"_blank")
}




