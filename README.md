<div align="center"> <img align="center" alt="Chords" src="Resources\Logos\Main-Logo.png" height='500' width='500'></div>

# Chords

 Chords is a browser extension which will stream music according to the mood of the user.

## Technology Stack used:


<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.tensorflow.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/> </a> </p>


## About the project

The basic idea is to develop a browser extension from scratch that will detect the mood of the user based on the input events emitted by the user and will stream in-browser music.
It will consist all the basic music controls, basically when an user enters some keywords, an input event will be emitted, the input keywords will serve the purpose of input for 
the machine learning model and the model will process the output mood (i.e. Happy, Romantic), all this output will be processed locally, on the browser itself, so there will be no
privacy concerns. NodeJs server will serve as backend and will stream music either through http or web socket protocol through mongoDB database.


## Resources

Read the article about open source contribution - https://ayush-addhyan.medium.com/how-to-contribute-to-open-source-d4e6bded1770
