// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';
var start = 0;

export const Msingh200o = new Visualizer(
    'Msingh200o',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const values = analyzer.getValue();
        p5.background(255, 240, 31);
        p5.line(0, height,width, height)
        let space_between_lines = width/200;
        //Lines at bottom
        for(var m = -1; m<= 1; m +=2){
            for (let i = 0; i < width; i++) {
                var amplitude = values[i] as number;
                let y = p5.map(amplitude*500, -100, 300, height, 200);
                p5.line(-m*i * space_between_lines, height, -m*i * space_between_lines, y).strokeWeight(5)
                p5.stroke(176, 38, 255);
        }
  }   
        p5.translate(width/2.5, height/2);
        
        p5.beginShape();
        var space = .25
        //circles that go around
        for (let i = 0; i < 100; i += space) {
            p5.rotate(space);
            p5.circle(400,100,100).fill(225,225,225).stroke(p5.random(0, 225),p5.random(0, 225),p5.random(0, 225));
         }
         p5.translate(p5.random(-5, 5),p5.random(-5, 5))
        start += 5;
        // -----------------------------------------------------------------------
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
        // var h = p5.map(amplitude*5, 10, 1, -150, 150)
        // p5.rotate(space);
        // p5.rect(50, 5, h, 10).stroke(217,187,128);
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
       //circle thingy 
        var space = .25
        for (let i = 0; i < 360; i += space) {

            var amplitude = values[i] as number;
            var my_amp = Math.abs(amplitude)
            //calculate how much to move?
            var xish = p5.map(Math.cos(i), -1, 1, 0, 3)
            var yish = p5.map(Math.sin(i), -1, 1, 0, 3)
            //constent movement
            var n = p5.noise(xish + start, yish + start) * (my_amp * 5)
            p5.rotate(space*2);
            //color
            p5.fill(57, 255, 20).stroke(0,0,0);

            p5.rect(75, 0, p5.map(n, 0, 1, 0, 150), 4).strokeWeight(1)
            //particle go crazy
            var x = p5.random(0, 75)+(p5.random(0, width*2));
            var y = p5.random(0, 75)+(p5.random(0, height*2));
            var size = p5.random(1, 10);
            p5.fill(p5.random(0, 225),p5.random(0, 225),p5.random(0, 225))
            p5.circle(x, y, size);
         }
         start += 1;
         //left circle
         p5.translate(200,0)
         for (let i = 0; i < 360; i += space) {
            var amplitude = values[i] as number;
            var h = p5.map(amplitude*200, 10, 1, 1, 5)
            p5.rotate(space);
            p5.rect(50, 5, h, 5).stroke(0,0,0).strokeWeight(.25).fill(0, 242, 222);
         }
        //  right circle
         p5.translate(130,400)
         for (let i = 0; i < 360; i += space) {
            var amplitude = values[i] as number;
            var h = p5.map(amplitude*200, 10, 1, 1, 5)
            p5.rotate(space);
            p5.rect(50, 5, h, 5).stroke(0,0,0).strokeWeight(.25).fill(232, 50, 73);
         }
        
        p5.endShape();
    },
);
