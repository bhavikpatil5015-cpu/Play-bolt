
const games=[
 {id:'runner',title:'Runner Dash',icon:'🏃',file:'games/runner.html'},
 {id:'shooter',title:'Galaxy Shooter',icon:'🚀',file:'games/shooter.html'},
 {id:'racer',title:'Neon Racer',icon:'🏎️',file:'games/racer.html'}
];

let f=0;
function rotate(){
 document.getElementById('feat').innerText=games[f].title;
 f=(f+1)%games.length;
}
setInterval(rotate,5000);
rotate();

function loadGrid(){
 const g=document.getElementById('grid');
 g.innerHTML='';
 games.forEach(v=>{
  let c=document.createElement('div');
  c.className='bg-white p-4 rounded-xl shadow card';
  c.innerHTML=`<div class='text-4xl'>${v.icon}</div><div class='mt-2 font-bold'>${v.title}</div>`;
  c.onclick=()=>openGame(v);
  g.appendChild(c);
 });
}
loadGrid();

function playFeatured(){openGame(games[f]);}

function openGame(g){
 document.getElementById('gameFrame').src=g.file;
 document.getElementById('gameTitle').innerText=g.title;
 document.getElementById('gameView').classList.remove('hidden');
}
function closeGame(){
 document.getElementById('gameView').classList.add('hidden');
 document.getElementById('gameFrame').src='';
}
