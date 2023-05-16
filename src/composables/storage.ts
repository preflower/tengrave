interface ILocalStorage {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
  clear: () => void
}

interface IStorage {
  storage: ILocalStorage
  session?: IStorage
  get: <T = any>(key: string) => T | null
  set: (key: string, value: any) => void
  remove: (key: string) => void
  clear: () => void
}

class Storage implements IStorage {
  storage: ILocalStorage
  session: IStorage

  constructor (storage: 'local' | 'session') {
    if (storage === 'session') {
      this.storage = window.sessionStorage
      this.session = this
    } else {
      this.storage = window.localStorage
      this.session = new Storage('session')
    }
  }

  get<T = any>(key: string): T | null {
    const value = this.storage.getItem(key)

    if (typeof value !== 'string') {
      return value
    }

    try {
      return JSON.parse(value)
    } catch (e) {
      // @ts-expect-error
      // 无法解析的数据直接返回原数据
      return value
    }
  }

  set (key: string, value: any) {
    value = JSON.stringify(value)
    this.storage.setItem(key, value)
  }

  remove (key: string) {
    this.storage.removeItem(key)
  }

  clear () {
    this.storage.clear()
  }
}

export default new Storage('local')
