class STL {
	// return string from string template literals and values
	static stl(strings,holes){
		let result='';
		for(let str of strings){
			result+=str;
			if(holes.length) result+=STL.eval(holes.shift());
		}
		return result;
	}
	static eval(thing){
		switch(typeof thing){
			case 'undefined':
			case 'null': return '';
			case 'object':
				if(Array.isArray(thing))
					if(thing.length>0)
						return thing.reduce((acc,curr)=>acc+=STL.eval(curr),'');
		}
		return thing.toString();
	}
}
function stl(strings,...holes){ return STL.stl(strings,holes) }
export { stl }
// Code: Copyright © 2021 Dale Margel / Azure Solutions
// under Creative Commons - Attribution-NonCommercial CC BY-NC
// Build 2021.05.05
// Use at your own risk

