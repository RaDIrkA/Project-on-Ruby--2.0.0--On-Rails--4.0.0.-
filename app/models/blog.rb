class Blog < ActiveRecord::Base
	has_many :comments, :dependent => :destroy
	validates :Name, :subject, :presence => { :message => "polje mora biti izpolnjeno"}



end
