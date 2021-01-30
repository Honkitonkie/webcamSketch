// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/A38xraKPL/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let y;
let balloons = [];
let balloonArray
let count;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  ballon0 = loadImage('assets/ballon.png');
  ballon1 = loadImage('assets/ballon1.png');
  ballon2 = loadImage('assets/ballon2.png');
  ballon3 = loadImage('assets/ballon3.png');

}

function setup() {
  createCanvas(300, 200);
  balloonArray = [ballon0, ballon1, ballon2, ballon3]




  // Create the video
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();

  if(label =='clap'){
    console.log("hi")
  }
  
  console.log(label)

// Number of balloons
  for (let index = 0; index < 15; index++) {
    balloons.push(new Balloon(index))
    // balloons[index] = new Balloon(index)
}


}

function draw() {
  background(0);
  // Draw the video
  // image(flippedVideo, 0, 0);


  for (let index = balloons.length - 1; index >= 0; index--) {
    balloons[index].show()
    balloons[index].deleteOverflow()
}

if(frameCount%150 == 0){
  console.log("new");
  if(balloons.length > 0){
    balloons.splice()
  }
  if(balloons.length > 0){
    balloons.splice()
  }
  if(balloons.length > 0){
    balloons.splice()
  }
  for (let j = 0; j < 15; j++) {
    balloons[j] = new Balloon(j)
}
}



  // if(label==="clap" ) {
  // //   for (let index = 0; index < 1; index++) {
  // //     balloons[index] = new Balloon(index)
  // // }
  // }
  
  // switch(label) {
  //   case "clap":
  //     // code block
  //     break;
  //   case "cheer":
  //     // code block
  //     break;
  //   case "think":
  //     // code block
  //     break;
  //   case "cool":
  //     // code block
  //     break;
  //   case "hand":
  //     // code block
  //     break;
  //   case "thumbs":
  //     // code block
  //     break;
  //   default:
  //     // code block
  // }
  




  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}