import { Database, Options } from '../../node-level'
import { fs } from 'memfs'

export class MemoryOptions {
  debug = false
}

class MemEnv {
  /**
   * get current time
   */
  now() {
    return Number(process.hrtime.bigint()) / Math.pow(10, 9)
  }

  access(dbpath: string): Promise<void> {
    return fs.promises.access(dbpath, fs.constants.W_OK)
  }

  mkdir(dbpath: string): Promise<void> {
    return fs.promises.mkdir(dbpath, { recursive: true })
  }

  writeFile = fs.promises.writeFile
  readFile = fs.promises.readFile
  open = fs.promises.open
  rename = fs.promises.rename
  unlink = fs.promises.unlink

  readdir(dbpath: string) {
    return fs.promises.readdir(dbpath, { withFileTypes: true })
  }
}

export class MemoryDatabase extends Database {
  constructor(memOptions: MemoryOptions = new MemoryOptions()) {
    const dbpath = '/'
    const options = new Options()
    Object.assign(options, memOptions, {
      env: new MemEnv(),
    })
    console.log(options)
    super(dbpath, options)
  }
}
