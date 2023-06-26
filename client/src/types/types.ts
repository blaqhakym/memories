export type Product = {
  order: number;
  paymentStatus: string;
  fufillmentStatus: string;
  date: string;
  customer: string;
  total: number;
}

export type ProductStoreType = {
    products: Product[]
    addProduct: (product: Product)=>void
    removeProduct: (id:string)=>void
}


export type FormType = {
  formData: Product
  handleFormSubmit: (e:any)=> void
  handleChange: (e: any)=> void
}

export type IApiError = {
  message: string;
  description: string;
  statusCode: string | number;
};