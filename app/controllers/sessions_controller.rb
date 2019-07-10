class SessionsController < ApplicationController

	def home
		if user_signed_in?
			@user = current_user
			render :home
		else
			redirect_to welcome_path
		end
	end

	def welcome
		if user_signed_in?
			redirect_to home_path
		else
			render :welcome
		end
	end
end
