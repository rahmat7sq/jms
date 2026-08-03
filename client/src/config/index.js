export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "axle", label: "Axle" },
      { id: "hub", label: "Hub" },
      { id: "air-tank", label: "Air Tank" },
      { id: "balance-rod-set", label: "Naka Jhula Balance Rod Set" },
      { id: "kamani", label: "Kamani (Leaf Spring)" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "tata", label: "Tata Motors" },
      { id: "ashok-leyland", label: "Ashok Leyland" },
      { id: "mahindra", label: "Mahindra" },
      { id: "eicher", label: "Eicher" },
      { id: "bharatbenz", label: "BharatBenz" },
      { id: "volvo", label: "Volvo" },
      { id: "force-motors", label: "Force Motors" },
      { id: "sml-isuzu", label: "SML Isuzu" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "axle",
    label: "Axle",
    path: "/shop/listing",
  },
  {
    id: "hub",
    label: "Hub",
    path: "/shop/listing",
  },
  {
    id: "air-tank",
    label: "Air Tank",
    path: "/shop/listing",
  },
  {
    id: "balance-rod-set",
    label: "Balance Rod Set",
    path: "/shop/listing",
  },
  {
    id: "kamani",
    label: "Kamani",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  axle: "Axle",
  hub: "Hub",
  "air-tank": "Air Tank",
  "balance-rod-set": "Naka Jhula Balance Rod Set",
  kamani: "Kamani (Leaf Spring)",
};

export const brandOptionsMap = {
  tata: "Tata Motors",
  "ashok-leyland": "Ashok Leyland",
  mahindra: "Mahindra",
  eicher: "Eicher",
  bharatbenz: "BharatBenz",
  volvo: "Volvo",
  "force-motors": "Force Motors",
  "sml-isuzu": "SML Isuzu",
};

export const filterOptions = {
  category: [
    { id: "axle", label: "Axle" },
    { id: "hub", label: "Hub" },
    { id: "air-tank", label: "Air Tank" },
    { id: "balance-rod-set", label: "Naka Jhula Balance Rod Set" },
    { id: "kamani", label: "Kamani (Leaf Spring)" },
  ],
  brand: [
    { id: "tata", label: "Tata Motors" },
    { id: "ashok-leyland", label: "Ashok Leyland" },
    { id: "mahindra", label: "Mahindra" },
    { id: "eicher", label: "Eicher" },
    { id: "bharatbenz", label: "BharatBenz" },
    { id: "volvo", label: "Volvo" },
    { id: "force-motors", label: "Force Motors" },
    { id: "sml-isuzu", label: "SML Isuzu" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];