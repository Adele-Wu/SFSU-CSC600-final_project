import { CircleDash16 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';
import { AMOscillator } from 'tone';

import { Visualizer } from '../Visualizers';

var start = 0;

export const StephVisualizer = new Visualizer(
  'StephVisualizer',
  (p5: P5, analyzer: Tone.Analyser) => {

    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    const values = analyzer.getValue();

    p5.background(30);
    p5.noStroke()
    p5.noiseDetail(2, 2);

    p5.translate(width / 2, height / 2)
    
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

        p5.rotate(space);

        p5.fill(r, g, b);

        p5.rect(300, 0, h, 20);
    }

    start += .01;
  },
);