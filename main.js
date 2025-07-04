let nomeHeroi = "Regine";
let experienciaHeroi = 10002;
let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]



for (let i = 501; i < nivelHeroi.length; i+ 100) {
    console.log(nivelHeroi[i]);
    
}

if(experienciaHeroi < 1000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[0]}`)// Se XP for menor do que 1.000 = Ferro
}else if(experienciaHeroi >= 1001 && experienciaHeroi < 2000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[1]} `)// Se XP for entre 1.001 e 2.000 = Bronze
}else if(experienciaHeroi >= 2001 && experienciaHeroi <= 5000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[2]} `)// Se XP for entre 2.001 e 5.000 = Prata
}else if(experienciaHeroi >= 5001 && experienciaHeroi <= 7000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[3]} `)// Se XP for entre 5.001 e 7.000 = Ouro
}else if(experienciaHeroi >= 7001 && experienciaHeroi <= 8000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[4]} `)// Se XP for entre 7.001 e 8.000 = Platina
}else if(experienciaHeroi >= 8001 && experienciaHeroi <= 9000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[5]} `)// Se XP for entre 8.001 e 9.000 = Ascendente
}else if(experienciaHeroi >= 9001 && experienciaHeroi <= 10000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[6]} `)// Se XP for entre 9.001 e 10.000= Imortal
}else{
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi[7]} `)// Se XP for maior ou igual a 10.001 = Radiante
};
