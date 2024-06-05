import CompanyDescription from "@/app/components/CompanyDescription";
import ProductGrid from "@/app/components/ProductGrid";
export default function Home() {
    const rows = [];

    return (
        <div className={'flex flex-col w-full'}>
            <CompanyDescription />
            <ProductGrid />
        </div>
    )
}
