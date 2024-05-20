/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/no-var-requires
/*const { faker } = require('@faker-js/faker')

const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]

const nameCompleted = [
  'Конкурс проектов "ЯСделяль" 2023 I полугодие',
  'Конкурс проектов "ЯСделяль" 2023 II полугодие',
]
const nameCurrent = [
  'Конкурс проектов "ЯСделяль" 2024 I полугодие',
  'Конкурс проектов "ЯСделяль" 2024 II полугодие',
  'Конкурс проектов "ЯСделяль" 2025 I полугодие',
]

const description = [
  'Приглашаем участников представить свои проекты, направленные на решение актуальных задач в сфере информационных технологий. От умных приложений до систем искусственного интеллекта - мы призываем разработчиков и инженеров воплощать свои самые смелые идеи в жизнь. Признание экспертов и возможность внедрения проекта в реальное дело ждут победителей. Стремитесь к новаторству и присоединяйтесь к нам в создании будущего IT-мира!',
  'Этот конкурс направлен на поиск и поддержку проектов, которые используют информационные технологии для улучшения образовательного процесса и научных исследований. Мы ищем идеи, которые могут изменить образовательную среду, расширить доступ к знаниям и повысить качество обучения. Если ваш проект способен революционизировать образование или научные открытия, присоединяйтесь к нашему конкурсу и дайте своей идее шанс изменить мир к лучшему.',
]
const images = [
  '/img/projects/proj-1.png',
  '/img/projects/proj-2.png',
  '/img/projects/proj-3.png',
  '/img/projects/proj-4.png',
  '/img/projects/proj-5.png',
]*/

module.exports = {
  async up(db) {
    db.createCollection('competition')
    /* return db.collection('competition').insertMany(
      [...Array(25)].map(() => ({
        name: getRandomArrayValue(nameCompleted),
        description: getRandomArrayValue(description),
        date: faker.date.betweens({
          from: '2023-03-28',
          to: '2024-01-28',
          count: 2,
        }),
        status: 'completed',
        file: '/files/competition-1.docx',
        img: [''],
      })),
      [...Array(25)].map(() => ({
        name: getRandomArrayValue(nameCurrent),
        description: getRandomArrayValue(description),
        date: faker.date.betweens({
          from: '2024-02-01',
          to: '2025-01-28',
          count: 2,
        }),
        status: 'current',
        file: '/files/competition-1.docx',
        img: images,
      }))
    )*/
  },

  async down(db) {
    return db.collection('competition').updateMany([])
  },
}
