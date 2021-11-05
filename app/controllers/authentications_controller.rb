class AuthenticationsController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by(username: login_params[:username])
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      @token = encode({id: @user.id})
      render json: {
        user: @user.as_json({except: :password_digest, methods: :has_student}),
        token: @token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user, except: :password_digest, methods: :has_student, status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end