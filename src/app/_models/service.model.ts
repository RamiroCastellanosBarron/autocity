import { Shop } from "./shop.model";

export interface Servicio {
  id: number;
  name: string;
  description: string;
  price: number;
  shop: Shop;
}
