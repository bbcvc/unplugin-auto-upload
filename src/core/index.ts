import { createUnplugin } from 'unplugin'
import type { Options } from '../types'

export default createUnplugin<Options | undefined>(options => ({
  name: 'unplugin-auto-upload',
  enforce: 'pre',
  transformInclude(id) {
    return id.endsWith('.vue')
  },
  transform(code) {
    // if (code.includes('@cdn'))
    // return code.replace('@cdn/demo.jpg', 'https://telegraph-image-4y1.pages.dev/file/e3f59e5a40ef3fa2d9659.jpg')
    return code
  },
}))
