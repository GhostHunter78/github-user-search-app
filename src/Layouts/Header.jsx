import Moon from "../SVGs/Moon";
import SearchIcon from "../SVGs/SearchIcon";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <img src="/assets/images/black-logo.png" />
        <div className="flex items-center gap-4">
          <p className="mono uppercase font-bold text-[14px] text-mainGray tracking-[2.5px]">
            dark
          </p>
          <Moon />
        </div>
      </div>
      <div className="w-full grid relative mt-9 cursor-pointer">
        <input
          id="searchInput"
          className="py-4 pl-[56px] pr-[90px] border-none text-[14px] bg-white text-black font-medium mono font-weight-400 leading-20 outline-none rounded-2xl"
          type="text"
          placeholder="Search GitHub username…"
          style={{ boxShadow: "0 16px 30px -10px rgba(70, 96, 187, 0.2)" }}
        />
        <label className="absolute grid place-items-center top-[-2px] bottom-0">
          <button className="bg-transparent border-0 pl-[18px] outline-none">
            <SearchIcon />
          </button>
        </label>
        <label className="absolute grid place-items-center top-[-2px] right-2 bottom-0">
          <button className="bg-blue border-0 rounded-lg outline-none mono text-[13px] font-bold text-white py-2 px-4">
            Search
          </button>
        </label>
      </div>
    </div>
  );
}

export default Header;
