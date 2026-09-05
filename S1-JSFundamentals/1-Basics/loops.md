### Loop Types
- For loop
- Do While (Validate)
- While loop
- for of loop
- nested loops
- Infinite Loop 


#### For Loop
```
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```


#### While loop
Runs while condition remains true

```
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

#### for of loop
Modern cleaner loop.

```
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

No manual indexing needed.

### Break
Stops loop early

```
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

### continue
Skips current iteration

```
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}
```


### Nested Loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}


