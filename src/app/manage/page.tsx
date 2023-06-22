export default function ManageIndex() {
  const generateRandomPrice = () => {
    // Generate a random price between 1 and 100
    const randomPrice = Math.floor(Math.random() * 100) + 1;
    return `RM ${randomPrice}`;
  };
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="bg-gray-200 px-4 py-2">
        {/* Header content here */}
        <div className="flex items-center">
          <input
            type="text"
            className="w-full border border-gray-300 p-2"
            placeholder="Search by name or SKU"
          />
        </div>
      </header>

      {/* Main */}
      <main className="overflow-auto bg-gray-100 ">
        <div className="flex h-[calc(100vh-100px)] flex-grow overflow-y-auto ">
          {/* Product Listing */}
          <div className="h-[calc(100vh - 100px)] flex w-9/12 overflow-y-auto">
            {/* Product listing content here */}
            <div className=" p-4">
              {/* Product listing items */}
              <div className="grid grid-cols-5 gap-4">
                {[...Array(40)].map((_, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 bg-white p-4"
                  >
                    <div className="mb-4 h-32 w-full bg-gray-300">
                      <img
                        src={`https://picsum.photos/200?random=${index}`}
                        alt={`Product ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold">Product {index + 1}</h3>
                    <p>Description of Product {index + 1}</p>
                    <p className="font-semibold text-green-500">
                      {generateRandomPrice()}
                    </p>
                    <button className="mt-2 w-full bg-blue-500 px-4 py-2 text-white">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Product */}
          <div className="flex w-3/12 bg-gray-200">
            {/* Selected product content here */}
            <div className="p-4">
              {/* Selected product details */}
              <div className="mb-4">
                <h3 className="text-lg font-bold">Selected Product</h3>
                <p>Details of the selected product</p>
              </div>
              {/* Add more selected product details as needed */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-gray-200 px-4 py-2">
        {/* Footer content here */}
        <p className="">
          &copy; 2023 POS System. All rights reserved. | <a href="/">Home</a>
        </p>
      </footer>
    </div>
  );
}
