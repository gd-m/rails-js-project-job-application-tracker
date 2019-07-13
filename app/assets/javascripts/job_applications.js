$(function() {
	console.log('job_application.js is loaded!')
	allJobApplicationClick();
})

function allJobApplicationClick() {
	$('#job-application-data').on('click', function(){
		event.preventDefault();
		getApplications();
	})
}

function getApplications() {

}

class JobApplication {
	constructor(obj) {
		this.id = obj.id;
		this.date = obj.date;
		this.company_name = obj.company_name;
		this.job_title = obj.job_title;
	}
}
