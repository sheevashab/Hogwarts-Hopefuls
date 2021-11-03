class SpellsController < ApplicationController
  before_action :set_spell, only: :show
  # GET /spells
  def index
    @spells = Spell.all

    render json: @spells
  end

  # GET /spells/1
  def show
    render json: @spell
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spell
      @spell = Spell.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def spell_params
      params.require(:spell).permit(:name, :description)
    end
end
