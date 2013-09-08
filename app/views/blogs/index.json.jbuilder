json.array!(@blogs) do |blog|
  json.extract! blog, :Name, :subject
  json.url blog_url(blog, format: :json)
end
