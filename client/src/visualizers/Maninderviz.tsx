// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const Maninderviz = new Visualizer(
    'Maninderviz',
    (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    p5.background(0, 0, 0, 255);
    p5.beginShape();
    p5.noFill();
    const values = analyzer.getValue();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;
    //   p5.vertex(x, y).stroke(217,187,128);
      console.log("y", y);
    }
    var space = 1;

    for (let i = 0; i < values.length; i += space) {
        const amplitude = values[i] as number;
        var h = p5.map(amplitude*5, 10, 1, -150, 150)
        p5.rotate(space);
        p5.rect(50, 5, h, 10).stroke(217,187,128);
    }
    p5.translate(-500, (height/.5)-150);
    for (let i = 0; i < values.length; i += space) {
        const amplitude = values[i] as number;
       
        var h = p5.map(amplitude*5, 10, 1, -150, 150)
        p5.rotate(space);
        p5.rect(100, 3, h/2, 1).stroke(23,235,13);
    }
    p5.endShape();
    },
    
);
