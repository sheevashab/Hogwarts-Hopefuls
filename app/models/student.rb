class Student < ApplicationRecord
  belongs_to :user
  has_one :user
  belongs_to :house
  has_one :house
  belongs_to :spell
  has_one :spell
end
