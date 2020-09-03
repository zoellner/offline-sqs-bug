const AWS = require('aws-sdk');

exports.handler = async function handleEvent(event) {
  console.log(event);
  return true;
}
