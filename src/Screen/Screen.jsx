import React from 'react'

import ScreenResult from './ScreenResult'
import ScreenComputation from './ScreenComputation'

export default function Screen(props) {
	return(
		<section className="screen bg-gray-800 p-5 text-right text-white">
			<ScreenResult>{props.result}</ScreenResult>
			<ScreenComputation>{props.equation}</ScreenComputation>
		</section>
	)
}