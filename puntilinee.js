

var Point = function (x , y) {
	this.x = x;
	this.y = y;

	Point.prototype.getDistanceFromPoint = function (p2) {
		var dx = p2.x - this.x;
		var dy = p2.y - this.y;	
		return Math.sqrt((dx*dx)+(dy*dy));
	}	
}

Point.prototype.getDistanceFromLine = function(line){

	var a = line.a;
	var b = line.b;

	var num = a*this.x + b*this.y + line.c;
	var den = Math.sqrt(a*a + b*b );
	return (num/den);

}

Point.prototype.getDistance = function(X){
	if(x instanceof Line){
		return getDistanceFromLine(x);
	} else if (x instanceof Point){
		return getDistanceFromPoint(x);
	} else {
		throw new Error('x is not a Point or a Line');
	}
}


Point.prototype.translate = function (x, y){
	this.x += x;
	this.y += y;

	return this;
}

Point.prototype.membership = function(f){
	var ris = f(this.x,this.y);
	return (ris == 0? 0 : (ris>0 ? 1 : -1));
}

// TRIANGLE

var Triangle = function (p1 , p2 , p3) {
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;


	this.getPerimeter = function(){
		var p = this.p1.getDistance(this.p2);
		p += this.p2.getDistance(this.p3);
		p += this.p3.getDistance(this.p1);

		return p;
	}

	this.getArea = function(){
		var semip = this.getPerimeter()/2;
		var l1 = this.p1.getDistance(this.p2);
		var l2 = this.p2.getDistance(this.p3);
		var l3 = this.p3.getDistance(this.p1);

		var area = Math.sqrt(semip*(semip-l1)*(semip-l2)*(semip-l3))
		return area;
	}

}

Triangle.prototype.above = function(line){

	if(! (line instanceof Line)){
		throw new Error ('non è una linea');
	}

	var d1 = this.p1.getDistanceFromLine(line);
	var d2 = this.p2.getDistanceFromLine(line);
	var d3 = this.p3.getDistanceFromLine(line);

	return (d1>0 && d2>0 && d3>0);

}

Triangle.prototype.below = function(line){

	if(! (line instanceof Line)){
		throw new Error ('non è una linea');
	}

	var d1 = this.p1.getDistanceFromLine(line);
	var d2 = this.p2.getDistanceFromLine(line);
	var d3 = this.p3.getDistanceFromLine(line);

	return (d1<0 && d2<0 && d3<0);

}

Triangle.prototype.intersect = function(line){

	if(! (line instanceof Line)){
		throw new Error ('non è una linea');
	}

	var d1 = this.p1.getDistanceFromLine(line);
	var d2 = this.p2.getDistanceFromLine(line);
	var d3 = this.p3.getDistanceFromLine(line);

	return  (!(d1>0 && d2>0 && d3>0) && !(d1<0 && d2<0 && d3<0)) ;

}

// LINE

var Line = function (a,b,c){

	if(!(this instanceof Line)){  // evito il danno se viene invocata senza il new
		return new Line(a,b,c);
	}

	this.a = a ;
	this.b = b ;
	this.c = c || 0;
};


function randomPoint () {
	var x = (Math.random()*200) -100;
	var y = (Math.random()*200) -100;
	return new Point(x,y);
}



// filtrare i punti che giacciono nel semipiano positivo def da y - x > 0;

var filtrapossemi = function (array){

	return array.filter(function(item,index,array){
		return ((item.y - item.x) > 0);
	});

} ;



//TODO

//FUNZIONE PER CALCOLARE IL GUSCIO CONVESSO di un SET DI PUNTI , metodo sulle slide J. MArch


//DISEGNARE:

