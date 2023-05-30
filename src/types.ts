export type Product = {
  id: number;
  price: Money;
  title: string;
};

export type Money = {
  value: number;
  currency: "USD" | "EUR";
};
