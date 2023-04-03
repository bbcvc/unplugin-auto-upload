import OSS from 'ali-oss'

export const client = new OSS({
  region: 'your region',
  accessKeyId: 'your accessKeyId',
  accessKeySecret: 'your accessKeySecret',
  bucket: 'your bucket',
})
