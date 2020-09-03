const AWS = require('aws-sdk')

class TestClass {
  constructor() {
    this.client = new AWS.SQS();
  }
}

module.exports = {TestClass};
