export type TCategory = 
  | "Flowering Plants"
  | "Indoor Plants"
  | "Fruit Trees"
  | "Herbs & Medicinal Plants"
  | "Ornamental Plants"
  | "Vegetable Plants"
  | "Shrubs & Bushes"
  | "Climbers & Creepers"
  | "Aquatic Plants"
  | "Seeds & Bulbs";

  export type TProduct = {          
    title: string;          
    description: string;    
    price: number;          
    quantity: number;       
    category: TCategory;     
    rating: number;         
    imageUrl: string;       
  };
  