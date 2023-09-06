import dynamic from "next/dynamic";

// auth components
import AuthHeader from "./auth/AuthHeader";

// admin components
import AdminWelcomeBanner from "./admin/AdminWelcomeBanner";
import AdminEmptyUI from "./admin/AdminEmptyUI";
import AdminSettingHeader from "./admin/AdminSettingHeader";
import AdminAnalyticBox from "./admin/AdminAnalyticBox";
import AdminTopAnalytic from "./admin/AdminTopAnalytic";
import AdminHeader from "./admin/AdminHeader";
import AdminOrderProductList from "./admin/AdminOrderProductList";
import AdminTransactionTable from "./admin/AdminTransactionTable";

// common components

// UI components
import StoreFrontTitle from "./store/StoreFrontTitle";
import StoreFrontProductList from "./store/StoreFrontProductList";
import StoreFrontCategoryList from "./store/StoreFrontCategoryList";


import {
  ThemeProvider,
  Card,
  Typography,
  Checkbox,
  Input,
  Button,
  Textarea,
  Select,
  Option,
  Drawer,
  Spinner,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Carousel,
  Avatar,
  Dialog,
  DialogBody,
  DialogFooter,
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

export {
  AuthHeader,
  ThemeProvider,
  Dialog,
  DialogBody,
  DialogFooter,
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Card,
  Typography,
  Checkbox,
  Input,
  Button,
  Textarea,
  Select,
  Option,
  Drawer,
  Spinner,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Carousel,
  Avatar,

  AdminWelcomeBanner,
  AdminSettingHeader,
  AdminEmptyUI,  
  AdminAnalyticBox,
  AdminTopAnalytic,
  AdminHeader,
  AdminOrderProductList,
  AdminTransactionTable,
  
  StoreFrontTitle,
  StoreFrontCategoryList,
  StoreFrontProductList
};
