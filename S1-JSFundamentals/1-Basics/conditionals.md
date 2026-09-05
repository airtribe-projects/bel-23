
### Basic If

```
let age = 18;

if (age >= 18) {
  console.log("Adult");
}
```


### If Else

```
age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```


### Comparison Operator

| Operator | Meaning           |
| -------- | ----------------- |
| `>`      | Greater than      |
| `<`      | Less than         |
| `>=`     | Greater or equal  |
| `<=`     | Less or equal     |
| `!=`.    | not equal         | 
| `===`    | Strict equality   |
| `!==`    | Strict inequality |


if ("Hello") {
  consule.log("runs");
}


#### Common Falsy Values
| Value       | Falsy? |
| ----------- | ------ |
| `false`     | Yes    |
| `0`         | Yes    |
| `""`        | Yes    |
| `null`      | Yes    |
| `undefined` | Yes    |
| `NaN`       | Yes    |


### Ternary Operator

Short conditional syntax.


```
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
```




### Switch Case
Used for many exact matches.

```
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Unknown");
}
```



