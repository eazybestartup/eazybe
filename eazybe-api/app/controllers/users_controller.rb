class UsersController < ApplicationController
    skip_before_action :authenticate_request

    def show
    	@user = User.find(params[:id])
    	if @user
	      render json: {
	      	status: 200,
	      	user: @user.to_json
	      }.to_json
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
	      	user: @user.to_json
	      }.to_json
	    else
	      render json: {
	      	status: 500,
	      	errors: @user.errors
	      }.to_json
      end
    end

    def update
    	@user = ResourceFile.find(params[:id])
    	# @user.last_modified_by_id = @current_user[:id]

	    if @user.update_attributes(user_params)
	      render json: {
	      	status: 200,
	      	user: @user.to_json
	      }.to_json
	    else
	      render json: {
	      	status: 500,
	      	errors: @user.errors
	      }.to_json
	    end
    end

    def destroy
    	if params[:id] and !params[:id].empty?
    		if params[:id].include?(',')
    			User.delete_all params[:id].split(',')
    			render json: {
		      		status: 200
		    	}.to_json
    		else
    			render json: delete_one(params[:id])
    		end
    	else
    		render json: {
		      	status: 404,
		      	errors: 'user not found'
		    }.to_json
    	end
		end
		
		private

		def user_params
			params.require(:user).permit(:name, :last_name, :email, :password, :birth_date)
		end


end