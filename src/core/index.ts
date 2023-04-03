import path from 'node:path'
import { createUnplugin } from 'unplugin'
import type { Options } from '../types'
import { uploadFileList } from '../util/ali-oss'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-auto-upload',
  enforce: 'pre',
  transformInclude(id) {
    return id.endsWith('vue')
  },
  async transform(code, id) {
    const filelist = code.match(/(?<=(img[^>]*src="))[^"]*/g)
    await uploadFileList(options.client, filelist?.map(file => path.resolve(id, '../', file)))
    const data = code.replace(/(?<=(img[^>]*src="))[^"]*/g, $1 => new URL(path.basename($1), options.base).toString())
    return data
  },
  vite: {
    apply: 'build',
  },
}))

