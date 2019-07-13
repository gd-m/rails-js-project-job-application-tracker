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