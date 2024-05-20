/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/no-var-requires
{
  /*const { faker } = require('@faker-js/faker')

const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]

const name = [
  'Воркшоп "Применение нейронных сетей в обработке естественного языка"',
  'Мастер-класс "Глубокое обучение с TensorFlow"',
  'Конференция "Блокчейн и анализ данных"',
  'Вебинар "Интерпретируемость моделей машинного обучения"',
  'Конференция "Большие данные и облачные технологии"',
  'Семинар "Новые подходы в анализе данных"',
  'Семинар "Биг-дата архитектуры: от проектирования к внедрению"',
  'Вебинар "Тенденции в области машинного обучения и искусственного интеллекта"',
  'Воркшоп "Технологии машинного обучения в автоматизации бизнес-процессов"',
]
const description = [
  'Приглашаем всех желающих принять участие в нашем семинаре, посвященном новым подходам в анализе данных. В рамках мероприятия будут представлены ключевые тренды и инновационные методы в области анализа данных, а также обсуждены возможности и вызовы, стоящие перед исследователями и практиками в этой области.',
  'Присоединяйтесь к нашему вебинару, посвященному важной теме интерпретируемости моделей машинного обучения. Мы рассмотрим методы и инструменты для понимания принятия решений моделями машинного обучения и их применение в реальных задачах.',
  'Эта конференция объединяет специалистов в области блокчейна и анализа данных для обсуждения последних тенденций и возможностей, которые предоставляют блокчейн-технологии для анализа и обработки данных.',
  'На этом мастер-классе вы познакомитесь с основами глубокого обучения и практическими аспектами работы с библиотекой TensorFlow. Участники получат навыки построения и обучения нейронных сетей для решения различных задач.',
  'В этом воркшопе мы рассмотрим применение нейронных сетей в задачах обработки естественного языка. Участники получат практические навыки построения моделей для анализа текста, распознавания речи и других приложений.',
  'На этом семинаре мы рассмотрим основы проектирования и внедрения биг-дата архитектур для обработки и анализа больших объемов данных. Участники узнают о лучших практиках, архитектурных решениях и инструментах для работы с данными на больших масштабах.',
  'Присоединяйтесь к нашему вебинару, где мы обсудим последние тенденции и инновации в области машинного обучения и искусственного интеллекта. Участники получат представление о направлениях развития и потенциальных приложениях этих технологий.',
  'На этом воркшопе мы рассмотрим применение технологий машинного обучения для автоматизации бизнес-процессов. Участники узнают о возможностях автоматизации рутинных задач, оптимизации бизнес-процессов и повышении эффективности предприятий с помощью алгоритмов машинного обучения.',
]
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
    {
      /*db.createCollection('events')
    return db.collection('events').insertMany(
      [...Array(50)].map(() => ({
        name: getRandomArrayValue(name),
        description: getRandomArrayValue(description),
        date: faker.date.betweens({
          from: '2024-01-01',
          to: '2025-03-28',
          count: 1,
        }),
        img: images,
      }))
    )*/
    }
    db.createCollection('events')
  },

  async down(db) {
    return db.collection('events').updateMany([])
  },
}
