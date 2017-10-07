(function($){
	var formats = {
		'%': function(val) {return '%';},
		'b': function(val) {return  parseInt(val, 10).toString(2);},
		'c': function(val) {return  String.fromCharCode(parseInt(val, 10));},
		'd': function(val) {return  parseInt(val, 10) ? parseInt(val, 10) : 0;},
		'u': function(val) {return  Math.abs(val);},
		'f': function(val, p) {return  (p > -1) ? Math.round(parseFloat(val) * Math.pow(10, p)) / Math.pow(10, p): parseFloat(val);},
		'o': function(val) {return  parseInt(val, 10).toString(8);},
		's': function(val) {return  val;},
		'x': function(val) {return  ('' + parseInt(val, 10).toString(16)).toLowerCase();},
		'X': function(val) {return  ('' + parseInt(val, 10).toString(16)).toUpperCase();}
	};

	var re = /%(?:(\d+)?(?:\.(\d+))?|\(([^)]+)\))([%bcdufosxX])/g;

	var dispatch = function(data){
		if(data.length == 1 && typeof data[0] == 'object') { //python-style printf
			data = data[0];
			return function(match, w, p, lbl, fmt, off, str) {
				return formats[fmt](data[lbl]);
			};
		} else { // regular, somewhat incomplete, printf
			var idx = 0; // oh, the beauty of closures :D
			return function(match, w, p, lbl, fmt, off, str) {
				return formats[fmt](data[idx++], p);
			};
		}
	};

	$.extend({
		sprintf: function(format) {
			var argv = Array.apply(null, arguments).slice(1);
			return format.replace(re, dispatch(argv));
		},
		vsprintf: function(format, data) {
			return format.replace(re, dispatch(data));
		}
	});
})(jQuery);
