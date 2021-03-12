<div align="center"> <img align="center" alt="Chords" src="https://user-images.githubusercontent.com/62644568/110687273-560c6680-8206-11eb-8c67-d91815f1356a.png" height='700'width='900'></div>



### When users open their browser a background script will start running. The background script is a script running in the background to handle the majority of browser events that content scripts cannot. Content scripts are purely the content of each page. This background script takes input events on every page the user opened and keeps track of every word and pushes it into a stack. These words are fed as input to the Machine learning model. ML model will process this data and created mood labels. These labels will be stored locally in the browser and get refreshed after the fixed time interval. When a user enables `Chords` music player, the most recent mood is sent to the server and the server responds by sending the right music track according to the request. So the music will be playing.
