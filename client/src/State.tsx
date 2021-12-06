// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
import { DrumsInstrument } from './instruments/adele-wu';
import {SoundboardInstrument} from './instruments/Msingh200o'
import { AdeleVisualizer } from './visualizers/adele-wu'
import {Msingh200o} from './visualizers/Msingh200o'
import { KalimbaInstrument } from './instruments/DeathsValentine';
import { DeathsValentine } from './visualizers/DeathsValentine';
import { TromboneInstrument } from './instruments/RobertFranz-sfsu';
import { RobertVisualizer } from './visualizers/RobertFranz-sfsu';

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


const instruments = List([PianoInstrument, DrumsInstrument, KalimbaInstrument,  SoundboardInstrument, TromboneInstrument]);
const visualizers = List([WaveformVisualizer, AdeleVisualizer, DeathsValentine, Msingh200o, RobertVisualizer]);

export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
