// 2D -> 2D

var drawFullCircle = function(r,n){
	var n1 = n || 20;
	var n2 = 5;
	var d = DOMAIN([[0,2*PI],[0,r]])([n1,n2]);
	
	var mapping = function(p){
		var alfa = p[0];
		var modulo = p[1];
		
		return [(modulo)*COS(alfa),(modulo)*SIN(alfa)];
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
		
		return [(r*modulo)*COS(alfa),
			(r*modulo)*SIN(alfa),
			(alfa/(2*PI))*dist
			];
	};
	
	var m = MAP(mapping)(d);
	
	COLOR([1,0,0])(m);
	DRAW(m);
	return m;
}


var draw3DSpiral = function(r,turns,dist,width){
	var n1 = 20*turns;
	var n2 = 5;
	var d = DOMAIN([[0,turns*2*PI],[0,1],[0,1]])([n1,n2,1]);
	
	var mapping = function(p){
		var alfa = p[0];
		var modulo = p[1];
		var w = p[2];
		return [(r*modulo)*COS(alfa)*-1,
			(r*modulo)*SIN(alfa),
			width*w + (-alfa * dist/(turns*2*PI))
			];
	};
	var m = MAP(mapping)(d);
	
	COLOR([1,0,0])(m);
	DRAW(m);
	return m;
}



var drawCupola = function(rb,rh){

	var alfamax = Math.acos(rh/rb);
	var n = rb*6;

	var d = DOMAIN([[0,alfamax],[0,2*PI]])([n,n]);

	var map = function (p){
		var alfa = p[0];
		var beta = p[1];

		var x = rb*COS(alfa)*COS(beta);
		var y = rb*COS(alfa)*SIN(beta);
		var z = rb*SIN(alfa);

		return [x,y,z];
	}
	var m = MAP(map)(d);


	DRAW(m);
	return m;
}


var drawCupolaSpessaNoob = function(rb,rh,width){

	var alfamax = Math.acos(rh/rb);
	var n1 = 2*rb;
	var n2 = 3*rb;

	var d = DOMAIN([[0,alfamax],[0,2*PI],[0,width]])([n1,n2,1]);

	var map = function (p){
		var alfa = p[0];
		var beta = p[1];
		var w = p[2];

		var x = rb*COS(alfa)*COS(beta);
		var y = rb*COS(alfa)*SIN(beta);
		var z = rb*SIN(alfa) + w;

		return [x,y,z];
	}
	var m = MAP(map)(d);


	DRAW(m);
	return m;
}


var drawCupolaSpessa = function(rb,rh,width){

	var alfamax = Math.acos(rh/rb);
	var n1 = 2*rb;
	var n2 = 3*rb;

	var d = DOMAIN([[0,alfamax],[0,2*PI],[0,width]])([n1,n2,1]);

	var map = function (p){
		var alfa = p[0];
		var beta = p[1];
		var w = p[2];

		var x = (rb+w)*COS(alfa)*COS(beta);
		var y = (rb+w)*COS(alfa)*SIN(beta);
		var z = (rb+w)*SIN(alfa);

		return [x,y,z];
	}
	var m = MAP(map)(d);


	DRAW(m);
	return m;
};

var drawCylinderPieno = function(r,h,n,m,p,color) {
	r = r || 1;
	h = h || 1;
	n = n || 16;
	m = m || 1;
	p = p || 1;
	color = color || [0,1,1];

	var dominioSolido = SIMPLEX_GRID([ REPEAT(n)(2*PI/n), REPEAT(m)((r)/m), REPEAT(p)(h/p) ]);
	var mappingSolido = function(pt) {
		return [pt[1]*SIN(pt[0]), pt[1]*COS(pt[0]), pt[2]];
	};

	dominioSolido = MAP(mappingSolido)(dominioSolido);
	DRAW(dominioSolido);
	COLOR(color)(dominioSolido);

	return dominioSolido;
};
