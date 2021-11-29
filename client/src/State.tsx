// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
import { DrumsInstrument } from './instruments/Drums';
import {SoundboardInstrument} from './instruments/soundboard'
import { AdeleVisualizer } from './visualizers/AdeleVisualizer'
import {Maninderviz} from './visualizers/Maninderviz'

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument, DrumsInstrument,SoundboardInstrument]);
const visualizers = List([WaveformVisualizer, AdeleVisualizer,Maninderviz]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
