const GadgetCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-page-width bg-sky-100 py-8">
        <div className="col-span-2 md:col-span-1 h-56 bg-sky-50">
            <h3 className="text-xl">This is categories side bar</h3>
        </div>
        <div className="col-span-2 lg:col-span-3 h-56 bg-yellow-200">
            <h3 className="text-xl">This is gadget cards portion</h3>
        </div>
    </div>
  );
};

export default GadgetCards;
