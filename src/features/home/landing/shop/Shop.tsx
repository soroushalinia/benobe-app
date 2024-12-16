const Shop: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row justify-between">
        <p className="text-3xl font-bold">پرفروش ترین محصولات</p>
        <button className="rounded-xl bg-primary px-2 py-1 text-white">
          <p>مشاهده محصولات بیشتر</p>
        </button>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div></div>
      </div>
    </div>
  );
};

export default Shop;
