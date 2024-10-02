function setRank(herovictorys){
    if(herovictorys<=10){
        return heroRank = 'Ferro';
    }
    else if(herovictorys>10 && herovictorys<=20){
        return heroRank = 'Bronze';
    }
    else if(herovictorys>20 && herovictorys<=50){
        return heroRank = 'Prata';
    }
    else if(herovictorys>50 && herovictorys<=80){
        return heroRank = 'Ouro';
    }
    else if(herovictorys>80 && herovictorys<=90){
        return heroRank = 'Diamante';
    }
    else if(herovictorys>90 && herovictorys<=100){  
        return heroRank = 'Lendário';
    }
    else{
        return heroRank = 'Imortal';
    }

}
let hero1 ={
    name: 'Spider-Man',
    victorys: 9
}
let hero2 ={
    name: 'Batman',
    victorys: 15
}
let hero3 ={
    name: 'Hulk',
    victorys: 27
}
let hero4 ={
    name: 'Thor',
    victorys: 55
}
let hero5={
    name: 'Superman',
    victorys: 85
}
let hero6={
    name:'Flash',
    victorys: 95 
}
let hero7={
    name:'Iron-Man',
    victorys: 110
}
const input = [hero1,hero2,hero3,hero4,hero5,hero6,hero7];
for(let i = 0; i < input.length; i++){
    let heroName = input[i].name;
    let herovictorys = input[i].victorys;
    let heroRank = '';
    
    
    
    console.log(`o heroi ${heroName} tem salde de ${herovictorys} e esta no nivel ${setRank(herovictorys)}`);
    console.log('--------------------------------------');
}