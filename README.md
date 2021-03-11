<div align="center"> <img align="center" alt="Chords" src="Resources\Logos\Main-Logo.png" height='500' width='500'></div>

# Chords

Chords is a browser extension which will stream music according to the mood of the user.

## Technology Stack used:


<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="TensorFlow" src="https://img.shields.io/badge/TensorFlow%20-%23FF6F00.svg?&style=for-the-badge&logo=TensorFlow&logoColor=white" />


## About the project

The basic idea is to develop a browser extension from scratch that will detect the mood of the user based on the input events emitted by the user and will stream in-browser music.
It will consist all the basic music controls, basically when an user enters some keywords, an input event will be emitted, the input keywords will serve the purpose of input for 
the machine learning model and the model will process the output mood (i.e. Happy, Romantic), all this output will be processed locally, on the browser itself, so there will be no
privacy concerns. NodeJs server will serve as backend and will stream music either through http or web socket protocol through mongoDB database.

## Table Of Contents

### [How To Contribute](https://ayush-addhyan.medium.com/how-to-contribute-to-open-source-d4e6bded1770 "How To Contribute")<br>
### [Frontend FlowChart](/Documentation/FrontEndFlowChart.md "Frontend FlowChart")<br>
When users open their browser a background script will start running. The background script is a script running in the background to handle the majority of browser events that content scripts cannot. Content scripts are purely the content of each page. This background script takes input events on every page the user opened and keeps track of every word and pushes it into a stack. These words are fed as input to the Machine learning model. ML model will process this data and created mood labels. These labels will be stored locally in the browser and get refreshed after the fixed time interval. When a user enables `Chords` music player, the most recent mood is sent to the server and the server responds by sending the right music track according to the request. So the music will be playing.

### [Backend FlowChart](/Documentation/BackendFlowChart.md "Backend FlowChart")<br>
### [Project FlowChart](/Documentation/ProjectFlowChart.md "Project FlowChart")<br>
### [Frontend Setup](/Documentation/FrontEndSetup.md "Frontend Setup")<br>



## Resources

Read the article about open source contribution - https://ayush-addhyan.medium.com/how-to-contribute-to-open-source-d4e6bded1770
