# CWRU Bootcamp Project 3 - Fancy Chef: A React Browser Game

## Description

1. In this project, our primary goal was to create a simple game that could be played in the browser. After logging in, and upon completing a match of the game, the user's high score will be saved to a global leaderboard where players can compete with other users.

2. This project is a MERN stack application meaning it uses the technologies of M: MongoDB, E: Express, R: ReactJS, and N: Node in tandem to create a seamless user experience. However, quite a few other technologies were used on top of this. You'll find the CSS framework Bootstrap is used for the styling on the page, along with some other custom CSS to get the retro look and feel we were trying to achieve. Last, but not least, for the first time, we ended up using a game framework called PhaserJS to handle the game's logic.
                                                                       
3. Behind the scenes this time, we use the bcrypt package again in tandem with JSON web token for authentication to keep sensitive data safe and encrypted in case of any hack to protect our user's accounts. High scores, passwords, and any other data are extremely important so we wanted to do what we could to keep it all intact.

7. As soon as you launch the site, you are greeted with a login or sign-up page. These are fully functional and once you are signed in, you will be automatically directed to the game page where you can play to your heart's content.

8. The game is relatively simple, only using the left, right, and up arrow keys to move our character. The goal of the game is to collect as many stars as possible without getting hit by an increasing number of projectiles. As you collect stars, the score will continue to go up, until eventually you get hit. Once hit, the game will instantly restart, and if the user's score is larger than your saved high score than that high score will be replaced in real-time and sent to the leaderboard.

9. This project was the final collaborative coding effort for this boot camp, and was a great lesson in things like working towards a shared goal in a team, divvying up tasks, and sharing creative problem-solving techniques amongst each other to find success! It let us spread our wings for creativity as well and for that, it was a fantastic final project for this part of our coding journey.


## Installation and Usage

<p>Luckily because of scripts in our package.json file, starting this program on your own is super easy.

Firstly, in the main folder, you have to run 'npm install' to install all of the required packages.
Then, all you need to do is run 'npm run develop' and this will start the service up at 'localhost:3001' on your local network!
<br><br><br>
If you plan to just take a look at functionality, feel free to use the link to the <a href="https://intense-atoll-88740-5f15b72b0ef8.herokuapp.com/"> deployed page!</a></p>


## Mockup:
<h3>The following images shows the web application's appearance and functionality:</h3>

<img src="./assets/img/browser-game-start.png" width="750px" alt="home landing page sporting blinking 'press start' text with a blue 'start' button">
<img src="./assets/img/browser-game-main.png" width="750px" alt="the main page with the game, and both the leaderboard and logout buttons all surrounding the 'fancy chef' logo">
<img src="./assets/img/browser-game-leaderboard.png" width="750px" alt="the main leaderboard page with some example scores">

## Planned Features:

```
* Mobile compadibility so people can play on the go WITH internet!

* The ability to download so people can play on the go WITHOUT internet! (Webpacking)

* A game library to select from, rather than just having our favorite Fancy Chef on the page.

* Expanding out the profile, and adding new features like a profile picture, bio, high scores, achievements etc. to increase social activity on the site

* An entire achievement/badge system so users can brag and show their prestiege to their friends

* New features and quality of life updates for pre-existing games (Fancy Chef), things like powerups, alternative control schemes, etc.
```

## Credits
<br>
  <h3>Editing of code done by Team Car RamRod 2 👩🏻‍🍳</h3> <br>
  
  <b>🍰Cameron Rawlins🍰</b><br>
  <b>♨️Chad Smith♨️</b><br>
  <b>🍖Anthony Iacano🍖</b><br>
  <b>🍝Howard Pifer🍝</b><br>

 <br>
 <h3>The client portion's node packages: </h3>
 
 ```
    "@apollo/client": "^3.7.14",
    "bootstrap": "^5.2.3",
    "graphql": "^16.6.0",
    "jwt-decode": "^3.1.2",
    "phaser": "^3.70.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.4",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.2"
```
 <br>

<h3>The server portion's node packages: </h3>
 
 ```
    "@apollo/server": "^4.7.1",
    "bcrypt": "^4.0.1",
    "express": "^4.17.2",
    "graphql": "^16.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^7.0.2"
```
 <br>

<h3>The different frameworks used in our application: </h3>
 
 ```
  PhaseJS - Game Creation
  BootstrapJS - CSS
```

 <br>
 <h3>Lesson provided by:</h3>
 <b>edX Boot Camps LLC.</b>
 <br>

## Video

### Here is a link to a video showcasing this project:
[![Watch the video](https://img.youtube.com/vi/{insertthumbnailhere}/maxresdefault.jpg)](https://www.youtube.com/watch?v={insertlinkhere})

## Link to Deployed Page

https://intense-atoll-88740-5f15b72b0ef8.herokuapp.com/

 ## License

Please reference the **LICENSE.MD** file inside of the repository.

---
