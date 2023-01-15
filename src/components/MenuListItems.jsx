import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  AttachMoney,
  Dashboard,
  Inventory,
  ShoppingCart,
  Stars, Store,
  SupervisorAccount
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const MenuListItems = () => {
  const navigate = useNavigate()


  const navItems = [
    {
      icon: <Dashboard />,
      title: "Dashboard",
      url: "/stock/"
    },
    {
      icon: <ShoppingCart />,
      title: "Purchase",
      url: "/stock/purchases"
    },
    {
      icon: <AttachMoney />,
      title: "Dashboard",
      url: "/stock/sales/"
    },
    {
      icon: <Store />,
      title: "Firms",
      url: "/stock/firms/"
    },
    {
      icon: <Stars />,
      title: "Brands",
      url: "/stock/brands/"
    },
    {
      icon: <Inventory />,
      title: "Products",
      url: "/stock/products/"
    },
    {
      icon: <SupervisorAccount />,
      title: "Admin Panel",
      url: "https://13549.fullstack.clarusway.com/admin",
    },
  ]

  const iconStyle = {
    color: "#eee",
    "& .MuiSvgIcon-root": { color: "#eee" },
    "&:hover": { color: "red", bgcolor: "lightBlue" },
    "&:hover .MuiSvgIcon-root": { color: "red" }
  }

  return (
    <div>
      <List>
        {navItems?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.url.includes("http") && (
              <ListItemButton to={item.url} sx={iconStyle}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}

            {!item.url.includes("http") && (
              <ListItemButton onClick={() => navigate(item.url)} sx={iconStyle}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MenuListItems