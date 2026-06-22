import {rgb2lab} from 'colour-proximity'
import cs from 'color-string'


function proximity(s1: string, s2: string){
	const c1 = rgb2lab(cs.getRgb(s1));
	const c2 = rgb2lab(cs.getRgb(s2));
	return Math.sqrt(Math.pow(c1[0]-c2[0],2) + Math.pow(c1[1]-c2[1],2) + Math.pow(c1[2]-c2[2],2));
}

export const getUserScore = (realColor: string, userColor: string) => {
	const result = Math.min(100, proximity(realColor, userColor));
    return (100 - result).toFixed(2)
}

