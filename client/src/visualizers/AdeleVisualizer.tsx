// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const AdeleVisualizer = new Visualizer(
    'AdeleVisualizer',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;

        p5.background(147, 112, 219, 255);

        // todo: maybe put background image
        // const bg = p5.loadImage('public/background.png');
        // p5.background(bg);
        // // p5.createCanvas(2442,1526)

        p5.noStroke();
        p5.stroke(255, 255, 255, 255);
        p5.noFill();

        //center circle
        p5.translate(width / 2.5, height / 2);
        p5.noiseDetail(2, 1);

        const values = analyzer.getValue();
        p5.beginShape();

        // var space = 0.01;
        var space = 1;
        
        for (let i = 0; i < values.length; i += space) {
            const amplitude = values[i] as number;

            var x = p5.map(Math.cos(i), -1, values.length - 1, 0, 3);
            var y = height / 2 + amplitude * height;;

            var h = p5.map(amplitude*10, 10, 1, -150, 150)

            p5.rotate(space);
            p5.rect(100, 10, h, 2);
        }

        p5.endShape();
    },
);
