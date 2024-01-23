require 'http'
require 'faker'
require 'json'

url = 'https://newsapi.org/v2/everything'
users = []

10.times do
  user = User.create(
    firstName: Faker::Name.first_name.dup,
    lastName: Faker::Name.last_name.dup,
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )
  users << user
end

params = {
  q: 'Apple',
  language: 'en',
  sortBy: 'popularity',
  apiKey: 'fe305566d6364e0e8fb8fc8d0c4799e4'
}

response = HTTP.get(url, params: params)


data = JSON.parse(response.body)

articles = data['articles'].first(10)

data['articles'].each do |article_data|

  user = users.sample

  article = Article.create(
    title: article_data['title'],
    background: article_data['urlToImage'],
    user_id: user.id,
    body: article_data['description']
  )
  puts "#{article.title} created"
end
