import { Machine } from 'xstate';
import { fsm } from './fsm'
// import * as actions from './actions'
// import * as services from './services'
// import * as guards from './guards'

export const lightMachine = Machine(
	fsm,
	// {
	// 	actions,
	// 	services,
	// 	guards,
	// },
)
