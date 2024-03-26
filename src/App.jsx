import React, { useState, useEffect } from "react";
import Header from "../src/Layouts/Header";
import LocationIcon from "../src/SVGs/LocationIcon";
import WebsiteIcon from "../src/SVGs/WebsiteIcon";
import TwitterIcon from "../src/SVGs/TwitterIcon";
import CompanyIcon from "../src/SVGs/CompanyIcon";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/GhostHunter78")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let date = null;

  if (userData && userData.created_at) {
    date = new Date(userData.created_at);
  }

  const formattedDate = date
    ? date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <>
      <div className="w-screen px-6 pt-[30px] pb-[80px]">
        <Header />
        <div
          className="bg-white rounded-2xl mt-4 pt-8 px-6 pb-12"
          style={{ boxShadow: "0 16px 30px -10px rgba(70, 96, 187, 0.2)" }}
        >
          {userData && (
            <>
              <div className="flex items-center gap-5 w-full">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={userData.avatar_url}
                />
                <div className="flex flex-col items-start">
                  <p className="font-mono text-[16px] text-black font-bold">
                    {userData.name}
                  </p>
                  <p className="font-mono text-[14px] text-blue">
                    @{userData.login}
                  </p>
                  <p className="font-mono text-[14px] text-darkGray">
                    joined {formattedDate}
                  </p>
                </div>
              </div>
              <p className="mono text-[14px] mt-[35px] text-mainGray">
                {userData.bio ? userData.bio : "This user has no bio"}
              </p>
              <div className="bg-bodyBg rounded-lg px-[18px] py-[18px] mt-6 flex items-start justify-between">
                <div className="flex flex-col items-center gap-y-2">
                  <p className="text-[14px] text-mainGray mono">Repos</p>
                  <p className="text-[16px] text-black mono font-bold">
                    {userData.public_repos}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <p className="text-[14px] text-mainGray mono">Followers</p>
                  <p className="text-[16px] text-black mono font-bold">
                    {userData.followers}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                  <p className="text-[14px] text-mainGray mono">Following</p>
                  <p className="text-[16px] text-black mono font-bold">
                    {userData.following}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-4 mt-6 w-full">
                <div className="flex items-start gap-4">
                  <LocationIcon />
                  <p className="text-[12px] text-mainGray mono">
                    {userData.location}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <WebsiteIcon />
                  <p
                    className="text-[12px] text-mainGray mono"
                    onClick={() => window.open(userData.html_url, "_blank")}
                  >
                    {userData.html_url}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <TwitterIcon />
                  <p className="text-[12px] text-mainGray mono">
                    {userData.twitter_username === null
                      ? "This user has no twitter account"
                      : userData.twitter_username}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CompanyIcon />
                  <p className="text-[12px] text-mainGray mono">
                    {userData.company === null
                      ? "This user doesn't work in any company"
                      : userData.company}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
