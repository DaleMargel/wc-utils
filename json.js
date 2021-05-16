class json {
	static replacer(key,val) {
		if (typeof val === 'function') return String(val);
		if (val && val.constructor === RegExp) return String(val)
		return val;
	}
	static reviver(key,val){
		if(/^(\w+|\(\))\s*=>/.test(val)) return eval(val); // arrow fn
		if(/^\/.*\//.test(val)) return eval(val); // regex
		if(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.test(val)) return Date(val); // date
		return val;
	}
	static stringify(obj){ return JSON.stringify(obj,json.replacer,'\t') }
	static parse(str){ return JSON.parse(str,json.reviver) }
}
export { json }