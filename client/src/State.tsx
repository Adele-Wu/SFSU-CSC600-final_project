// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
import { DrumsInstrument } from './instruments/Drums';
import { AdeleVisualizer } from './visualizers/AdeleVisualizer'
import { KalimbaInstrument } from './instruments/DeathsValentine';

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

const instruments = List([PianoInstrument, DrumsInstrument, KalimbaInstrument]);
const visualizers = List([WaveformVisualizer, AdeleVisualizer]);

export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
