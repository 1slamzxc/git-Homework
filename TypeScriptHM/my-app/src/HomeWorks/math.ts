type TMath = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
  };
  
  const mathFunction: TMath = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };
  
  export default mathFunction;