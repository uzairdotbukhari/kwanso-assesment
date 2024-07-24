import React, { useEffect, useMemo, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { Container, IconButton } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import MapIcon from "@mui/icons-material/Map";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HttpsIcon from "@mui/icons-material/Https";

import {
  getCountryFlag,
  getNestedProperty,
} from "../utils/helpers/index.helper";

interface IProfileTab {
  tabId: string;
  icon: React.ReactNode;
  title: string;
  objKey: string;
}

const Profile = () => {
  const tabs: IProfileTab[] = useMemo(
    () => [
      {
        tabId: "profile",
        icon: <PersonIcon />,
        title: "Hi, My name is",
        objKey: "name.first",
      },
      {
        tabId: "email",
        icon: <EmailIcon />,
        title: "My email address is",
        objKey: "email",
      },
      {
        tabId: "birthday",
        icon: <CakeIcon />,
        title: "My birthday is",
        objKey: "dob.date",
      },
      {
        tabId: "address",
        icon: <MapIcon />,
        title: "My address is",
        objKey: "location.street.name",
      },
      {
        tabId: "phone",
        icon: <LocalPhoneIcon />,
        title: "My phone number is",
        objKey: "phone",
      },
      {
        tabId: "password",
        icon: <HttpsIcon />,
        title: "My password is",
        objKey: "login.password",
      },
    ],
    []
  );
  const [activatedTab, setActivatedTab] = useState<IProfileTab>(tabs[0]);

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    // redirect if state is null or empty
    if (state === null || state === undefined) {
      navigate("/");
    }
  }, [state, navigate]);
  
  return (
    <Container
      maxWidth={"md"}
      className="bg-slate-200 p-10 rounded-md shadow-sm mt-10"
    >
      <div className="w-full flex justify-center items-center relative">
        <img
          src={state?.profile?.picture?.large}
          className="rounded-full text-center z-10 border-x-4 m-1 border-white"
        />
        <hr className="h-0.5 bg-black bg-opacity-20 w-full absolute top-[70%]" />
      </div>
      <div className="mt-6">
        <div className="text-center py-6">
          <h1 className="text-lg">{activatedTab.title}</h1>
          <p className="text-2xl flex justify-center items-center gap-2">
            {getNestedProperty(state?.profile, activatedTab.objKey)}
            {activatedTab.tabId === "address" ? (
              <img
                className="w-6"
                src={getCountryFlag(state?.profile?.location?.country)}
              />
            ) : null}
          </p>
        </div>
        <div className="flex justify-center items-center gap-6">
          {tabs.map((tab, idx) => (
            <IconButton
              onClick={() => setActivatedTab(tab)}
              key={idx}
              className="hover:bg-gray-200"
            >
              {tab.icon}
            </IconButton>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
