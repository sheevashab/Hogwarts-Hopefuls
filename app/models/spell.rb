class Spell < ApplicationRecord
  has_many :students, dependent: :destroy
end
