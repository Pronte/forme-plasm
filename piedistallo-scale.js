var building;

var mkCubiTraGradoni = function () {
	var dominio_cubi = SIMPLEX_GRID([
		REPLICA(10)([1,-3]),
		[-2,3],
		[1]
		]);	

	var mapping = function(p){
		var alfa = (p[0]*2*PI)/40;
		var mod = p[1];
		var w = p[2];

		return [mod*COS(alfa),mod*SIN(alfa),w];
	};		

	return MAP(mapping)(dominio_cubi);
};

var mkCylinderPieno = function(r,h,n,m,p,color) {
	r = (r === 0? 0 : (r || 1));
	h = (h===0? 0 : (h || 1));
	n = n || 16;
	m = m || 1;
	p = p || 1;
	color = color || [0,1,1];

	var dominioSolido = SIMPLEX_GRID([ REPEAT(n)(2*PI/n), REPEAT(m)((r)/m), REPEAT(p)(h/p) ]);
	var mappingSolido = function(pt) {
		return [pt[1]*SIN(pt[0]), pt[1]*COS(pt[0]), pt[2]];
	};

	dominioSolido = MAP(mappingSolido)(dominioSolido);

	return dominioSolido;
};

var mkGradoni = function () {
	var gradoni = [];
	for(var i = 0; i<5; i++){
		gradoni.push(mkCylinderPieno(5-(0.5*i),0.25*i,40));
	}
	return STRUCT([gradoni]);
}


building = STRUCT([mkCubiTraGradoni(),mkGradoni()]);
COLOR([0,0,0])(building);
DRAW(building);

//TODO non funzia gradoni