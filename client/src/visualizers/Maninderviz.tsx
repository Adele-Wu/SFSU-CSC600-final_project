// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';
var start = 0;

export const Maninderviz = new Visualizer(
    'Maninderviz',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const values = analyzer.getValue();
        p5.stroke(131,238,255);
        p5.background(255, 240, 31);
        p5.line(0, height,(width/2)-300, height)
        for(let i=0;i<=((width/2)-300)/4;i++){
            var amplitude = values[i] as number;
            p5.rect(i+(i*4),height,2,amplitude*150)
        }
       
        p5.translate(width / 2.5, height / 2);
        
        p5.beginShape();

        // ------------------------------------------------------------------------
        // my old visualizer
    //     const width = window.innerWidth;
    // const height = window.innerHeight / 2;
    // const dim = Math.min(width, height);
    // p5.background(0, 0, 0, 255);
    // p5.beginShape();
    // p5.noFill();
    // const values = analyzer.getValue();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;
    //   const x = p5.map(i, 0, values.length - 1, 0, width);
    //   const y = height / 2 + amplitude * height;
    // //   p5.vertex(x, y).stroke(217,187,128);
    //   console.log("y", y);
    // }
    // var space = 1;

    // for (let i = 0; i < values.length; i += space) {
    //     const amplitude = values[i] as number;
    //     var h = p5.map(amplitude*5, 10, 1, -150, 150)
    //     p5.rotate(space);
    //     p5.rect(50, 5, h, 10).stroke(217,187,128);
    // }
    // p5.translate(-500, (height/.5)-150);
    // for (let i = 0; i < values.length; i += space) {
    //     const amplitude = values[i] as number;
       
    //     var h = p5.map(amplitude*5, 10, 1, -150, 150)
    //     p5.rotate(space);
    //     p5.rect(100, 3, h/2, 1).stroke(23,235,13);
    // }
    // p5.endShape();
    // },

        // ------------------------------------------------------------------------
        // my new visualizer
        var space = .5
        for (let i = 0; i < 360; i += space) {
            var amplitude = values[i] as number;
            var my_amp = Math.abs(amplitude)
            var xoff = p5.map(Math.cos(i), -1, 1, 0, 3)
            var yoff = p5.map(Math.sin(i), -1, 1, 0, 3)
            var n = p5.noise(xoff + start, yoff + start) * (my_amp * 3.5)
            // rectangle dims
            var h = p5.map(n, 0, 1, 0, 200)
            var w = 3
            var r = p5.map(Math.sin(i), 0, 1, 100,  244)
            var g = p5.map(i / 4, -100, 100, 0, 112)
            var b = p5.map(n, 0, 1, 175,219)
            p5.stroke(r, g, b);
            p5.fill(r, g, b);
            p5.rotate(space);
            p5.rect(75, 0, h, w);
        }
      
        
        // for (let i = 0; i < values.length; i++) {
        //     const amplitude = values[i] as number;
        //     const x = p5.map(i, 0, values.length - 1, 0, width);
        //     const y = height / 2 + amplitude * height;
        //     // Place vertex
        //     p5.vertex(x, y).noFill().rect(23,0,0,0);
        //     // console.log("amp", amplitude);
        //     console.log("y", y);
        //   }
        start += 0.03;

        p5.endShape();
    },
);
