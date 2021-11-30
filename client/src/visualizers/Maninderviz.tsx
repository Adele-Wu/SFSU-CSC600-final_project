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
        p5.stroke(57, 255, 20);
        p5.background(255, 240, 31);
        // p5.line(0, height,width, height)
        // for(let j=-1;j<=1;j+=2){
        //     for(let i=0;i<=150;i++){
        //         var amplitude = values[i] as number;
        //         p5.rect(j*(i+(i*4)),height,3,amplitude*500)
        // }
        let space_between_lines = width/200;
        for(var m = -1; m<= 1; m +=2){
            for (let i = 0; i < width; i++) {
                var amplitude = values[i] as number;
                let y = p5.map(amplitude*500, -100, 300, height, 200);
                p5.line(-m*i * space_between_lines, height, -m*i * space_between_lines, y).strokeWeight(5);
        }
  }
        
        //     if(i==150){
        //          for(let i=150;i<=400;i++){
        //             var amplitude = values[i] as number;
        //             p5.rect(i+(i*3),height-450,2,amplitude*500)
        // }
        //     }
        
        // for(let i=150;i<=400;i++){
        //     var amplitude = values[i] as number;
        //     p5.rect(i+(i*5),height-450,2,amplitude*500)
        // }
        

        p5.translate(width/2.5, height/2);
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
        var space = .25
        for (let i = 0; i < 360; i += space) {
            var amplitude = values[i] as number;
            var my_amp = Math.abs(amplitude)

            var xoff = p5.map(Math.cos(i*.5), -1, 1, 0, 3)
            var yoff = p5.map(Math.sin(i*.5), -1, 1, 0, 3)
            var n = p5.noise(xoff + start, yoff + start) * (my_amp * 5)
            // rectangle dims
            var h = p5.map(n, 0, 1, 0, 200)
            var w = 3
            var r = p5.map(Math.sin(i), 0, 1, 100,  244)
            var g = p5.map(i / 4, -100, 100, 0, 112)
            var b = p5.map(n, 0, 1, 175,219)
            p5.stroke(r, g, b);
            p5.fill(r, g, b);
            p5.rotate(space);
            p5.rect(75, 0, h, w).strokeWeight(1);;
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
