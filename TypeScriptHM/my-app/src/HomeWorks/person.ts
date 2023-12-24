interface IPerson {
    name: string;
    age: number;
    language?: "JS" | "TS"
  }
  
  const Person: IPerson = {
    name: "Islam",
    age: 24
  };
  
  export default Person;