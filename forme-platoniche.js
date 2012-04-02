

// SOLIDI PLATONICI: -------------------------------------------------------------------------------------------

var drawCubo = function (l){

	var verts = [];
	var rad2 = Math.sqrt(2);

	for(var i = 0; i<=1; i++){
	for(var j = 0; j<=1; j++){
	for(var k = 0; k<=1; k++){
		verts.push([i,j,k]);
	}
	}
	}
	


	var m = SIMPLICIALCOMPLEX(verts)([[0,2,3,1],[2,6,7,3],[4,5,7,6],[0,4,5,1],[1,3,7,5],[0,2,4,6]]);

	DRAW(m);
	return m;
}