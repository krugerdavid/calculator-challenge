import React from 'react'

export default function button(props) {

	const classes = ['btn']

	if( typeof props !== 'undefined' && typeof props.type !== 'undefined' )
		classes.push('btn--' + props.type )
	return (
		<button className={ classes.join(' ')} onClick={props.onButtonPress}>
			{props.children}
		</button>
	)
}