class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :user_show]

  # GET /students
  def index
    @students = Student.all

    render json: @students, include:[:house, :spell, {user:{only: :username}}]
  end

  # GET /students/1
  def show
    render json: @student
  end

  def user_show
    @student = @current_user.student
    render json: @student, include:[:house, :spell, {user:{only: :username}}]
  end
  # POST /students
  def create
    @student = Student.new(student_params)
    @student.user = @current_user
    @student.spell = Spell.all.sample
    

    if @student.save
      render json: @student, include:[:house, :spell, {user:{only: :username}}], status: :created
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /students/1
  def update
    @student = @current_user.student
    if @student.update(student_params)
      render json: @student, include:[:house, :spell, {user:{only: :username}}]
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students/1
  def destroy
    @student.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      @student = Student.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def student_params
      params.require(:student).permit(:pet, :patronus, :img_url, :user_id, :house_id, :spell_id)
    end
end
