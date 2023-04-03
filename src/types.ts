import type OSS from 'ali-oss'

export interface Options {
  // 指定文件后缀
  ext?: string[]
  /**
   * your save server
  */
  client: OSS
  base: string
}

