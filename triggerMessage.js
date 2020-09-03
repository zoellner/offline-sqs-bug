const AWS = require('aws-sdk');

const queueName = 'test-queue';
const endpoint = 'http://localhost:9300';

new AWS.SQS({
  region: 'us-east-1',
  endpoint,
  accessKeyId: 'root',
  secretAccessKey: 'root'
})
.sendMessage({
  MessageBody: 'test',
  QueueUrl: `${endpoint}/queue/${queueName}`
})
.promise()
.then(console.log)
.catch(console.error);
