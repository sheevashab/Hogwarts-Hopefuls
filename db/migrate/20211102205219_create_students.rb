class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :pet
      t.string :patronus
      t.string :img_url
      t.references :user, null: false, foreign_key: true
      t.references :house, null: false, foreign_key: true
      t.references :spell, null: false, foreign_key: true

      t.timestamps
    end
  end
end
