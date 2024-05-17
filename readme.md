Problem : Implement a file upload and notifications system:

you are to build a file upload and processing system. when a user uploads a file. the system should :
- [ ] Emit an event indicating that the file upload has started.
- [ ] Emit an event when an error occurs. ( the error should be the custom error created.)
- [ ] Emit an event when the file upload is complete.
- [ ] emit and event when the file is processing has started.
- [ ] emit and event the when the file processing is complete.

Objective: create a nodejs application with a single source file ( index.js) that handles these events using the event listeners, and providing appropriate notifications at each step.

In this system, you are to implement proper error handling.
you will create a custom error that inherits from the Error class and
and returns errors related to any error of your choice that you think can occur. for example you can sya that you want your error class to be thrown when a random number is generated that is maybe greater tha 0.8
if the number is les than 0.8, then the upload process should ake place and the notification sent.


## MY WORK IS IN THE EXCERCISE.CJS FILE