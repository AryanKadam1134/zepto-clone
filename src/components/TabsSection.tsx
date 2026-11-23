import all from "../assets/all.png";
import cafe from "../assets/cafe.png";
import beauty from "../assets/beauty.png";
import electronics from "../assets/electronics.png";
import fashion from "../assets/fashion.png";
import fresh from "../assets/fresh.png";
import pharmacy from "../assets/pharmacy.png";
import toys from "../assets/toys.png";
import mobile from "../assets/mobile.png";
import home from "../assets/home.png";

const TAB_ITEMS = [
  { logo: all, name: "All", active: true },
  { logo: cafe, name: "Cafe" },
  { logo: home, name: "Home" },
  { logo: toys, name: "Toys" },
  { logo: fresh, name: "Fresh" },
  { logo: electronics, name: "Electronics" },
  { logo: mobile, name: "Mobile" },
  { logo: beauty, name: "Beauty" },
  { logo: fashion, name: "Fashion" },
  { logo: pharmacy, name: "Pharmacy" },
];

const TabsSection = () => {
  return (
    <div className="bg-white pt-3.5 border-b border-[#e5e7eb] overflow-hidden">
      <div className="w-full mx-5 lg:mx-auto lg:max-w-7xl">
        <div className="flex items-center gap-4.5">
          {TAB_ITEMS.map(({ name, logo, active }) => {
            return (
              <div key={name} className="flex flex-col items-center gap-2.5">
                <div
                  className={`px-1 flex items-center gap-1 ${active ? "text-[#950EDB]" : "text-[#586274]"}`}
                >
                  <img src={logo} className="size-6" />
                  <span className="font-medium text-[17px] ">{name}</span>
                </div>

                <div
                  className={`w-full border-2 ${active ? "border-[#950EDB]" : "border-transparent"} rounded-t-md`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
