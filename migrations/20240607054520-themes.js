/*const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)]
const status = ['free', 'busy']*/

module.exports = {
  async up(db) {
    /*{
      return db.collection('themes').insertMany(
        [...Array(10)].map(() => ({
          name: 'Разработка и использование алгоритмов рекомендаций в электронной коммерции',
          description:
            // eslint-disable-next-line max-len, max-len
            'Исследование алгоритмов рекомендаций и их влияния на пользовательский опыт в онлайн-торговле.
            Оценка различных методов и их эффективности в персонализации предложений.
            Ключевые аспекты: Технические аспекты алгоритмов, методы машинного обучения,
            примеры успешных внедрений, проблемы и решения.',
          status: getRandomArrayValue(status),
        }))
      )
    }*/
    db.createCollection('themes')
  },

  async down(db) {
    return db.collection('themes').updateMany([])
  },
}
