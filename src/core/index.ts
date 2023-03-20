import { createUnplugin } from 'unplugin'
import type { Options } from '../types'

export default createUnplugin<Options | undefined>(options => ({
  name: 'my-unplugin',
  transformInclude(id) {
    return id.endsWith('.ts')
  },
  transform(code) {
    return code.replace('__UNPLUGIN__', `Hello 22! ${options}`)
  },
}))
