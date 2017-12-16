class CreateResults < ActiveRecord::Migration[5.1]
  def change
    create_table :results do |t|
      t.references :marry, index: true, foreign_key: { to_table: :celebrities }
      t.references :fuck, index: true, foreign_key: { to_table: :celebrities }
      t.references :kill, index: true, foreign_key: { to_table: :celebrities }
      t.timestamps
    end
    
  end
end
