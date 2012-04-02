var triangolo = SIMPLICIAL_COMPLEX([[0,0],[1,1],[0,2]])([[0,2,1]]);

DRAW(triangolo);


var piramide = EXTRUDE([-1,1,-1,1])(triangolo);

DRAW(piramide);


//2

var punto = SIMPLICIAL_COMPLEX([[0,0]])([[0]]);

DRAW(punto);

var retta = EXTRUDE([-1,1])(punto);

DRAW(retta);
// retta non e' piu' estrudibile, e' in 3D


//TESSERATTO:
var verts = [];
for(var x = 0; x<2;x++){
for(var y = 0; y<2;y++){
for(var z = 0; z<2;z++){
  verts.push([x,y,z]);
}}};

var cubo = SIMPLICIAL_COMPLEX(verts)([[0,1,2],[1,2,3],[2,3,4],[1,7,4],[4,5,6],[5,6,7]]);
//facce messe a caso, non e' un cubo
DRAW(cubo);

var tess = EXTRUDE([1])(cubo);


