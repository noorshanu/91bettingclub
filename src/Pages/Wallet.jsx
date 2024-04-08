import Footer from "../sections/Footer";

const Wallet = () => {
  return (
    <div className="bg-[#ecedf4]">
      <div className="bg-[#ecedf4]">
        <div className="w-100 font-serif">
          <div className="w-[500px] mx-auto h-[50px] px-4 py-3 bg-gradient-to-r from-[#F95A59] to-[#FF998D] fixed top-0 left-1/2 transform -translate-x-1/2 z-[100]">
            <div className="center items-center text-center text-white relative flex justify-center text-2xl">
              Wallet
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ecedf4] p-0 m-0 box-border">
        <div className="bg-gradient-to-r from-[#F95A59] to-[#FF998D] flex flex-col items-center mt-10 text-lg text-white p-[1.32rem]">
          <div className="w-full flex justify-center">
            <img width={"50px"} src="/images/wallet-logo.png" />
          </div>
          <div className="w-full flex justify-center text-3xl">₹0.00</div>
          <div className="w-full flex justify-center text-xs">
            Total Balance
          </div>
          <div className="w-60 mt-2 flex justify-between text-xs my-8">
            <div className="flex flex-col items-center justify-center">
              <div className="text-xl">0</div>
              <div>Total amount</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xl">0</div>
              <div>Total deposit amount</div>
            </div>
          </div>
        </div>

        <dl style={{ height: "4rem" }} />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Wallet;
