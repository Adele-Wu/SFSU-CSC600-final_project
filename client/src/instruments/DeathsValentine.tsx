import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

import { Instrument, InstrumentProps } from '../Instruments';


interface KalimbaKeyProps {
  note: string; // C, D, E, F, G, A, B
  duration?: string;
  synth?: Tone.Synth;
  octave: number;
  index: number;
}

export function KalimbaKey({
  note,
  synth,
  index,
}: KalimbaKeyProps): JSX.Element {
  return (
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)}
      onMouseUp={() => synth?.triggerRelease('+0.25')}
      className={classNames('ba pointer absolute kalimba', {
        'black bg-light-gray h4': note,
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 1}rem`,
        zIndex: 0,
        width: '.75rem',
        marginLeft: 2,
        height: 75,
      }}
    ></div>
  );
}

function KalimbaKeyWithoutJSX({
  note,
  synth,
  index,
}: KalimbaKeyProps): JSX.Element {
  return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames('ba pointer absolute kalimba', {
        'black bg-white h4': note,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: '1 rem',
        width: '1 rem',
        marginLeft: '0.25rem',
      },
    },
    [],
  );
}

function KalimbaType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function Kalimba({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 5 },
    { note: 'D', idx: 7.5 },
    { note: 'E', idx: 10 },
    { note: 'F', idx: 12.5 },
    { note: 'G', idx: 15 },
    { note: 'A', idx: 17.6 },
    { note: 'B', idx: 20.1 },
  ]);

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>; 

  return (
    <div className="pv4" id="kalimba">
      <div className="relative dib h4 w-100 ml4">
        {Range(2, 7).map(octave =>
          keys.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <KalimbaKey
                key={note}
                note={note}
                synth={synth}
                octave={octave}
                index={key.idx+1}
              />
            );
          }),
        )}
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <KalimbaType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
    
  );
}

export const KalimbaInstrument = new Instrument('Kalimba', Kalimba);
