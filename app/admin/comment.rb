ActiveAdmin.register Comment  do

   
  index do  
    column "Šifra komentarja", :id
    column :blog_id
    column :name
    column :email
    column :comment
    column :created_at
    column :updated_at
    	default_actions
    	#selectable_column
    		
    	
   
   end  
end

