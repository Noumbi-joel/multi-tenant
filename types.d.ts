interface IProduct extends ICreateProduct {
    visible: boolean;
    selected: boolean;
    isEditing: boolean;
  }
  
  interface ICategory extends ICreateCategory {
    visible: boolean;
    selected: boolean;
    isEditing: boolean;
  }
  
  interface ICustomer {
    id: string;
    name: string;
    email: string;
    photoUrl: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    totalSpent: number;
    totalOrders: number;
  }
  
  type SignInFormProps = {
    email: string;
    password: string;
    remember: boolean;
  };
  
  type SignUpFormProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    country: string;
    terms: boolean;
  };
  
  type StoreProps = {
    cart: {
      qty: number;
      cartItems: ICart[];
      totalQuantities: number;
      totalPrice: number;
      extra: string;
    };
    orders: {
      orders: ICheckoutOrder[];
      filteredOrders: ICheckoutOrder[];
      nothingFound: boolean;
      sortBy: string;
      filterBy: string;
    };
    customers: {
      customers: ICustomer[];
      filteredCustomers: ICustomer[];
      nothingFound: boolean;
      sortBy: string;
    };
    products: {
      products: IProduct[];
      filteredProducts: IProduct[];
      imageOne: string;
      imageTwo: string;
      imageThree: string;
      imageFour: string;
      filterProductByCategory: string;
      filterProductByPrice: string;
      sortProductBy: string;
      extras: string[];
      tags: string[];
      nothingFound: boolean;
      selectAllProd: false;
      editableProduct: ICreateProduct | null;
      isEditing: boolean;
    };
    profile: {
      photoUrl: {
        url: string;
        name: string;
      };
    };
    modal: { isGoingBack: boolean };
    settings: {
      store: IStore | null;
      drawer: boolean;
      menuDrawer: boolean;
      cartDrawer: boolean;
      filtersDrawer: boolean;
      settings: {
        legal: ILegal | null;
        general: ISettingsGeneral | null;
        socialProfiles: ISocialProfile | null;
      };
      favicon: {
        url: string;
        name: string;
      };
      logo: { url: string; name: string };
      bannerImage: { url: string; name: string };
    };
    categories: {
      categories: ICategory[];
      image: { src: string; name: string };
      filteredCategories: ICategory[];
      nothingFound: boolean;
      selectAllCat: false;
      editableCategory: ICreateCategory;
      isEditing: boolean;
    };
  };
  
  type CreateStoreProps = {
    storeName: string;
    storeCategory: string;
  };
  
  interface IStore {
    id: string;
    createdAt: Date;
    storeCategory: string;
    storeName: string;
    owner: {
      ownerEmail: string;
      ownerId: number;
      ownerName: string;
      ownerPhotoUrl: string;
    };
  }
  
  interface ICreateProduct {
    id: string;
    name: string;
    description: string;
    price: string;
    salePrice: string;
    status: string;
    category: string;
    inventory: string;
    isFragile: boolean;
    createdAt: string;
    updatedAt: string;
    imageOne: string;
    imageTwo: string;
    imageThree: string;
    imageFour: string;
    tags: string[];
    extras: string[]
    purchaseNumber: number;
  }
  
  interface ICreateCategory {
    id: string;
    name: string;
    description: string;
    status: string;
    image: string;
    createdAt: string;
    items: string;
    updatedAt: string;
  }
  
  interface ILegal {
    id: string;
    refundPolicy: string;
    privacyPolicy: string;
    shippingPolicy: string;
  }
  
  interface ISocialProfile {
    id: string;
    facebook: string;
    instagram: string;
    twitter: string;
    tiktok: string;
  }
  
  interface IAdminAccount {
    imageUrl: string;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  interface ISettingsGeneral {
    id: string;
    storeName: string;
    storeDescription: string;
    city: string;
    postalCode: string;
    country: string;
    state: string;
    bannerImage: string;
    faviconImage: string;
    storeLogo: string;
    bannerMainTitle: string;
    bannerDetails: string;
    mainTitle: string;
    mainTitleDetails: string;
    mainTitleCategory: string;
    mainTitleCategoryDetails: string;
  }
  
  interface ICart {
    id: string;
    image: string;
    price: number;
    extras: string[];
    quantity: number;
    name: string;
  }
  
  interface ICheckout {
    fullName: string;
    phone: string;
    fullAddress: string;
    email: string;
    country: string;
    expressDelivery: boolean;
    twoDaysDelivery: boolean;
    saveNextTime: boolean;
  }
  
  interface ITransaction {
    id: string;
    orderId: string;
    method: string;
    status: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface IOrder {
    id: string;
    uid: string;
    status: string;
    deliveryMethod: string;
    products: ICart[];
    subtotal: string;
    cost: string;
    totalPrice: string;
    totalQuantities: string;
    contactDetails: {
      fullName: string;
      phone: string;
      fullAddress: string;
      email: string;
      country: string;
    };
    createdAt: string;
    updatedAt: string;
  }
  