const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#D1D5DB] dark:bg-[#0B192C] px-5 lg:px-10 2xl:px-0 transition-all duration-700">
      <div className="max-w-[1320px] mx-auto py-8 mt-auto text-center text-[#0B192C] dark:text-white">
        © {currentYear} MD Omar Faruque. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
