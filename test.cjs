const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8'),script=html.split('<script>')[1].split('</script>')[0];
new vm.Script(script);
const ctx={};vm.createContext(ctx);vm.runInContext(script.split('const $=')[0]+';this.compute=compute;',ctx);
let games=0;
for(let n=2;n<=64;n++)for(let trial=0;trial<5;trial++){
 const teams=Array.from({length:n},(_,i)=>'Équipe '+i),results={};let v;
 for(let round=0;round<8;round++){
  v=ctx.compute(teams,results);if(v.complete)break;
  const ready=v.matches.filter(m=>m.playable&&!m.r);assert(ready.length>0);
  for(const m of ready){const win=Math.random()>.5;results[m.id]={a:m.a,b:m.b,x:win?3:1,y:win?1:3};games++;}
 }
 assert(v.complete,'Tournament '+n+' must finish');assert.equal(v.ranking.length,n);assert.equal(new Set(v.ranking.map(r=>r.team)).size,n);assert.deepEqual(Array.from(v.ranking,r=>r.place),Array.from({length:n},(_,i)=>i+1));
 // Each group's displayed range must match its teams' final real places, including byes.
 for(const groups of v.rounds)for(const g of groups){
  const members=g.matches.flatMap(m=>[m.a,m.b]).filter(t=>t!=null);
  const places=v.ranking.filter(r=>members.includes(r.team)).map(r=>r.place);
  assert.equal(g.placeHigh-g.placeLow+1,members.length);
  if(places.length){assert.equal(g.placeLow,Math.min(...places));assert.equal(g.placeHigh,Math.max(...places));}
 }
 // Correct the first result; downstream scores involving changed teams must be invalid.
 const first=v.matches.find(m=>m.r);results[first.id]={...first.r,x:first.r.y,y:first.r.x};const changed=ctx.compute(teams,results);if(n>2){assert(!changed.complete);assert(changed.matches.some(m=>m.playable&&!m.r));}else assert(changed.complete);
}
console.log('PASS: 315 complete tournaments (2–64 teams), '+games+' scored matches, full unique rankings, and correction invalidation.');
