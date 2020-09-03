const {TestClass} = require('./testClass');

exports.handler = async function handleEvent(event) {
  console.log(event);
  return true;
}
