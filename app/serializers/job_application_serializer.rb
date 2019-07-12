class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id , :date, :company_name, :job_title
  belongs_to :user
end
