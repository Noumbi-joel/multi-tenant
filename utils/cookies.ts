import Cookies from "js-cookie";

export const setCheckoutCookie = ({
  country,
  email,
  fullAddress,
  fullName,
  phone,
}: Omit<ICheckout, "expressDelivery" | "twoDaysDelivery" | "saveNextTime">) => {
  Cookies.set("checkout_country", country);
  Cookies.set("checkout_email", email);
  Cookies.set("checkout_fullAddress", fullAddress);
  Cookies.set("checkout_fullName", fullName);
  Cookies.set("checkout_phone", phone);
};

export const setAdminCookie = (
  uid: string,
  email: string,
  fullName: string
) => {
  Cookies.set("admin_uid", uid);
  Cookies.set("admin_email", email);
  Cookies.set("admin_fullName", fullName);
};

export const clearAdminCookie = () => {
  Cookies.remove("admin_uid");
  Cookies.remove("admin_email");
  Cookies.remove("admin_fullName");
}

export const getCheckoutCookie = () => {
  const country = Cookies.get("checkout_country");
  const email = Cookies.get("checkout_email");
  const fullAddress = Cookies.get("checkout_fullAddress");
  const fullName = Cookies.get("checkout_fullName");
  const phone = Cookies.get("checkout_phone");
  return {
    country,
    email,
    fullAddress,
    fullName,
    phone,
  };
};

export const removeCheckoutCookie = () => {
  Cookies.remove("checkout_country");
  Cookies.remove("checkout_email");
  Cookies.remove("checkout_fullAddress");
  Cookies.remove("checkout_fullName");
  Cookies.remove("checkout_phone");
};
