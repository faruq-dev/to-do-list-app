import logo from "./../assets/assdi-logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-[#0B192C] px-5 lg:px-10 2xl:px-0">
      <div className="max-w-[1320px] mx-auto py-9 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
        <div className="max-w-60">
          <img src={logo} alt="logo-file" />
        </div>

        {/* Search Bar */}
        <div className="flex space-x-5 items-center">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              // value={""}
              // onChange={""}
              placeholder="Search Task ..."
              className="bg-white px-4 py-3 rounded-lg w-full md:w-80 outline-none"
            />
            <div className="w-[25px] absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-85">
              <svg
                className="w-full"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#154C79"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Theme toggler */}
          <label className="cursor-pointer">
            <div className="border-[1px] border-[#fff]/20 rounded-lg p-3">
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_429_11017)">
                  <path
                    d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z"
                    fill="#8CC13F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_429_11017">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
