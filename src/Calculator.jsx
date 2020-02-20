import React, { useState } from 'react';

import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad'

function Calculator() {

	const [state, setState] = useState({ equation: '', result: '' })

	const onButtonPress = (event) => {
		let equation = state.equation
		const pressedButton = event.target.innerHTML;

		if( pressedButton === 'C' ) return clear()
		else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton;
		else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' ';
		else if (pressedButton === '=') {
			try {
				const evalResult = eval(equation);
				const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
				
				setState({ ...state, result });
			} catch (error) {
				alert('Invalid Mathematical Equation');
			}
		}
		else {
			equation = equation.trim()
			equation = equation.substr( 0, equation.length - 1 )
		}

		setState({...state, equation})
	}

	const clear = () => {
		setState({ equation: '', result: 0 })
	}

	
	
	return (
		<div className="calculator rounded-md shadow-sm bg-white">
			<Screen equation={state.equation}  result={state.result} />
			<Keypad onButtonPress={onButtonPress} />
		</div>
	)
}

export default Calculator