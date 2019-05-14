
const scores = [100, 99, 66];
for(let i=0; i<scores.length; i++) {
	console.log( scores[i] );
}

scores[0] = 98;
for( let score of scores ) {
	console.log(score);
}

