// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { MembraneInstrument, InstrumentProps } from '../MembraneInstrument';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Drums.
 ** ------------------------------------------------------------------------ */

interface DrumsKeyProps {
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.MembraneSynth; // Contains library code for making sound
    index: number; // give a location for the Drums key
    octaves: number;
    pitchDecay: number;
}

export function DrumsKey({
    note,
    synth,
    index,
}: DrumsKeyProps): JSX.Element {
    /**
     * This React component corresponds to either a major or minor key in the Drums.
     * See `DrumsKeyWithoutJSX` for the React component without JSX.
     */
    return (
        // Observations:
        // 1. The JSX refers to the HTML-looking syntax within TypeScript.
        // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
        // 3. The curly braces `{` and `}` should remind you of string interpolation.
        <div
            onMouseDown={() => synth?.triggerAttackRelease(`${note}`, '8n')}
            className={classNames('pointer absolute drum')}
            style={{
                // CSS
                padding: 10,
                margin: 20,
                backgroundColor: '#D2B48C',
                display: "inline-block",
                borderRadius: "50%",
                width: 150,
                height: 150,
                left: `${index * 10}rem`,
                }}
        ></div >
    );
}

function DrumsType({ title, onClick, active }: any): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={classNames('dim pointer ph3 pv2 ba mr1 br1 fw7 bw1 drum_oscillator_buttons', {
                'b--black white': active,
                'white b--none': !active,
              })}
        >
            {title}
        </div>
    );
}

function Drums({ synth, setSynth }: InstrumentProps): JSX.Element {
    const keys = List([
        { note: 'A1', idx: 0 },
        { note: 'B1', idx: 1 },
        { note: 'D2', idx: 2 },
        { note: 'C2', idx: 3 },
        { note: 'E2', idx: 4 }
    ]);

    const setOscillator = (newType: Tone.ToneOscillatorType) => {
        setSynth(oldSynth => {
            oldSynth.disconnect();

            return new Tone.MembraneSynth({
                oscillator: { type: newType } as Tone.OmniOscillatorOptions,
                "envelope": {
                    "attack": 0.001,
                    "decay": 0.35,
                    "sustain": 0.01,
                    "release": 1.4,
                },
                "octaves": 9,
                "pitchDecay": 0.0005,
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
        <div className="pv4 pl2">
            <div className="relative dib h4 w-100 ">
                {keys.map(key => {
                    const note = `${key.note}`;
                    return (
                        <DrumsKey
                            key={note} //react key
                            note={note}
                            synth={synth}
                            index={key.idx}
                            octaves={1}
                            pitchDecay={0.0005}
                        />
                    );
                },
                )}
            </div>
            <div className={'pl2 pt3 flex mt5'}>
                {oscillators.map(o => (
                    <DrumsType
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

export const DrumsInstrument = new MembraneInstrument('adele-wu', Drums);
