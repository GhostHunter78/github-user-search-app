import Moon from "../SVGs/Moon";
import Sun from "../SVGs/Sun";
import SearchIcon from "../SVGs/SearchIcon";

function Header({ toggleTheme, activeTheme, onSearch, setError }) {
  const handleSearchClick = () => {
    const input = document.getElementById("searchInput");
    const username = input.value.trim();
    if (username) {
      onSearch(username);
    } else {
      setError("Username cannot be empty");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <img
          src={
            activeTheme === "light"
              ? "/assets/images/black-logo.png"
              : "/assets/images/white-logo.png"
          }
        />
        <div className="flex items-center gap-4" onClick={toggleTheme}>
          <p
            className="mono uppercase font-bold text-[14px] text-mainGray tracking-[2.5px]"
            style={{ color: activeTheme === "light" ? "#4b6a9b" : "white" }}
          >
            {activeTheme === "light" ? "Dark" : "Light"}
          </p>
          {activeTheme === "light" ? <Moon /> : <Sun />}
        </div>
      </div>
      <div className="w-full grid relative mt-9 cursor-pointer">
        <input
          id="searchInput"
          className="py-4 pl-[56px] pr-[90px] border-none text-[14px] font-medium mono font-weight-400 leading-20 outline-none rounded-2xl"
          type="text"
          placeholder="Search GitHub username…"
          style={{
            boxShadow:
              activeTheme === "light"
                ? "0 16px 30px -10px rgba(70, 96, 187, 0.2)"
                : "",
            background: activeTheme === "light" ? "#fefefe" : "#1e2a47",
            color: activeTheme === "light" ? "#222731" : "white",
          }}
        />
        <label className="absolute grid place-items-center top-[-2px] bottom-0">
          <button className="bg-transparent border-0 pl-[18px] outline-none">
            <SearchIcon />
          </button>
        </label>
        <label className="absolute grid place-items-center top-[-2px] right-2 bottom-0">
          <button
            className="bg-blue border-0 rounded-lg outline-none mono text-[13px] font-bold text-white py-2 px-4"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </label>
      </div>
    </div>
  );
}

export default Header;
