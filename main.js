let hero1 ={
    name: 'Spider-Man',
    xp: 900
}
let hero2 ={
    name: 'Batman',
    xp: 1500
}
let hero3 ={
    name: 'Hulk',
    xp: 2700
}
let hero4 ={
    name: 'Thor',
    xp: 5500
}
let hero5={
    name: 'Superman',
    xp: 8500
}
let hero6={
    name:'Flash',
    xp: 9500 
}
let hero7={
    name:'Iron-Man',
    xp: 11000
}
const input = [hero1,hero2,hero3,hero4,hero5,hero6,hero7];
for(let i = 0; i < input.length; i++){
    let heroName = input[i].name;
    let heroXp = input[i].xp;
    let heroRank = '';
    
    if(heroXp<=1000){
        heroRank = 'Ferro';
    }
    else if(heroXp>1000 && heroXp<=2000){
        heroRank = 'Bronze';
    }
    else if(heroXp>2000 && heroXp<=5000){
        heroRank = 'Prata Ouro';
    }
    else if(heroXp>5000 && heroXp<=8000){
        heroRank = 'Platina Diamante';
    }
    else if(heroXp>8000 && heroXp<=9000){
        heroRank = 'Ascendente';
    }
    else if(heroXp>9000 && heroXp<=10000){  
        heroRank = 'Imortal';
    }
    else{
        heroRank = 'Radiante';
    }
    
    console.log(`o heroi ${heroName} alcançou o rank ${heroRank} com ${heroXp} pontos de experiência!`);
    console.log('--------------------------------------');
}