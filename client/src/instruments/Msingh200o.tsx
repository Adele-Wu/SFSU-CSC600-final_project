import * as Tone from 'tone';
import classNames from 'classnames';
import { List} from 'immutable';
// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Drums.
 ** ------------------------------------------------------------------------ */
interface SBKeyProps {
    note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    index: number; // give a location for the Drums key
}
export function SBKeys({
    note,
    synth,
    index,
}: SBKeyProps): JSX.Element {
    return (
        <div
            onMouseDown={() => synth?.triggerAttackRelease(`${note}`, '8n')}
            className={classNames('pointer absolute sb child')}
            style={{
                // CSS
                padding: 10,
                margin: 20,
                backgroundColor: "#D3D3D3",
                width: 70,
                height: 70,
                borderRadius:10,
                // left: `${index * 5}rem`,
                }}
        >
        </div>
    );
}
function SBType({ title, onClick,active }: any): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={classNames('dim pointer ph3 pv2 ba mr1 br1 fw7 bw1 fish', {
                'b--black black': active,
                'black b--white black': !active,
              })}
        >
            {title}
        </div>
    );
}
function Soundboard({ synth, setSynth }: InstrumentProps): JSX.Element {
    const keys = List([
        { note: 'A1', idx: 0 },
        { note: 'A2', idx: 1 },
        { note: 'B1', idx: 2 },
        { note: 'C2', idx: 3 },
        { note: 'G2', idx: 4 },
        { note: 'E2', idx: 5 },
        { note: 'F2', idx: 6 },
        { note: 'C3', idx: 7 },
        { note: 'D3', idx: 8 },
        { note: 'G3', idx: 9 },
        { note: 'E3', idx: 10 },
        { note: 'F3', idx: 11 }
    ]);
    const setOscillator = (newType: Tone.ToneOscillatorType) => {
        setSynth(oldSynth => {
            oldSynth.disconnect();

            return new Tone.MembraneSynth({
                oscillator: { type: newType } as Tone.OmniOscillatorOptions,
                "envelope": {
                    "attack": 0.05,
                    "decay": 0.2,
                    "sustain": 0.1,
                    "release": 4.4,
                },
                "octaves": 10,
                "pitchDecay": 0.05
            }).toDestination();
        });
    };
    const oscillators: List<OscillatorType> = List([
        'sine',
        'sawtooth',
        'square',
        'triangle6',
        'fmtriangle8',
        'amsine',
        'amsawtooth6',
        'amtriangle3',
    ]) as List<OscillatorType>;

    return (
        <div 
        className={classNames('pv4 lolz')}
        >
            <div
            className={classNames('relative dib h4 w-100 parent')}
            >
            {keys.map(key => {
                const note = `${key.note}`;
                return (
                    <SBKeys
                        key={note} 
                        note={note}
                        synth={synth}
                        index={key.idx}
                    />
                    );
                },
            )}
            </div>
            <div className={'pl4 pt4 flex mt5 test '}>
                {oscillators.map(o => (
                    <SBType
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

export const SoundboardInstrument = new Instrument('Msingh200o', Soundboard);