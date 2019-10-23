const { MemoryDatabase } = require('../build')

async function main() {
  try {
    const db = new MemoryDatabase()
    console.log(db)
    await db.ok()
    await db.put('hello', 'world')

    console.log(`${await db.get('hello')}`)
  } catch (e) {
    console.log(e)
  }
}

main()
