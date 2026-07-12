export interface Order {
  _id?: string;
  userId: string;
  items: { productId: string; quantity: number }[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
}
