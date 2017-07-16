var myMammal = {
	name: 'Herb the Mammal',
	get_name: function () {
		return this.name;
	},
	says: function () {
		return this.saying || '';
	}
};
var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
	var i, s = '';
	for (i = 0; i < n; i += 1) {
		if (s) {
			s += '_';
		}
		s += 'r';
	}
};
myCat.get_name = function () {
	return this.says + '' + this.name + ' ' + this.says;
}