// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

var start = 0;

export const AdeleVisualizer = new Visualizer(
  'adele-wu',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    p5.background(10, 10, 25);

    // p5.noStroke();
    // p5.stroke(255, 255, 255, 255);
    // p5.noFill();

    //center circle
    p5.translate(width / 2.5, height / 2);
    p5.noiseDetail(2, 1);

    const values = analyzer.getValue();
    p5.beginShape();

    // ------------------------------------------------------------------------
    // my old visualizer

    // var space = 1;

    // for (let i = 0; i < values.length; i += space) {
    //     const amplitude = values[i] as number;
    //     console.log("amplitude", amplitude)

    //     var x = p5.map(Math.cos(i), -1, values.length - 1, 0, 3);
    //     var y = height / 2 + amplitude * height;;

    //     var h = p5.map(amplitude*10, 10, 1, -150, 150)

    //     p5.rotate(space);
    //     p5.rect(100, 10, h, 2);
    // }

    // ------------------------------------------------------------------------
    // my new visualizer

    var space = 1

    for (let i = 0; i < 180; i += space) {
      var amplitude = values[i] as number;
      var my_amp = Math.abs(amplitude)

      // handles the movement
      var xoff = p5.map(Math.cos(i), 0, 1, 0, my_amp * 10)
      var yoff = p5.map(Math.sin(i), 0, 1, 0, my_amp * 10)
      var n = p5.noise(xoff + start, yoff + start) * (my_amp * 5)

      // rectangle dims
      var h = p5.map(n, 0, 1, 0, 200)
      var w = 3

      // colors
      var r = p5.map(Math.sin(i), 0, 1, 100, my_amp * 150 + 147)
      var g = p5.map(i / 4, -100, 100, 0, my_amp * 150 + 112)
      var b = p5.map(n, 0, 1, 175, my_amp * 150 + 219)
      p5.stroke(r, g, b);
      p5.fill(r, g, b);

      // drawing the circle visual
      p5.rotate(space);
      p5.rect(90, 0, h, w);

      // creation of a particle.
      var x = p5.random(0, 75)+(my_amp*p5.random(0, width*2));
      var y = p5.random(0, 75)+(my_amp*p5.random(0, height*2));
      var size = p5.random(1, 10);
      p5.circle(x, y, size);

    }
    start += 0.03;

    p5.endShape();

  },
  
);
