import zeptoLogo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-white py-15 border-t border-[#e5e7eb]">
      <div className="mx-5 lg:mx-auto lg:max-w-7xl">
        <img src={zeptoLogo} alt="Zepto Logo" className="h-7.5" />
      </div>
    </div>
  );
};

export default Footer;
