import { CircleDash16 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';
import { AMOscillator } from 'tone';

import { Visualizer } from '../Visualizers';

var start = 1;

export const StephVisualizer = new Visualizer(
  'StephVisualizer',
  (p5: P5, analyzer: Tone.Analyser) => {

    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    const values = analyzer.getValue();

    p5.background(0);
    p5.noStroke()
    p5.noiseDetail(2, 2);

    p5.translate(width / 2, height / 2)

    // p5.colorMode(p5.HSB, 360, 100, 100);
    
    var space = 1;

    for(var i = 0; i < 360; i += space){
        var amplitude = values[i] as number;
        var absAmp = Math.abs(amplitude)

        var xoff = p5.map(Math.cos(i), -1, 1, 0, 3);
        var yoff = p5.map(Math.sin(i), -1, 1, 0, 3);

        var n = p5.noise(xoff + start, yoff + start) * (absAmp * 3);

        var h = p5.map(n, 0, 1, -150, 100);

        var r = p5.map(Math.sin(i), -1, 1, 100, 200);
        var g = p5.map(h, -150, 150, 0, 150);
        var b = p5.map(n, 0, 1, 150, 255);

        // let color = p5.random(0, 360)
        p5.rotate(space);

        p5.fill(r,g,b) 

        // p5.fill(0,0,0); 
        // p5.stroke(color, color, color);

        p5.rect(300, 0, h, 20);

        if(i % 2 == 0){ // Limits number of particles
          var x = p5.random(0, (width/25)-10)+(absAmp*p5.random(0, width)-100);
          var y = p5.random(0, (width/25)-10)+(absAmp*p5.random(0, height)-100);
          var r = p5.random(-6, 8);
          p5.circle(x, y, r);
        }
    }

    start += .01;
  },
);