<div align="center"> <img align="center" alt="Chords" src="Resources\Logos\icon128.png" height='150' width='350'></div>

# Chords

 Chords is a browser extension which will stream music according to the mood of the user.

## Technology Stack used:

![Main-Logo](https://user-images.githubusercontent.com/52379890/110642398-fe0b3b00-81d8-11eb-9f52-1f73f630db77.png)


## About the project

The basic idea is to develop a browser extension from scratch that will detect the mood of the user based on the input events emitted by the user and will stream in-browser music.
It will consist all the basic music controls, basically when an user enters some keywords, an input event will be emitted, the input keywords will serve the purpose of input for 
the machine learning model and the model will process the output mood (i.e. Happy, Romantic), all this output will be processed locally, on the browser itself, so there will be no
privacy concerns. NodeJs server will serve as backend and will stream music either through http or web socket protocol through mongoDB database.


## Resources

Read the article about open source contribution - https://ayush-addhyan.medium.com/how-to-contribute-to-open-source-d4e6bded1770


