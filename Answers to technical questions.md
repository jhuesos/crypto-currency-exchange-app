# Answers to technical questions

**1. How long did you spend on the coding assignment? What would you add to your
solution if you had more time? If you didn't spend much time on the coding
assignment then use this as an opportunity to explain what you would add.**

I spent around 5 hours. The solution is missing lots of basic functionality
like error-handling, more test coverage, validation, better styling among others.
I am assuming that the proxy server I created is only for development purposes only,
but the client app is lacking any type of common security protections against
XSS or CSRF attacks. All these things are completely must-haves in a real
application but I decided to timebox this test as I would need 2 or 3 times the
time I spent to wrap this up nicely.

**2. What was the most useful feature that was added to the latest version of
your language of choice? Please include a snippet of code that shows how you've
used it.**

I would say `async` functions. It helps to make asynchronous code
easier to read and reduce the number _promise-chaining-hell_.

A code that looks like this:

```js
const foo = () =>
  fetch('/api')
    .then(response => response.json())
    // API response is in the form {data: {...}}
    .then(({ data }) => data).
    catch(error => /* Do something meaning full with the error */);
```

It becomes:

```js
const foo = async () => {
    try {
        const response = await fetch('/api');
        const responseJson = await response.json();
        const {data} = responseJson;
        return data;
    } catch (error) {
       /* Do something meaning full with the error */
    }
}
```

**3. How would you track down a performance issue in production? Have you ever
had to do this?**

It depends of the issue: memory, loading time, rendering performance. For all
these issues usually the browser provides tools for it. Chrome tools especially 
are very advanced and features like the Performance tab with timelines and 
memory snapshots are incredible useful. Or you can track real customer performance 
using the `UserTimingAPI` with things like `performance.mark()` and 
`performance.measure()`.

I had to do this in the past with rendering performance with IE11 and luckily
it supports some of the most basic performance tools. I could add some marks
to try to isolate where the issue resided and ignore network-related delays.

**4. What was the latest technical book you have read or tech conference
you have been to? What did you learn?**

I have not attended any conference recently or read any book. I read lots of
articles online but I find that there are not so many books these days that covers
front-end topics that are not obsolete or quickly out-of-date. The last online course
I finished online was about Progressive Web Applications and I found it 
fascinating. Service-workers are a technology that opens the door to make
webapps to really behave closer and closer to native mobile apps.

**5. What do you think about this technical assessment?**

I understand why the requirements are vague, so candidates can ask questions
and leave freedom for them to come up with creative solutions (or make mistakes).
But I prefer when they are more focused as I always end up with the impression
that maybe I did too much/too less work :(. 

**6. Please, describe yourself using JSON.**

```json
{
  "name": "Jaime Vega Martinez",
  "nationality": "Spanish",
  "age": 36,
  "address": {
    "street": "My street",
    "postcode": "My postal code",
    "city": "Amsterdam"
  },
  "education": "Master in Computer Engineering",
  "phone": "+31600000000",
  "personalWebsite": "https://www.jvega.dev",
  "linkedInProfile": "https://linkedin.com/in/jvegadev",
  "hobbies": ["traveling", "movies", "music concert"]
}
```
