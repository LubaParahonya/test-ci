const persons = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
  ]
  
  export default function sortPersons(persons) {
      return persons.sort((a, b) => a.health < b.health ? 1 : -1);
  }
