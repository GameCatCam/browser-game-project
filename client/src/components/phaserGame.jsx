import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import dude from './assets/dude.png'
import sky from './assets/sky.png'
import platform from './assets/platform.png'
import star from './assets/star.png'
import bombImg from './assets/bomb.png'

import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { UPDATE_SCORE } from '../utils/mutations';


const PhaserGame = () => {
    // variable checks if the game is running
    const [gameRunning, setGameRunning] = useState(false);
    const [userScore, setUserScore] = useState(0);
    //const [updateScore] = useMutation(UPDATE_SCORE); //calls in the mutation to update the high score
    //const {loading, error, data} = useQuery(QUERY_ME); //calls in the query to get the user's current high score

    function getScore(){
       const {loading, error, data} = useQuery(QUERY_ME); //calls in the query to get the user's current high score
        if (data){
            return data.me.highScore;
        } else {
            return null;
        }
    }

    const currentHighScore = getScore(); //Pulls the user's current high score from the DB

  useEffect(() => {
    let platforms, player, cursors, stars, bombs, bomb, score;

    // Create a new Phaser game config
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'main-game',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    // Create a new Phaser game instance
    const game = new Phaser.Game(config);

    // Preload assets
    function preload() {
        this.load.image('sky', sky)
        this.load.image('ground', platform)
        this.load.image('star', star)
        this.load.image('bomb', bombImg)
        this.load.spritesheet(
            'dude', 
            dude,
            { frameWidth: 32, frameHeight: 48 }
        )
    }

    // Create game objects
    function create() {
    // Creates platforms
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
    //
    // Creates Player character
        player = this.physics.add.sprite(100, 450, 'dude')

        player.setBounce(0.1)
        player.setCollideWorldBounds(true)

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(player, platforms);
        // Adds arrow key movement --code in Update()
        cursors = this.input.keyboard.createCursorKeys();
    //
    // Adds collectibles (stars)
        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });

        this.physics.add.collider(stars, platforms)
        this.physics.add.overlap(player, stars, collectStar, null, this);

        function collectStar (player, star){
            star.disableBody(true, true);

            score += 10;
            scoreText.setText('Score: ' + score);
            setUserScore(score); //sets the user score globally

            if (stars.countActive(true) === 0) {
                stars.children.iterate(function (child) {

                    child.enableBody(true, child.x, 0, true, true);

                });

                var x = (player.x < 400) 
                    ? Phaser.Math.Between(400, 800) 
                    : Phaser.Math.Between(0, 400);

                bomb = bombs.create(x, 16, 'bomb');
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            }
        }
    //
    // Score text
        var score = 0;
        var scoreText;
        scoreText = this.add.text(
            16,
            16, 
            'score: 0', 
            { fontSize: '32px', fill: '#000' }
        );
    //
    // Bombs
        bombs = this.physics.add.group();

        this.physics.add.collider(bombs, platforms);

        this.physics.add.collider(player, bombs, hitBomb, null, this);

        function hitBomb(player, bomb) {
            player.setTint(0xff0000);
            player.anims.play('turn');
        
            // pauses the game after a delay
            this.time.delayedCall(100, function() {
                this.physics.pause();
            }, [], this);
        
            let gameOver = true;

            // Resets game due to useEffect()
            setGameRunning(false);
        }
    //
    //Reset Code
        // Reset game state when replaying
            score = 0;
            scoreText.setText('Score: ' + score);

        // Reset player position
            player.setX(100).setY(450);
            player.setVelocityX(0);
            player.setVelocityY(0);

        // Reset bombs and stars
            bombs.clear(true, true);
            stars.children.iterate((child) => {
            child.enableBody(true, child.x, 0, true, true);
            });

        // Set gameRunning state to true
            setGameRunning(true);
    //
    }

    // Update logic for player movement
    function update() {
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }

    function gameEnd(){
        console.log(currentHighScore);
    }
    return () => {
        // deletes game from page on page switch
        gameEnd();
        game.destroy(true);
    };
  }, [gameRunning]); // Empty dependency array ensures the effect runs once

  return (<><div id="phaser-game" />
  <div id="temp-score">{userScore}</div></>);//Temporary Score Display for Debugging purposes
};

export default PhaserGame;