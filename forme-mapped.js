
// bisettrice 1,3 quadrante:

var mapping = function(p){
	var u = p[0];

	return [u,u];
}

// bisettrice 3D:

var mapping = function(p){
	var u = p[0];

	return [u,u,u];
}

// sinusoide:


var drawSinusoide = function(){ 
	var d = DOMAIN([[0,2*Math.PI]])([60]);
	var mapping = function(p){
		var u = p[0];
		return [u, Math.sin(u)];
	}
	DRAW(MAP(mapping)(d));
}

//sinusoide3d:
var drawSinusoide3d = function() {
	var d = DOMAIN([[0,10],[0,3]])([30,3]);

	var mapping = function(p){
		var u = p[0];
		return [u,p[1],Math.sin(u)];
	}
	DRAW(MAP(mapping)(d));
}


//CIRCLE:

var drawCircle = function(r,n){
	var d = DOMAIN([[0,2*Math.PI]])([n]);
	var mapping = function(p){
		return[r*Math.cos(p[0]), r*Math.sin(p[0])];
	}
	var model = MAP(mapping)(d);
	COLOR([0,0,0])(model);

	DRAW(model);
	return model;
}



// CILINDRO:

var drawCilinder = function(r,h,n1,n2){
	var d = DOMAIN([[0,2*Math.PI],[0,1]])([n1,n2]);
	var mapping = function(p){
		var u = p[0];
		var v = p[1];

		return [r*Math.cos(u),r*Math.sin(u),h*v];
	}
	var m = MAP(mapping)(d);
	COLOR([0,0,0])(m);

	DRAW(m);
	return m;
}

// SFERA:

var drawSphere = function(r,n){
	var d = DOMAIN([[0,PI],[0,2*PI]])([n,2*n]);

	var map = function (p){
		var alfa = p[0]-(PI/2);
		var beta = p[1];

		var x = r*COS(alfa)*COS(beta);
		var y = r*COS(alfa)*SIN(beta);
		var z = r*SIN(alfa);

		return [x,y,z];
	}
	var m = MAP(map)(d);


	DRAW(m);
	return m;
}

// nub, cupola:

var drawPartOfSphere = function(r,n){
	var d = DOMAIN([[PI/2,PI*(4/5)],[0,2*PI]])([n,2*n]);

	var map = function (p){
		var alfa = p[0]-(PI/2);
		var beta = p[1];

		var x = r*COS(alfa)*COS(beta);
		var y = r*COS(alfa)*SIN(beta);
		var z = r*SIN(alfa);

		return [x,y,z];
	}
	var m = MAP(map)(d);


	DRAW(m);
	return m;
}


// TORO



var drawTorus = function(rex,rin,nex,nin){

	var d = DOMAIN([[0,2*PI],[0,2*PI]])([nex,nin]);

	var mapping = function(p){
		var alfa = p[0];
		var beta = p[1];

		var x = (rex + rin*COS(alfa))*COS(beta);
		var y = (rex + rin*COS(alfa))*SIN(beta);
		var z = -1*rin*SIN(alfa);
		
		return [x,y,z];
	
	}
	var mod = MAP(mapping)(d);

	COLOR(arguments[4] || [1,0,0])(mod);

	DRAW(mod);

	return mod;

}

// 2D -> 2D

var drawFullCircle = function(r,n){
	var n1 = n || 20;
	var n2 = 5;
	var d = DOMAIN([[0,2*PI],[0,1]])([n1,n2]);
	
	var mapping = function(p){
		var alfa = p[0];
		var modulo = p[1];
		
		return [(r*modulo)*COS(alfa),(r*modulo)*SIN(alfa)];
	};
	
	var m = MAP(mapping)(d);
	
	COLOR([1,0,0])(m);
	DRAW(m);
	return m;
}

var drawSpiral = function(r,turns,dist){
	var n1 = 20*turns;
	var n2 = 5;
	var d = DOMAIN([[0,turns*2*PI],[0,1]])([n1,n2]);
	
	var mapping = function(p){
		var alfa = p[0];
		var modulo = p[1];
		
		return [(r*modulo)*COS(alfa),(r*modulo)*SIN(alfa),(alfa/(2*PI))*dist];
	};
	
	var m = MAP(mapping)(d);
	
	COLOR([1,0,0])(m);
	DRAW(m);
	return m;
}
