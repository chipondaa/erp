import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  
  BellIcon,
 
  SunIcon,
  TagIcon,
  
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
 
const navListMenuItems = [
  {
    title: "Incidents",
    description: "Here is the total of all incidents that occured.",
    icon: BellIcon,
  },
  {
    title: "Risk",
    description: "Risks found at the workplace",
    icon: ExclamationTriangleIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="/blood" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="large" className="font-medium"  color="blue-gray-900">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Info
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block  blue-gray-900 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="large"
        color="blue-gray-900"
        className="font-medium"
      >
    
<NavLink to="/results"> <ListItem className="flex items-center gap-2 py-2 pr-4">Blood Results</ListItem></NavLink>
       
      </Typography>


      <Typography
        as="a"
        href="#"
        variant="large"
        color="blue-gray-900"
        className="font-medium"
      >
    
<NavLink to="/bmp_results"> <ListItem className="flex items-center gap-2 py-2 pr-4">BMP Results</ListItem></NavLink>
       
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="large"
        color="blue-gray-900"
        className="font-medium"
      >
    
<NavLink to="/clientdetails"> <ListItem className="flex items-center gap-2 py-2 pr-4">Client Details</ListItem></NavLink>
       
      </Typography>

      <NavListMenu />
      <Typography
        as="a"
       
        variant="large"
        
        color="blue-gray-900 "
        className="font-medium"
      ><NavLink to="/blood"> <ListItem className="flex items-center gap-2 py-2 pr-4">
      Add Blood Test
    </ListItem></NavLink>
    
        
      </Typography>







      <Typography
        as="a"
       
        variant="large"
        color="blue-gray-900"
        className="font-medium"
      ><NavLink to="/bmp"> <ListItem className="flex items-center gap-2 py-2 pr-4">
      Add BMP Test
    </ListItem></NavLink>
    
        
      </Typography>

      <Typography
        as="a"
       
        variant="large"
        color="blue-gray-900"
        className="font-medium"
      ><NavLink to="/client"> <ListItem className="flex items-center gap-2 py-2 pr-4">
      Add Client Details
    </ListItem></NavLink>
    
        
      </Typography>
    </List>
  );
}
 
export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-full px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          color="blue"
          variant="h3"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Virginia Argpa.
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <NavLink to="/login"><Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button></NavLink>
          
          <NavLink to="/register"><Button variant="gradient" size="sm">
            Sign In
          </Button></NavLink>
          
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <NavLink to="/login"> <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button></NavLink>
         <NavLink to="/register">  <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button></NavLink>
        
        </div>
      </Collapse>
    </Navbar>
  );
}