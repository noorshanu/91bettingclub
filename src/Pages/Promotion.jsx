import Footer from "../sections/Footer";

const Promotion = () => {
  return (
    <div className="bg-[#ecedf4]">
      <div className="bg-[#ecedf4]">
        <div className="w-100 font-serif">
          <div className="w-[500px] mx-auto h-[50px] px-4 py-3 bg-[#F7F8FF] fixed top-0 left-1/2 transform -translate-x-1/2 z-[100]">
            <div className="flex justify-between w-full">
              <div className="flex items-center justify-center w-full">
                <div className="center items-center text-center relative flex justify-center text-xl font-helvetica">
                  Agency
                </div>
              </div>
              <div>
                <img className="w-8" src="/images/filter.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative top-12 h-[400px] flex flex-col items-center text-white bg-[#f95959] bg-promotion-bg bg-cover bg-center bg-no-repeat">
        <div className="mt-10 text-2xl">0</div>
        <div className="bg-[#ff8d8d] px-3 rounded-xl ">
          Yesterday's total commission
        </div>
        <div className="text-sm">
          Upgrade the level to increase commission income
        </div>
        <div
          className="info_content"
          style={{
            display: "flex",
            minHeight: "14rem",
            borderRadius: "1rem",
            backgroundColor: "#fff",
            justifyContent: "space-between",
            width: "28rem",
            overflow: "hidden",
            marginTop: "1rem",
            position: "relative",
            zIndex: 10,
            boxShadow: "0 .10667rem .21333rem #d0d0ed5c",
          }}
        >
          <div className="info">
            <div
              style={{
                backgroundPosition: "1rem center",
                backgroundSize: "2rem",
                lineHeight: "3.06667rem",
                width: "14rem",
              }}
              className={`bg-[url("/images/person.png")] bg-no-repeat  h-["1.06667rem"] pl-14 bg-[#f6f6f6] text-black`}
            >
              Direct subordinates
            </div>
            <div className="text-black border-r-2 flex flex-col items-center justify-center mt-2">
              <div className="text-sm">0</div>
              <div className="text-xs">number of register</div>
            </div>
            <div className="text-black border-r-2 flex flex-col items-center justify-center ">
              <div className="text-sm">0</div>
              <div className="text-xs">Deposit number</div>
            </div>
            <div className="text-black border-r-2 flex flex-col items-center justify-center ">
              <div className="text-sm">0</div>
              <div className="text-xs">Deposit amount</div>
            </div>
            <div className="text-black border-r-2 flex flex-col items-center justify-center mb-2  ">
              <div className="text-sm">0</div>
              <div className="text-xs text-center ">
                Number of people making first deposit
              </div>
            </div>
          </div>
          <div className="info">
            <div
              style={{
                backgroundPosition: "1rem center",
                backgroundSize: "2rem",
                lineHeight: "3.06667rem",
                width: "14rem",
              }}
              className={`bg-[url("/images/person.png")] bg-no-repeat  h-["1.06667rem"] pl-14 bg-[#f6f6f6] text-black`}
            >
              Team subordinates
            </div>
            <div className="text-black  flex flex-col items-center justify-center mt-2">
              <div className="text-sm">0</div>
              <div className="text-xs">number of register</div>
            </div>
            <div className="text-black  flex flex-col items-center justify-center ">
              <div className="text-sm">0</div>
              <div className="text-xs">Deposit number</div>
            </div>
            <div className="text-black  flex flex-col items-center justify-center ">
              <div className="text-sm">0</div>
              <div className="text-xs">Deposit amount</div>
            </div>
            <div className="text-black  flex flex-col items-center justify-center mb-2 ">
              <div className="text-sm">0</div>
              <div className="text-xs text-center ">
                Number of people making first deposit
              </div>
            </div>
          </div>
        </div>
        <div className="data-v-d18c566e"></div>
      </div>
      <div className="relative top-12 bg-[#f7f8ff] flex justify-center">
        <button
          className="text-white h-10  "
          style={{
            borderRadius: "2rem",
            width: "25rem",
            background: "linear-gradient(180deg, #ff867a 0%, #f95959 100%)",
          }}
        >
          INVITATION LINK
        </button>
      </div>
      <div className="relative top-12 pt-5 pb-3 bg-[#f7f8ff] flex flex-col gap-3 justify-center">
        <div className="bg-white  mx-4 rounded-xl flex justify-between p-4">
          <div className="flex justify-center gap-2 items-center">
            <img width={"40px"} src="/images/promotion-link-one.png" />
            <span>Copy Invitaion Code</span>
          </div>
          <div className="flex items-center">
            <span>767523525021</span>
            <img width={"35px"} src="/images/forward-arrow.png" />
          </div>
        </div>

        <div className="bg-white  mx-4 rounded-xl flex justify-between p-4">
          <div className="flex justify-center gap-2 items-center">
            <img width={"40px"} src="/images/promotion-link-two.png" />
            <span>Subordinate Data</span>
          </div>
          <div>
            <img width={"35px"} src="/images/forward-arrow.png" />
          </div>
        </div>

        <div className="bg-white  mx-4 rounded-xl flex justify-between p-4">
          <div className="flex justify-center gap-2 items-center">
            <img width={"40px"} src="/images/promotion-link-three.png" />
            <span>Commision detail</span>
          </div>
          <div>
            <img width={"35px"} src="/images/forward-arrow.png" />
          </div>
        </div>

        <div className="bg-white  mx-4 rounded-xl flex justify-between p-4">
          <div className="flex justify-center gap-2 items-center">
            <img width={"40px"} src="/images/promotion-link-four.png" />
            <span>Invitation rules</span>
          </div>
          <div>
            <img width={"35px"} src="/images/forward-arrow.png" />
          </div>
        </div>

        <div className="bg-white  mx-4 rounded-xl flex justify-between p-4">
          <div className="flex justify-center gap-2 items-center">
            <img width={"40px"} src="/images/promotion-link-five.png" />
            <span>Agent line customer service</span>
          </div>
          <div>
            <img width={"35px"} src="/images/forward-arrow.png" />
          </div>
        </div>

        <div className="bg-white  mx-4 rounded-xl flex justify-between p-4">
          <div className="flex justify-center gap-2 items-center">
            <img width={"40px"} src="/images/promotion-link-six.png" />
            <span>Rebate Ratio</span>
          </div>
          <div>
            <img width={"35px"} src="/images/forward-arrow.png" />
          </div>
        </div>
      </div>
      <dl style={{ height: "150px" }} />
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Promotion;
