class JobApplicationsController < ApplicationController
	def index
		if user_signed_in?
			@user = current_user
			@job_applications = JobApplication.all.each do |app|
				app.user_id = current_user.id
			end
			respond_to do |f|
				f.html {render :index}
				f.json {render json: @job_applications}
			end
		else 
			redirect_to root_path
		end
	end

	def new
		if user_signed_in?
			@job_application = JobApplication.new
		else 
			redirect_to root_path
		end
	end

	def create
		@job_application = current_user.job_applications.build(job_application_params)
		if @job_application.save
			redirect_to job_application_path(@job_application)
		else
			render :new
		end
	end

	private
	def job_application_params
		params.require(:job_application).permit(:date, :company_name, :job_title)	
	end
end
