export type PRODUCT = {
    imageUrl: string,
    name: string,
    price: string,
    color: string,
    size: string,
    id: number,
    brandName: string,
    quantity?:number
}

export type CartItem = PRODUCT & {
  quantity: number;
}
