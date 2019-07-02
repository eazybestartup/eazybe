class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :name
      t.text :last_name
      t.text :email
      t.text :password_digest
      t.date :birth_date

      t.timestamps
    end
  end
end
