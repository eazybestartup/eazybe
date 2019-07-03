class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :full_name
      t.text :last_name
      t.text :email
      t.text :password_digest
      t.date :birth_date
      t.string :cep
      t.string :street
      t.string :number
      t.string :district
      t.string :complement
      t.string city

      t.timestamps
    end
  end
end
