ActiveAdmin.register_page "Dashboard" do




  menu :priority => 1, :label => proc{ I18n.t("active_admin.dashboard") }

  content :title => proc{ I18n.t("active_admin.dashboard") } do
    div :class => "blank_slate_container", :id => "dashboard_default_message" do
   
    end

     
    # Here is an example of a simple dashboard with columns and panels.
    
     columns do
       column do
         panel "Zadnji objavljeni članki je objavil" do
           ul do
             Blog.last(15).map do |blog|
               li link_to(blog.Name, admin_blog_path(blog))

             end
           end
            section "Poglej si" do
                strong { link_to "vse objave", admin_blogs_path }
            end 
         end
       end
     
       column do
         panel "Zadnji objavljeni komentarčki" do
            ul do
                Comment.last(15).map do |comment|
                    li link_to(comment.name, admin_comment_path(comment))
                    end
                end
                section "Poglej si" do     
                    strong { link_to "vse komentarje", admin_comments_path }
                end       
           end
         end

       column do
          panel "Nazadnje registrirani uporabniki" do
            ul do
               User.last(5).map do |user|
                  li link_to(user.email, admin_user_path(user))
              end
            end
                section "poglej vse" do
                strong { link_to "registrirane uporabnike", admin_users_path }
            end
          end
        end  
          
              

       column do
         panel "Informacije" do
           para "Izdelava sistemov in spletnih aplikacij spletko.eu."
           para "Powered by BaytfiX"
         panel "Baytfix system" do
         panel "Version 1.0" do
          para "V -1.0-beta"
        end
          para "Ruby 2.0.0 /on/ Rails 4.0.0"
          para "Create and modify by Blaž Sajovic" 
          para "Info: blaz.sajovic@spletko.eu"
          end  
         end
       end
     end
   
    
  end # content
end


