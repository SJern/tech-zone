Rails.application.routes.draw do
  root to: "static_pages#home"
  namespace :api, defaults: {format: :json} do
    resources :attendee, only:[:index]
  end
end
