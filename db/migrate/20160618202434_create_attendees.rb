class CreateAttendees < ActiveRecord::Migration
  def change
    create_table :attendees do |t|
      t.integer :event_id, null: false
      t.string :name, null: false
      t.string :bootcamp, null: false
      t.timestamps null: false
    end
    add_index :attendees, :event_id
  end
end
