import health from "./heroes.js";
import sortPersons from "./matchers.js";

test("healthy health", ()=> {
    const result = health(60);
    expect(result).toBe("healthy");
});
test("healthy wounded", ()=> {
    const result = health(20);
    expect(result).toBe("wounded");
});
test("healthy critical", ()=> {
    const result = health(10);
    expect(result).toBe("critical");
});

test("sort person", ()=> {
    const result = sortPersons([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}
      ]);
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]);
});