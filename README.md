# Demo of bug in serverless-offline-sqs

Using node `v12.13.0` (only tested one, probably doesn't matter)

Install dependencies, start local SQS Queue, and start serverless-offline stack

```
npm i
docker-compose start
npm start
```

Then trigger messages twice using
```
node triggerMessage.js
```

The first one will run fine, the second one throws error

```
offline: TypeError: Cannot read property 'defineService' of undefined
    at Object.<anonymous> (/Users/test/code/offline-sqs-bug/node_modules/aws-sdk/clients/sts.js:7:19)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/test/code/offline-sqs-bug/node_modules/aws-sdk/lib/credentials/temporary_credentials.js:2:11)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/test/code/offline-sqs-bug/node_modules/aws-sdk/lib/node_loader.js:33:1)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/test/code/offline-sqs-bug/node_modules/aws-sdk/lib/aws.js:1:1)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/test/code/offline-sqs-bug/testClass.js:1:13)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/test/code/offline-sqs-bug/index.js:1:21)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at /Users/test/code/offline-sqs-bug/node_modules/serverless-offline/dist/lambda/handler-runner/in-process-runner/InProcessRunner.js:80:133
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at InProcessRunner.run (/Users/test/code/offline-sqs-bug/node_modules/serverless-offline/dist/lambda/handler-runner/in-process-runner/InProcessRunner.js:80:9)
```
