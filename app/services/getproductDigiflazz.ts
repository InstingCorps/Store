import axios from "axios";

interface Product {
  product_name: string;
  category: string;
  brand: string;
  type: string;
  // ... other information
}

export async function GetApi(category: string, brand: string, maxRetries = 5) {
  let retries = 0;

  while (retries < maxRetries) {
    const datas = {
      cmd: "prepaid",
      username: process.env.APP_USERNAME_DIGIFLAZZ,
    };

    try {
      const response = await axios.post(
        `${process.env.APP_URL_DIGIFLAZZ}/price-list`,
        datas
      );
      const dataRes: Product[] = await response.data.data;

      // Filter the data based on category, brand, and type
      const filteredData = dataRes.filter(
        (product) =>
          product.category === category && product.brand === brand && product.type
      );

      return filteredData;
    } catch (error) {
      console.error("Error fetching API:", error);
      retries++;

      if (retries < maxRetries) {
        console.log(`Retrying... (Attempt ${retries})`);
        // Optionally, you can introduce a delay between retries using setTimeout
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } else {
        console.error("Max retries reached. Unable to fetch API.");
      }
    }
  }

  // Return an empty array if retries are unsuccessful
  return [];
}
