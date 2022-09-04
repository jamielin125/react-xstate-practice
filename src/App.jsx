import React from 'react';
import { useMachine } from '@xstate/react';
import { RedLight, GreenLight, YellowLight } from './components/Light.jsx';
import { lightMachine } from "./fsm/machine.js";
import { LIGHT_EVENTS, LIGHT_STATES } from "./fsm/fsm.js";

function App() {
	const [state, send] = useMachine(lightMachine);
	return (
		<div className="app">
			{state.matches(LIGHT_STATES.RED) && <RedLight />}
			{state.matches(LIGHT_STATES.GREEN) && <GreenLight />}
			{state.matches(LIGHT_STATES.YELLOW) && <YellowLight />}
			<button
				onClick={() => {
					send(LIGHT_EVENTS.CLICK);
				}}
			>
				click me
			</button>
		</div>
	);
}

export default App
