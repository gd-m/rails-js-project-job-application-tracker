Rails.application.routes.draw do
  resources :job_applications
	root "sessions#welcome" , as: 'welcome'
	get '/home', to: 'sessions#home', as: 'home'
  devise_for :users, :controllers => { registrations: 'registrations'}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
