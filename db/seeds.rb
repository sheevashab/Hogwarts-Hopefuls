Student.destroy_all
House.destroy_all
Spell.destroy_all
User.destroy_all

@admin = User.create!(username: 'sheevashab', email: 'abc@aol.com', password: '12345678')

puts "#{User.count} users created"

@harry = Student.create!(pet: 'owl', patronus: 'stag', img_url: 'http://aribrenner.com/media/images/ari0.jpg', user: @admin, house: @slytherine, spell: @lumos)
@hermione = Student.create!(pet: 'cat', patronus: 'otter', img_url: 'http://i.imgur.com/JRkmvOv.png', user: @admin, house: @ravenclaw, spell: @wingardiumleviosa)
@ron = Student.create!(pet: 'rat', patronus: 'can I even do this spell', img_url: 'https://avatars0.githubusercontent.com/u/12768542?v=4&s=400', user: @admin, house: @hufflepuff, spell: @wingardiumleviosa)
@neville = Student.create!(pet: 'toad', patronus: 'non-corporeal', img_url: 'https://docs.npmjs.com/images/npm.svg', user: @admin, house: @gryffindor, spell: @reparo)
@malfoy = Student.create!(pet: 'Snape', patronus: 'I am incapable', img_url: 'http://uploads.tapatalk-cdn.com/20161123/679e78cd8a276f76f1f962ba2a4c454e.jpg', user: @admin, house: @slytherine, spell: @incendio)

puts "#{Student.count} students created"

@ravenclaw = House.create!(name: 'Ravenclaw', description: 'smarties')
@hufflepuff = House.create!(name: 'Hufflepuff', description: 'sweeties')
@slytherine = House.create!(name: 'Slytherine', description: 'getters')
@gryffindor = House.create!(name: 'Gryffindor', description: 'doers')

puts "#{House.count} houses created"

@wingardiumleviosa = Spell.create!(name: 'Wingardium Leviosa', description: 'float')
@reparo = Spell.create!(name: 'Reparo', description: 'fix')
@alohamora = Spell.create!(name: 'Alohamora', description: 'open')
@flipendo = Spell.create!(name: 'Flipendo', description: 'knockback')
@incendio = Spell.create!(name: 'Incendio', description: 'burn')
@lumos = Spell.create!(name: 'Lumos', description: 'light')

puts "#{Spell.count} spells created"