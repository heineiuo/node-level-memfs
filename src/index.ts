import { Database, Options } from 'node-level'

export interface MemoryOptions {}

export default class MemoryDatabase extends Database {
  constructor(options: MemoryOptions) {
    const dbpath = '/'
    super(dbpath, options)
  }
}
