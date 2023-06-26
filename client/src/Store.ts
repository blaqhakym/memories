import { create } from "zustand";
import { ProductStoreType } from "./types/types";

const productStore = create<ProductStoreType>((set) => ({
  products: [],
  addProduct: (product) => {
      set((store) => ({
        products: [...store.products, product]
      }));
  },
  removeProduct: (customer) => {
    set((store) => ({
      products: store.products.filter((p) => p.customer !== customer),
    }));
  },
}));

const useProducts = productStore;

export default useProducts;
