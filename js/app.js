var initialHouses = [
		{
			house1Src: 'img/house1/house_green-min.jpg',
			house2Src: 'img/house2/House_Green-min.jpg',
			buttonSrc: 'img/buttons/green.png'
		},

		{

			house1Src: 'img/house1/house_stone-min.jpg',
			house2Src: 'img/house2/House_Stone-min.jpg',
			buttonSrc: 'img/buttons/stone.png'

		},

		{

			house1Src: 'img/house1/house_brown-min.jpg',
			house2Src: 'img/house2/House_Brown-min.jpg',
			buttonSrc: 'img/buttons/brown.png'

		},

		{

			house1Src: 'img/house1/house_red-min.jpg',
			house2Src: 'img/house2/House_Red-min.jpg',
			buttonSrc: 'img/buttons/red.png'
		},

		{

			house1Src: 'img/house1/house_charcoal-min.jpg',
			house2Src: 'img/house2/House_Charcoal-min.jpg',
			buttonSrc: 'img/buttons/charcoal.png'

		},

		{

			house1Src: 'img/house1/house_white-min.jpg',
			house2Src: 'img/house2/House_White-min.jpg',
			buttonSrc: 'img/buttons/white.png'
		},

		{

			house1Src: 'img/house1/house_blue-min.jpg',
			house2Src: 'img/house2/House_Blue-min.jpg',
			buttonSrc: 'img/buttons/blue.png'
		},

		{

			house1Src: 'img/house1/house_beige-min.jpg',
			house2Src: 'img/house2/House_Beige-min.jpg',
			buttonSrc: 'img/buttons/beige.png'
		},

		{

			house1Src: 'img/house1/house_gray-min.jpg',
			house2Src: 'img/house2/House_Gray-min.jpg',
			buttonSrc: 'img/buttons/gray.png'
		},

		{

			house1Src: 'img/house1/house_slate-min.jpg',
			house2Src: 'img/house2/House_Slate-min.jpg',
			buttonSrc: 'img/buttons/slate.png'
		},

		{

			house1Src: 'img/house1/house_tan-min.jpg',
			house2Src: 'img/house2/House_Tan-min.jpg',
			buttonSrc: 'img/buttons/tan.png'
		}
	];



var House = function(data) {
	this.imgSrc = ko.observable('img/house1/house_green-min.jpg');
	this.img1Src = ko.observable(data.house1Src);
	this.img2Src = ko.observable(data.house2Src);
	this.buttonSrc = ko.observable(data.buttonSrc);
};

var button1 = document.getElementById("setHouse1");
var button2 = document.getElementById("setHouse2");


var ViewModel = function() {
	var self = this;

	this.houseList = ko.observableArray([]);

	initialHouses.forEach(function(houseItem) {
		self.houseList.push( new House(houseItem));
	console.log(houseItem);
	});

	this.currentHouse = ko.observable(this.houseList() [0] );

	this.setHouse = function(clickedHouse) {

		if (button1.checked){
    		this.imgSrc = this.img1Src;
    	}else {
    		this.imgSrc = this.img2Src;
    	};
    	self.currentHouse(clickedHouse);
	};

	this.setHouse1 = function() {
	document.getElementById("housepic").src = 'img/house1/house_green-min.jpg';
	};

	this.setHouse2 = function() {
		document.getElementById("housepic").src = 'img/house2/House_Green-min.jpg';
	};
};


ko.applyBindings(new ViewModel());