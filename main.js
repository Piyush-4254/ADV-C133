img="";
status="";
objects = [];
function  setup()
{
    canvas =  createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : Detecting objects";
}

function preload()
{
img = loadImage('R.jpg');
}

function draw()
{
    image(img,0,0,640,420);
    if(status != "")
    {
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML = "Objects detected";
            

            fill("red");
             percent = floor(objects[i].confidence * 100);
             text(objects[i].label + " " + percent + "%",objects[i].x+15,objects[i].y+15);
             noFill();
             stroke("red");
             rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
if(error)
{
 console.log(error);   
}
console.log(results);0
objects=results;
}