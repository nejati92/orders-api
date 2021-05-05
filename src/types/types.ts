interface OrderConnection {
  nextToken?: string;
  items: Order[];
}

interface Order {
  customerId: string;
  orderRef: string;
  products: Product[];
}

interface ProductConnection {
  nextToken?: string;
  items: Product[];
}

interface Product {
  price: number;
  productName: string;
  productId: string;
}
