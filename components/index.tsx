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
import VerticalNav from "./admin/VerticalNav";
import AdminLayout from "./admin/AdminLayout";
import AccountSettings from "./admin/AccountSettings";
import NavLinks from "./admin/NavLinks";
import CreateProductForm from "./admin/CreateProductForm";
import CreateCategoryForm from "./admin/CreateCategoryForm";

// common components
import ErrorOverlay from "./common/ErrorOverlay";

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
  ErrorOverlay,
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
  VerticalNav,
  AdminLayout,
  AccountSettings,
  NavLinks,
  CreateProductForm,
  CreateCategoryForm,
  StoreFrontTitle,
  StoreFrontCategoryList,
  StoreFrontProductList,
};
