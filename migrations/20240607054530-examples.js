// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  async up(db) {
    return db.collection('examples').insertMany(
      [...Array(25)].map(() => ({
        name: '/',
        description: '/',
        author: '/',
        theme: '/',
        file: '/files/competition-1.docx',
      }))
    )
    /*db.createCollection('examples')*/
  },

  async down(db) {
    return db.collection('examples').updateMany([])
  },
}
