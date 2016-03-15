var initialHouses = [
		{
			house2Src: 'img/house/house_green-min.jpg',
			buttonSrc: 'img/buttons/green.png'
		},

		{

			house2Src: 'img/house/house_stone-min.jpg',
			buttonSrc: 'img/buttons/stone.png'
		},

		{

			house2Src: 'img/house/house_brown-min.jpg',
			buttonSrc: 'img/buttons/brown.png'
		},

		{

			house2Src: 'img/house/house_red-min.jpg',
			buttonSrc: 'img/buttons/red.png'
		},

		{

			house2Src: 'img/house/house_charcoal-min.jpg',
			buttonSrc: 'img/buttons/charcoal.png'
		},

		{

			house2Src: 'img/house/house_white-min.jpg',
			buttonSrc: 'img/buttons/white.png'
		},

		{

			house2Src: 'img/house/house_blue-min.jpg',
			buttonSrc: 'img/buttons/blue.png'
		},

		{

			house2Src: 'img/house/house_beige-min.jpg',
			buttonSrc: 'img/buttons/beige.png'
		},

		{

			house2Src: 'img/house/house_gray-min.jpg',
			buttonSrc: 'img/buttons/gray.png'
		},

		{

			house2Src: 'img/house/house_slate-min.jpg',
			buttonSrc: 'img/buttons/slate.png'
		},

		{

			house2Src: 'img/house/house_tan-min.jpg',
			buttonSrc: 'img/buttons/tan.png'
		}
	];

var House = function(data) {

	this.house1Src = ko.observable(data.house1Src);
	this.house2Src = ko.observable(data.house2Src);
	this.buttonSrc = ko.observable(data.buttonSrc);


};

var ViewModel = function() {
	var self = this;

	this.houseList = ko.observableArray([]);

	initialHouses.forEach(function(houseItem) {
		self.houseList.push( new House(houseItem));
	});

	this.currentHouse = ko.observable(this.houseList() [0] );

	this.setHouse = function(clickedHouse) {
		self.currentHouse(clickedHouse);
	};

	/*this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};*/
};


ko.applyBindings(new ViewModel());