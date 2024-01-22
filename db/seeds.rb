require 'faker'

# Création de 10 utilisateurs et d'articles associés
10.times do
  user = User.create(
    firstName: Faker::Name.first_name,
    lastName: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )

  article = Article.create(
    title: Faker::Lorem.sentence,
    background: Faker::Lorem.sentence,
    user_id: user.id,
    body: Faker::Lorem.paragraphs.join("\n\n")
  )

  rand(1..5).times do
    Review.create(
      comment: Faker::Quote.famous_last_words,
      rating: rand(1..5),
      article_id: article.id 
    )
  end
end
