class CreateJobApplications < ActiveRecord::Migration[5.2]
  def change
    create_table :job_applications do |t|
    	t.string :company_name
    	t.string :job_title
    	t.datetime :date
    	t.integer :user_id

      t.timestamps
    end
  end
end
