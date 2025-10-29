import axios from "axios";
import { PRODUCT } from "@/types/productType";

export const getProducts = async (): Promise<PRODUCT[]> => {
  try {
    const url =
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US";

    // 🔎 Debug key presence
   
console.log(' api key from process.env', process.env.NEXT_PUBLIC_RAPIDAPI_KEY)
    const response = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    });

 if (!process.env.NEXT_PUBLIC_RAPIDAPI_KEY) {
      console.error("Missing RapidAPI key!");
      return [];
    }
    console.log("Full API response:", response.data);

    const productsData = response?.data?.products;

    if (!Array.isArray(productsData)) {
      console.error("API response does not contain an array of products.");
      return [];
    }

    const productsList: PRODUCT[] = productsData.map((product: PRODUCT) => ({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl?.startsWith("http")
        ? product.imageUrl
        : `https://${product.imageUrl}`,
      price: product.price ?? "N/A",
      color: product.color ?? "N/A",
      size: product.size ?? "N/A",
      brandName:product.brandName ?? "no name"
    }));

    console.log("Mapped productsList:", productsList);

    return productsList;
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    // error is now typed as AxiosError
    console.error("Error fetching products:", error.response?.data || error.message);
  } else if (error instanceof Error) {
    console.error("Error fetching products:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}

};
