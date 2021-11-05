class Student < ApplicationRecord
  belongs_to :user
  belongs_to :house
  belongs_to :spell

  validates :user_id, uniqueness: true
end