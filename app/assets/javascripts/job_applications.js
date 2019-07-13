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
 $(document).on('click', ".application-details", function() {
		event.preventDefault();

		let id = $(this).attr('data-id');
		fetch(`/job_applications/${id}.json`)
		.then(res => res.json())
		.then(job => {
			let newJob = new JobApplication(job);
			let jobHtml = newJob.applicationShowHtml();
			$('#show-details').html('')
			$('#show-details').append(jobHtml);

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
		<a href="/job_applications/${this.id}" data-id="${this.id}" class=" application-details list-group-item list-group-item-action flex-column align-items-start">
				    <div class="d-flex w-100 justify-content-between">
				      <h5 class="mb-1">${this.company_name}</h5>
				      <small>${this.date}</small>
				    </div>
				    <p class="mb-1">${this.job_title}</small>
				  </a>
		`)
}

JobApplication.prototype.applicationShowHtml = function () {
	return(`
		<h4>${this.company_name}</h4>
		<p>${this.date}</p>
		<h5>${this.job_title}</h5>
		
		`)
}
