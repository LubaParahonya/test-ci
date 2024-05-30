const heroes = {name: 'Маг', health: 90};
const  healthHero = heroes.health;

export default function health(healthHero){
if(healthHero > 50){
    return "healthy";
}
if(healthHero >= 15 && healthHero <= 50){
    return "wounded";
}
else{
    return "critical";
}

}