
import styled from 'styled-components'

const SVG = styled.svg`
@keyframes pulseRound {
	0% {
		
		opacity: 1;
	}
	50% {
		
		opacity: 0.5;
	}
	100% {
		
		opacity: 0.1;
	}
	50% {
		
		opacity: 0.5;
	}
	0% {
		
		opacity: 0.1;
	}
}

@-moz-keyframes pulseRound {
	0% {
		
		opacity: 1;
	}
	50% {
		
		opacity: 0.5;
	}
	100% {
		
		opacity: 0.1;
	}
	50% {
		
		opacity: 0.5;
	}
	0% {
		
		opacity: 0.1;
	}
}

@-webkit-keyframes pulseRound {
	0% {
		
		opacity: 1;
	}
	50% {
		
		opacity: 0.5;
	}
	100% {
		
		opacity: 0.1;
	}
	50% {
		
		opacity: 0.5;
	}
	0% {
		
		opacity: 0.1;
	}
}

@-o-keyframes pulseRound {
	0% {
		
		opacity: 1;
	}
	50% {
		
		opacity: 0.5;
	}
	100% {
		
		opacity: 0.1;
	}
	50% {
		
		opacity: 0.5;
	}
	0% {
		
		opacity: 0.1;
	}
}

@-ms-keyframes pulseRound {
	0% {
		
		opacity: 1;
	}
	50% {
		
		opacity: 0.5;
	}
	100% {
		
		opacity: 0.1;
	}
	50% {
		
		opacity: 0.5;
	}
	0% {
		
		opacity: 0.1;
	}
}

@keyframes pulse {
	0% {
		transform: scale(0.9);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.9);
	}
}

@-moz-keyframes pulse {
	0% {
		transform: scale(0.9);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.9);
	}
}

@-webkit-keyframes pulse {
	0% {
		transform: scale(0.9);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.9);
	}
}

@-o-keyframes pulse {
	0% {
		transform: scale(0.9);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.9);
	}
}

@-ms-keyframes pulse {
	0% {
		transform: scale(0.9);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.9);
	}
}


	.circle-animation{
		-webkit-animation: pulseRound 2.5s infinite  normal ease-out;
		animation: pulseRound 2.5s infinite  normal ease-out;
	}

	-webkit-animation: pulse 2.5s infinite  normal ease-out;
	animation: pulse 2.5s infinite  normal ease-out;
`

export { SVG }