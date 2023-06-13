import { v4 } from "uuid"

export const CARDS = [
    {
        id:v4(),
        src:'/public/icon-supervisor.svg',
		alt:'Supervisor',
		name:'Supervisor',
		text:'Monitors activity to identify project roadblocks',
		color:'cyan'
    },
    {
        id:v4(),
        src:'/public/icon-team-builder.svg',
		alt:'Team Builder',
		name:'Team Builder',
		text:'Scans our talent network to create the optimal team for your project',
		color:'red'
    },
    {
        id:v4(),
        src:'/public/icon-calculator.svg',
		alt:'Calculator',
		name:'Calculator',
		text:'Uses data from past projects to provide better delivery estimates',
		color:'blue'
    },
    {
        id:v4(),
        src:'/public/icon-karma.svg',
		alt:'Karma',
		name:'Karma',
		text:'Regularly evaluates our talent to ensure quality',
		color:'orange'
    }
]