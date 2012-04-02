

// SOLIDI PLATONICI: -------------------------------------------------------------------------------------------

var drawCubo = function (l){

	var verts = [];
	var rad2 = ;

	for(var i = 0; i<=1; i++){
	for(var j = 0; j<=1; j++){
	for(var k = 0; k<=1; k++){
		verts.push([i,j,k]);
	}
	}
	}
	


	var m = SIMPLICIALCOMPLEX(verts)([[],[],[],[],[],[]]);

	DRAW(m);
	return m;
}