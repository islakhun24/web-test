const ProductLoadingShimmer = () => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-xl animate-pulse transition-shadow ">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md bg-gray-200">
                <div className={`absolute top-0 left-0 w-full h-full to-gray-600 animate-shimmer block`}></div>
            </div>
            <div className="relative w-2/3 h-8 mb-4 overflow-hidden rounded-md bg-gray-200"></div>
            <div className="relative w-1/2 h-8 mb-4 overflow-hidden rounded-md bg-gray-200"></div>
        </div>
    )
}


export default ProductLoadingShimmer
