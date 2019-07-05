require 'json'
class UsersController < ApplicationController
		# skip_before_action :authenticate_request
		skip_before_action :authenticate_request, only: [:create, :index]
		wrap_parameters :user, include: [:name, :full_name, :email, :password, :password_confirmation, :birth_date, :gender, :cep, :street, :number, :district, :complement, :city]

    def show
    	@user = User.find(params[:id])
    	if @user
	      render json: {
	      	status: 200,
	      	user: @user.as_json(:only => [:name, :full_name, :email, :birth_date, :gender, :cep, :street, :number, :district, :complement, :city])
				}.as_json
	    else
	      render json: {
	      	status: 404,
	      	errors: 'resource file not found'	
	      }.to_json
	    end
    end
   
    def create
      @user = User.new(user_params)
      # @user.created_by_id = @current_user[:id]
   
      if @user.save
	      render json: {
	      	status: 200,
	      	user: @user.as_json
	      }.as_json
	    else
	      render json: {
	      	status: 500,
	      	errors: @user.errors
	      }.as_json
      end
    end

    def update
    	@user = User.find(params[:id])
    	# @user.last_modified_by_id = @current_user[:id]

	    if @user.update_attributes(user_params)
	      render json: {
	      	status: 200,
	      	user: @user.as_json
	      }.as_json
	    else
	      render json: {
	      	status: 500,
	      	errors: @user.errors
	      }.as_json
	    end
    end

    def destroy
				if @user = User.where(:id => params[:id]).first
					 @user.destroy
						render json: {
							status: 200
						}.as_json
    	else
    		render json: {
		      	status: 404,
		      	errors: 'user not found'
		    }.as_json
    	end
		end
		
		private

		def user_params
			params.require(:user).permit(:name, :full_name, :email, :password, :password_confirmation, :birth_date, :gender, :cep, :street, :number, :district, :complement, :city)
		end
end