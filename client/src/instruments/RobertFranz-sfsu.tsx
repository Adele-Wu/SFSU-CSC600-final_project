// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Trombone.
 ** ------------------------------------------------------------------------ */

interface TromboneKeyProps {
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    minor?: boolean; // True if minor key, false if major key
    octave: number;
    index: number; // octave + index together give a location for the Trombone key
}

export function TromboneKey({
    note,
    synth,
    minor,
    index,
}: TromboneKeyProps): JSX.Element {
    /**
     * This React component corresponds to either a major or minor key in the Trombone.
     * See `TromboneKeyWithoutJSX` for the React component without JSX.
     */
    return (
        // Observations:
        // 1. The JSX refers to the HTML-looking syntax within TypeScript.
        // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
        // 3. The curly braces `{` and `}` should remind you of string interpolation.
        <div
            onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
            onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
            className={classNames('ba pointer absolute dim tromb', {
                
                
            })}
            style={{
                // CSS
                // top: 0,
                left: `${index * 8}rem`,
                //zIndex: minor ? 1 : 0,
                //width: minor ? '1.5rem' : '2rem',
                marginLeft:  '2rem' ,
                padding: 1,
                margin: 20,
                display: "inline-block",
                borderRadius: "5%",
                width: 25,
                height: 100,
                color: 'darkgoldenrod',
                backgroundColor: '#b89e49'
            }}
        ></div>
    );
}

// eslint-disable-next-line
function TromboneKeyWithoutJSX({
    note,
    synth,
    minor,
    index,
}: TromboneKeyProps): JSX.Element {
    /**
     * This React component for pedagogical purposes.
     * See `TromboneKey` for the React component with JSX (JavaScript XML).
     */
    return React.createElement(
        'div',
        {
            onMouseDown: () => synth?.triggerAttack(`${note}`),
            onMouseUp: () => synth?.triggerRelease('+0.25'),
            className: classNames('ba pointer absolute dim', {

            }),
            style: {
                top: 0,
                left: `${index * 2}rem`,
                zIndex: minor ? 1 : 0,
                width: minor ? '1.5rem' : '2rem',
                marginLeft: minor ? '0.25rem' : 0,
                
                padding: 1,
                margin: 20,
                borderRadius: "50%",
                //width: 20,
                height: 20,
            },
        },
        [],
    );
}

function TromboneType({ title, onClick, active }: any): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1 tromb_oscillator_buttons', {
                'white tromb_oscillator_buttons_pressed': active,
                'white b--black': !active,
            })}
        >
            {title}
        </div>
    );
}

function Trombone({ synth, setSynth }: InstrumentProps): JSX.Element {
    const keys = List([
        { note: 'B', idx: 0.5 },
        { note: 'F', idx: 1 },
        { note: 'E', idx: 1.7 },
        { note: 'Eb', idx: 2.15 },
        { note: 'D', idx: 2.6 },
        { note: 'Db', idx: 3.3 },
        { note: 'C', idx: 3.75 },
    ]);

    const setOscillator = (newType: Tone.ToneOscillatorType) => {
        setSynth(oldSynth => {
            oldSynth.disconnect();

            return new Tone.Synth({
                oscillator: { type: newType } as Tone.OmniOscillatorOptions,
                "envelope": {
                    attack: 0.1,
                }
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
        <div className="pv4" id ="trombone">
           
            <div className="relative dib h4 w-100">
                {Range(0, 3).map(octave =>
                    keys.map(key => {
                        const isMinor = key.note.indexOf('b') !== -1;
                        const note = `${key.note}${octave}`;
                        return (
                            <TromboneKey
                                key={note} //react key
                                note={note}
                                synth={synth}
                                minor={isMinor}
                                octave={octave}
                                index={(octave-2) * 7 + key.idx}
                            />
                        );
                    }),
                )}
            </div>
            
            <div className={'pl4 pt4 flex mt5'}>
                {oscillators.map(o => (
                    <TromboneType
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

export const TromboneInstrument = new Instrument('Trombone', Trombone);
