import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
  HomeIcon,
  BriefcaseIcon,
  LinkIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";

// profile menu component
const profileMenuItems = [
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({onSignOut}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            
            
            alt="tania andrew"
            className="border border-gray-900 p-0.5 w-5 h-5 sm:w-10 sm:h-10"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={()=>{
                closeMenu();
                if (label==="Sign Out") {
                  onSignOut();
                }
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
    url: "/",
  },
  {
    label: "Services",
    icon: BriefcaseIcon,
    url: "/services",
  },
  {
    label: "Contact",
    icon: LinkIcon,
    url: "/contact",
  },
  {
    label: "About",
    icon: IdentificationIcon,
    url: "/about",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 ml-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, url }, key) => (
        <Typography
          key={label}
          as="a"
          href={url}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
const {user, logOut}=useContext(AuthContext)
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  const handleSignOut=async()=>{
    try{
      await logOut();
      toast.success("Logged Out Successful !")
    }catch(err){
      toast.error(err.message);
    }
  }
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <img src="https://i.ibb.co/h1vnBwr/logo.png" alt="" className="w-32" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        {/* login */}
        <div className="flex flex-row items-center">
          {
            user?(
              <>
              <Typography variant="small" className="mr-4">
                Hello, {user.displayName}
              </Typography>
              <ProfileMenu onSignOut={handleSignOut}/>
              </>
            ):(
              <Link to={`/login`}>
          <Button size="sm" variant="text">
            <span>Log In</span>
          </Button>
          </Link>
            )
          }
          
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
