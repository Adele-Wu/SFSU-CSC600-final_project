// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
import { DrumsInstrument } from './instruments/adele-wu';
import {SoundboardInstrument} from './instruments/soundboard'
import { AdeleVisualizer } from './visualizers/adele-wu'
import {Maninderviz} from './visualizers/Maninderviz'
import { KalimbaInstrument } from './instruments/DeathsValentine';
import { StephVisualizer } from './visualizers/StephVisualizer'

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


const instruments = List([PianoInstrument, DrumsInstrument, KalimbaInstrument,  SoundboardInstrument]);
const visualizers = List([WaveformVisualizer, AdeleVisualizer, StephVisualizer, Maninderviz]);

export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
