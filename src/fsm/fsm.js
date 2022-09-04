export const LIGHT_STATES = {
	RED: 'RED',
	GREEN: 'GREEN',
	YELLOW: 'YELLOW',
};

export const LIGHT_EVENTS = {
	CLICK: 'CLICK',
};

export const fsm = {
	initial: LIGHT_STATES.RED,
	states: {
		[LIGHT_STATES.RED]: {
			on: {
				[LIGHT_EVENTS.CLICK]: LIGHT_STATES.GREEN,
			},
		},
		[LIGHT_STATES.GREEN]: {
			on: {
				[LIGHT_EVENTS.CLICK]: LIGHT_STATES.YELLOW,
			},
		},
		[LIGHT_STATES.YELLOW]: {
			on: {
				[LIGHT_EVENTS.CLICK]: LIGHT_STATES.RED,
			},
		},
	},
}