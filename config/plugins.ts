module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  ckeditor: true,
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('S3_ACCESS_KEY_ID', 'DO003QBBUGVHADFRAHAG'),
        secretAccessKey: env('S3_ACCESS_SECRET', 'd/9tIN67jgm5C9BoABDFm9+c11zZ7YvciEvDTPepJvo'),
        region: env('S3_REGION', 'us-east-1'),
        params: {
          Bucket: env('S3_BUCKET', '808event-uploads'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
