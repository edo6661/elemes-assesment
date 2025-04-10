export interface Receipt {
  img: string;
  title: string;
  itemCount: number;
  color: string;
}
type ReceiptCategory = "Pizza" | "Kebab" | "Salmon" | "Cupcake" | "Doughnut";
export interface TrendingReceipt extends Receipt {
  star: number;
  category: ReceiptCategory;
}
