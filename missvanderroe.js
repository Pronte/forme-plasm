
var black = [0,0,0];

var pillars = SIMPLEX_GRID([	REPLICA(3)([0.15,-6*2.4,0.15]),	[0.15,-6*2.4,0.15],	[1.5,3,3]	]);

//COLOR(black)(pillars)
//DRAW(pillars);

//TRAVONI
var beams = SIMPLEX_GRID ([	REPLICA(3)([0.15,-6*2.4,0.15]),	[14.7],	[-7.5,1.5]	]);

//COLOR(black)(beams)
//DRAW(travoni);


var piani = SIMPLEX_GRID([	REPLICA(3)(14.7),	[-0.15,14.4,-0.15],	[-1.2,0.3,-2.7,0.3,-2.7,0.3]	]);

//DISEGNO FINO A QUI
var steelFrames = COLOR([0.2,0.2,0.2])(
					STRUCT([pillars,beams,piani])
	);



var cantileverFloors = SIMPLEX_GRID([	[0.15,2*2.4,0.15],	[-0.15,14.4,-0.15],	[-1.2,0.3,-2.7,0.3,-2.7,0.3]	]);

var cantileverPillars = SIMPLEX_GRID([	[0.15,-2*2.4,-0.15],	[0.15,-14.4,0.15],	[1.5,3,3]	]);

var cantileverBeams = SIMPLEX_GRID([	[0.15,-2*2.4,-0.15],	[0.15,14.4,0.15],	[-7.5,1.5]	]);

var cantilevers = STRUCT([cantileverFloors,cantileverPillars,cantileverBeams]);

//la traslazione nella struct viene applicata a tutti gli elementi alla sua destra (in questo caso a cantileverFloors)
var cantilevers1 = T([0])([-0.15])(  STRUCT([cantileverPillars, cantileverBeams, T([0])([-5.1 +0.15]), cantileverFloors])  );

var cantilevers2 = T([0])([3*14.7])(cantilevers);


var building = COLOR([0.2,0.2,0.2]) (STRUCT([steelFrames,cantilevers1,cantilevers2]));
DRAW(building);


var grid1 = SIMPLEX_GRID([-0.15,0.05,-2.3,0.05]);
var grid2 = SIMPLEX_GRID([-0.15,-0.05,2.3,-0.05,-0.15]);
var grid3 = SIMPLEX_GRID([-0.15,-0.05,-1.125,0.05]);

var grid = STRUCT([grid1,grid2,grid3]);
