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

        <div className="relative  h-[400px] flex flex-col items-center text-white  ">
          <div
            className="info_content"
            style={{
              display: "flex",
              minHeight: "25rem",
              borderRadius: "1rem",
              backgroundColor: "#fff",
              justifyContent: "space-between",
              width: "28rem",
              overflow: "hidden",
              marginTop: "1rem",
              position: "relative",
              top: "-10%",
              zIndex: 10,
              boxShadow: "0 .10667rem .21333rem #d0d0ed5c",
            }}
          >
            <div className="flex flex-col  items-center w-full">
              <div className="text-black flex justify-between w-3/5 mx-4 my-8">
                <div className="flex flex-col justify-center items-center">
                  <div className="relative inline-block text-center">
                    <svg
                      height="100"
                      width="100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        r="45"
                        cx="50"
                        cy="50"
                        stroke="#D8D8D8"
                        strokeWidth="8"
                        fill="none"
                        opacity="0.5"
                      />
                    </svg>
                    <div className="absolute top-[50%] translate-y-[-50%] w-full">
                      0%
                    </div>
                  </div>
                  <div>₹0.00</div>
                  <div className="text-xs">Main Wallet</div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="relative inline-block text-center">
                    <svg
                      height="100"
                      width="100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        r="45"
                        cx="50"
                        cy="50"
                        stroke="#D8D8D8"
                        strokeWidth="8"
                        fill="none"
                        opacity="0.5"
                      />
                    </svg>
                    <div className="absolute top-[50%] translate-y-[-50%] w-full">
                      0%
                    </div>
                  </div>
                  <div>₹0.00</div>
                  <div className="text-xs">3rd Party Wallet</div>
                </div>
              </div>
              <div>
                <button
                  className="text-white h-10 rounded-2xl w-96  "
                  style={{
                    background:
                      "linear-gradient(180deg, #ff867a 0%, #f95959 100%)",
                  }}
                >
                  MAIN WALLET TRANSFER
                </button>
              </div>
              <div className={`my-4 flex justify-between w-96`}>
                <div className="flex flex-col items-center">
                  <div
                    className="bg-white  w-20 p-3 rounded-xl flex flex-col justify-center items-center "
                    style={{ boxShadow: "0 .10667rem 2.21333rem #d0d0ed5c" }}
                  >
                    <img className="w-12" src="/images/deposit-wallet.png" />
                  </div>
                  <div className="text-black text-sm my-1">Deposit</div>
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className="bg-white  w-20 p-3 rounded-xl flex flex-col justify-center items-center "
                    style={{ boxShadow: "0 .10667rem 2.21333rem #d0d0ed5c" }}
                  >
                    <img className="w-12" src="/images/withdraw.png" />
                  </div>
                  <div className="text-black text-sm my-1">Withdraw</div>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="bg-white  w-20 p-3 rounded-xl flex flex-col justify-center items-center "
                    style={{ boxShadow: "0 .10667rem 2.21333rem #d0d0ed5c" }}
                  >
                    <img className="w-12" src="/images/deposit-history.png" />
                  </div>
                  <div className="text-black text-center text-sm my-1 w-20">
                    Deposit history
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="bg-white  w-20 p-3 rounded-xl flex flex-col justify-center items-center "
                    style={{ boxShadow: "0 .10667rem 2.21333rem #d0d0ed5c" }}
                  >
                    <img className="w-12" src="/images/withdraw-history.png" />
                  </div>
                  <div className="text-black text-center text-sm my-1 w-20 ">
                    Withdrawal history
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative   flex  gap-2 mx-6 flex-wrap  text-white  ">
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-one-lottery.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">Lottery</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-two-chess.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">TB_Chess</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-three-wicket.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">Wickets9</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-four-jilli.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">JILI</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-five-mg.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">MG</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-six-evo.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">JDB</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-two-chess.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">EVO_Video</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-eight-bet.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">TB</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-nine-ag.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">Card365</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-ten-pg.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">AG_Video</div>
          </div>
          <div
            className={`bg-white w-36 h-24 rounded-xl py-8 px-10 flex flex-col justify-center items-center`}
            style={{
              backgroundImage: `url("/images/wallet-eleven-jdb.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0.10667rem 0.21333rem #d0d0ed5c",
            }}
          >
            <div className="text-black text-xs">0.00</div>
            <div className="text-gray-400 text-sm">PG</div>
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
