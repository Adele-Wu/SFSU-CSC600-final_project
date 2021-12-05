// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const RobertVisualizer = new Visualizer(
    'RobertFranz-sfsu',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);
        //const img = p5.loadImage('./client/img/park-junkyu-3.jpg');

        //fft = new p5.constructor.FFT();
        //let fft;
        //fft = new p5.FFT();
        //fft.analyze();

        //style
        p5.background(0); //black background
        p5.colorMode(p5.HSB, 360, 100, 100);
        p5.angleMode(p5.DEGREES); //change the angle of the waves to degrees

        //color
        let h = p5.random(200, 300);
        p5.stroke(h, h, h);

        p5.strokeWeight(dim * 0.003);  //thickness of lines
        p5.noFill(); //circle is hollow

        //centers circle
        p5.translate(width / 2.5, height / 2);
        //p5.image(img, -width / 6.5,-height / 6, img.width / 3.75, img.height / 3.75);

        const values = analyzer.getValue();
        //creates full circle
        for (var t = -1; t <= 1; t += 2) {
            p5.beginShape();
            //creates half of circle
            for (let i = 0; i < values.length; i++) {
                const amplitude = values[i] as number;
                var my_amp = Math.abs(amplitude)
                //var index = p5.floor(p5.map(i, 0, 180, 0, amplitude - 1));

                //dimensions
                var r = p5.map(amplitude, -.75, .73, 100, 350)
                var x = r * p5.sin(i) * t;
                var y = r * p5.cos(i) * t;
                p5.vertex(x, y);

                if (i % 5 == 0) {
                    var o = p5.random(10, t * width / 20) + (amplitude * p5.random(0, t * width * 2));
                    var f = p5.random(10, width / 20) + (amplitude * p5.random(0, height * 2));
                    var k = p5.random(1, 6);
                    p5.circle(o, f, k);

                    var p = p5.random(-10, width / 20) + (amplitude * p5.random(-100, width * 3) + 10);
                    var l = p5.random(-20, -width / 20) + (amplitude * p5.random(-100, height));
                    var n = p5.random(-6, 6);
                    p5.circle(p, l, n);

                    var p2 = p5.random(-10, -width / 20) + (amplitude * p5.random(0, -width * 3) - 10);
                    var l2 = p5.random(-20, -width / 20) + (amplitude * p5.random(100, height));
                    var n2 = p5.random(-6, 6);
                    p5.circle(p2, l2, n2);
                }
            }
            p5.endShape();
        }

        let space_between_lines = width / 256;
        //let spectrum = fft.analyze();
        for (var m = -1; m <= 1; m += 2) {
            p5.beginShape();
            for (let j = 0; j < values.length; j++) {
                const amplitude1 = values[j] as number;
                //p5.stroke(h,h,h);
                //let amp1 = spectrum[i];
                let y = p5.map(amplitude1, -100, 300, height, 0);
                p5.rect(m * j * space_between_lines, y, space_between_lines, height - y);

            }
            p5.endShape();
        }
    },
);
