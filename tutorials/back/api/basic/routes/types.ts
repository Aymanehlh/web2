interface Drink {
    id: number;
    title: string;
    image: string;
    volume: number;
    price: number;
  }
interface Pizza {
  id : number;
  title: string;
  content: string;
 
}

interface NewPizza {
  id : number;
  title: string;
  content: string;
  
}
interface PizzaToUpdate {
  id : number;
  title: string;
  content: string;
  
}
  
  export type { Pizza, NewPizza, PizzaToUpdate, Drink };
  