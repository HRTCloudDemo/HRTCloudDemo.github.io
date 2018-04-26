---
layout: lab
title: Extend your Chat Application with Mood Indication - Simple Microservice
---

## Purpose

Content of this exercise is to enhance your chat app
to indicate the mood of a chat partner.

The Tone Analyzer App that you deployed in the "Consuming Services" exercise will take the role of a
micro service providing an API.

It provides an API via the route

```https://<your tone app>/tone```

which can be accessed via a POST request
(Content-Type: application/JSON)

The request format does look like this:

```
{
  "texts": ["I do not like what I see", "I like very much what you have said."]
}
```

Depending on your implementation you can pass the content of one or more
(English language) chat lines in the "texts" property.

The service will return a response JSON that does look like this:

```
{
    "mood": "unhappy"
}
```

The service will return either "happy" or "unhappy" in the mood property.

You should use this value to indicate the mood in your chat application.

## References
* [Source code of the Tone Analyzer application](https://github.com/HRTCloudDemo/HRTToneDemo)
* [Watson Tone Analyzer Home Page](https://www.ibm.com/watson/services/tone-analyzer/)
* [Watson Tone Analyzer Documentation](https://console.bluemix.net/docs/services/tone-analyzer/index.html#about)
* [Request package to call APIs from Javascript](https://github.com/request/request)
* [Solution Tutorials](https://console.bluemix.net/docs/tutorials/index.html#tutorials)
