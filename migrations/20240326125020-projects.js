// eslint-disable-next-line @typescript-eslint/no-var-requires
{
  /*const { faker } = require('@faker-js/faker')

const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]

const stack = [
  'HTML, CSS, JavaSript, Node.js, React, MongoDB',
  'Python',
  'C#',
  'C++',
  'Java',
  'PHP',
]
const team = ['5 человек', '4 человека', '7 человек', '3 человека']
const images = [
  '/img/projects/proj-1.png',
  '/img/projects/proj-2.png',
  '/img/projects/proj-3.png',
  '/img/projects/proj-4.png',
  '/img/projects/proj-5.png',
]*/
}

module.exports = {
  async up(db) {
    db.createCollection('projects')
    {
      /*
    return db.collection('projects').insertMany(
      [...Array(50)].map(() => ({
        name: 'Проект № ' + (Math.floor(Math.random() * (100 - 1)) + 1),
        description:
          'Ключевые слова или краткое описание или имя автора/команды',
        stack: getRandomArrayValue(stack),
        date: faker.date.betweens({
          from: '2022-01-01',
          to: '2024-03-28',
          count: 2,
        }),
        team: getRandomArrayValue(team),
        img: getRandomArrayValue(images),
      }))
    )*/
    }
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
  },

  async down(db) {
    return db.collection('projects').updateMany([])
  },
}
