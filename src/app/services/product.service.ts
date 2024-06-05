export type Product = {
    id: number;
    name: string;
    image: string;
};

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const productResponse = await fetch("https://www.giovankov.com/api/product.json");
        const productData = await productResponse.json();
        const imageResponse = await fetch("https://www.giovankov.com/api/image.json");
        const imageData = await imageResponse.json();

        const imageMap: { [key: string]: string } = {};
        imageData.data.forEach((group: { id: string[], image: string }) => {
            group.id.forEach((id: string) => {
                imageMap[id] = group.image;
            });
        });

        return productData.data.map((product: Product) => ({
            ...product,
            image: imageMap[product.id] || "",
        }));
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
};
