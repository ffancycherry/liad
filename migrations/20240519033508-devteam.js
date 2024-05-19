const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]
const images = [
  '/img/projects/proj-1.png',
  '/img/projects/proj-2.png',
  '/img/projects/proj-3.png',
  '/img/projects/proj-4.png',
  '/img/projects/proj-5.png',
]
module.exports = {
  async up(db) {
    return db.collection('devteam').insertMany(
      [...Array(10)].map(() => ({
        name: 'ФИО ',
        position: 'Должность',
        contacts: 'контакты',
        img: getRandomArrayValue(images),
      }))
    )
  },

  async down(db) {
    return db.collection('devteam').updateMany([])
  },
}
