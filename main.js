function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelloaded);
}

function draw(){
image(video,0,0,300,300);
classifier.classify(video,gotresult);
}

function gotresult(error,result){
if(error){
  console.error(error);
}
else{
  console.log(result);
  document.getElementById("result_object_name").innerHTML=result[0].label;
  document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
}
}

function modelloaded(){
  console.log('model is loaded');
}

function preload(){

}