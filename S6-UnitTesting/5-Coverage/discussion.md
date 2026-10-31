
<!-- Coverage -->

```
{
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 85,
      "lines": 90,
      "statements": 95
    },
    "src/components/button.js": {
      "branches": 100,
      "lines": 100
    }
  }
}

```


```
function processNumbers(a, b) {
  let result = a + b; 
  if (result > 10) { 
    result = result * 2; return result; // 1 line          
  } else {  
    // 2 lines, one statement
    result = (a * b) +                             
    (a - b);
  }
  return result; 
}
```
