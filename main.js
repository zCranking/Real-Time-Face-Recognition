function setup(){
    canvas = createCanvas(550, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3vvwRc_ry/model.json", modelLoaded);
}
function modelLoaded(){
    console.log("Teachable Machine Loaded!");
}
function draw(){
    image(video, 0, 0, 550, 550);
    classifier.classify(video, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3)-0.205;
    }
}