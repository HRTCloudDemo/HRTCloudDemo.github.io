---
layout: lab
title: Extend your Chat Application with Mood Indication - Simple Microservice
---

## Purpose

The goal of this exercise is to enhance your chat app so that it indicates the mood of a chat partner.

The tone analyzer app that you deployed in the ["Consume a Cloud Service"]({% link _labs/003/index.markdown %}) exercise will now take the role of a micro service. It provides an API via the route `/tone`, which can be accessed via a POST request with `Content-Type: application/json`.

The body of the POST request should look like this:

```json
{
  "texts": ["I do not like what I see", "I like very much what you have said."]
}
```

Depending on your implementation you can pass the content of one or more (English language) chat lines in the "texts" property.

The service will return a response JSON that does look like this:

```json
{
  "mood": "unhappy"
}
```

The `mood` property will either be "`happy`" or "`unhappy`". You can use this value to indicate the chat partner's mood in your application.

## References
* [Source code of the Tone Analyzer application](https://github.com/HRTCloudDemo/HRTToneDemo)
* [Watson Tone Analyzer Home Page](https://www.ibm.com/watson/services/tone-analyzer/)
* [Watson Tone Analyzer Documentation](https://console.bluemix.net/docs/services/tone-analyzer/index.html#about)
* [Request package to call REST APIs from Node.js](https://github.com/request/request)
* [Fetch API to call REST APIs from a web page](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
