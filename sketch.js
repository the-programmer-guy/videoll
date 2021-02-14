  function setup() {
      c = createCanvas(400,300);
      d = createCapture(VIDEO);
      d.hide();
    }
    
    function draw() {
      background(0);
      image(d,0,0,c.width,c.height);
    //filter(THRESHOLD)
    }