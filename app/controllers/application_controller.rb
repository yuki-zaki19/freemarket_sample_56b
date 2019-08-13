class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:phone_number])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:last_name])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:last_name_kana])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name_kana])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:postal_code])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:prefecture])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:city])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:address])
      devise_parameter_sanitizer.permit(:sign_up, keys: [:building])
    end
end


