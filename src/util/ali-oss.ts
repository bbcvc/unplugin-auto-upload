import path from 'node:path'
import type OSS from 'ali-oss'

const upload = async (client: OSS, fileUrl: string) => {
  const fileName = path.basename(fileUrl)
  await client.put(fileName, fileUrl)
  await client.putACL(fileName, 'public-read')
}

export const uploadFileList = (client: OSS, fileList?: Array<string>) => {
  return Promise.all(fileList?.map(fileUrl => upload(client, fileUrl)) || [])
}
