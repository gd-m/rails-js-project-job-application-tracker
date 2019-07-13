$(function() {
	console.log('job_application.js is loaded!')
	allJobApplicationClick();
})

function allJobApplicationClick() {
	console.log('hitting allJobApplicationClick')
	$('#job-application-data').on('click', function(){
		event.preventDefault();
		getApplications();
	})
}

function getApplications() {
 console.log('hitting getApplication function!')
 fetch (`/job_applications.json`)
 .then((res) => res.json())
 .then(jobs => {
 	$('#all-applications').html('')
 	jobs.forEach(function(job) {
 		let newJob = new JobApplication(job)
 		let jobHtml = newJob.applicationHTML();
 		$('#all-applications').append(jobHtml)
 	})
 })
}

class JobApplication {
	constructor(obj) {
		this.id = obj.id;
		this.date = obj.date;
		this.company_name = obj.company_name;
		this.job_title = obj.job_title;
	}
}

JobApplication.prototype.applicationHTML = function() {
	return(`
		<a href="/job_applications/${this.id}" data-id="${this.id} class="list-group-item list-group-item-action flex-column align-items-start active">
				    <div class="d-flex w-100 justify-content-between">
				      <h5 class="mb-1">${this.company_name}</h5>
				      <small>${this.date}</small>
				    </div>
				    <p class="mb-1">${this.job_title}</small>
				  </a>
		`)
}