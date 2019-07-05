class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :full_name
      t.text :gender
      t.text :email
      t.text :password_digest
      t.date :birth_date
      t.string :cep
      t.string :street
      t.string :number
      t.string :district
      t.string :complement
      t.string :city

      t.timestamps
    end
  end
end
