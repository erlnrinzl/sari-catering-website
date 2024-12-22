export const role = "admin";

export type Customer = {
  customerID: string;
  customerName: string;
  customerGender: "Male" | "Female";
  customerDOB: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  customerType: "Personal" | "Corporate" | "HomeCatering";
  createdAt: string;
};

export type Menu ={
  menuID: string,
  menuName: string,
  menuDesc: string,
  menuPrice: number,
  menuType: "FOOD" | "DRINK",
  menuCategoryID: string,
  createdAt: string
}

export const customersData: Customer[] = [
  {
    customerID     : 'CU001',
    customerName   : 'John Doe',
    customerGender : 'Male',
    customerDOB    : '19980719',
    customerEmail  : 'johndoe@mail.com',
    customerPhone  : '08123456789',
    customerAddress: 'Pentagon St. No 32',
    customerType   : 'Personal',
    createdAt      : '20241101',
  },
  {
    customerID     : 'CU002',
    customerName   : 'Jane Smith',
    customerGender : 'Female',
    customerDOB    : '19920514',
    customerEmail  : 'janesmith@mail.com',
    customerPhone  : '08129876543',
    customerAddress: 'Maple St. No 15',
    customerType   : 'Personal',
    createdAt      : '20241102',
  },
  {
    customerID     : 'CU003',
    customerName   : 'Michael Brown',
    customerGender : 'Male',
    customerDOB    : '19851230',
    customerEmail  : 'michaelbrown@mail.com',
    customerPhone  : '08134567890',
    customerAddress: 'Elm St. No 20',
    customerType   : 'Corporate',
    createdAt      : '20241103',
  },
  {
    customerID     : 'CU004',
    customerName   : 'Emily Davis',
    customerGender : 'Female',
    customerDOB    : '19940318',
    customerEmail  : 'emilydavis@mail.com',
    customerPhone  : '08123412345',
    customerAddress: 'Cedar Ave. No 7',
    customerType   : 'Personal',
    createdAt      : '20241104',
  },
  {
    customerID     : 'CU005',
    customerName   : 'David Wilson',
    customerGender : 'Male',
    customerDOB    : '19871005',
    customerEmail  : 'davidwilson@mail.com',
    customerPhone  : '08134598765',
    customerAddress: 'Oak Lane No 22',
    customerType   : 'Corporate',
    createdAt      : '20241105',
  },
  {
    customerID     : 'CU006',
    customerName   : 'Sophia Martinez',
    customerGender : 'Female',
    customerDOB    : '19990725',
    customerEmail  : 'sophiamartinez@mail.com',
    customerPhone  : '08129812345',
    customerAddress: 'Pine St. No 10',
    customerType   : 'Personal',
    createdAt      : '20241106',
  },
  {
    customerID     : 'CU007',
    customerName   : 'James Anderson',
    customerGender : 'Male',
    customerDOB    : '19830511',
    customerEmail  : 'jamesanderson@mail.com',
    customerPhone  : '08122334455',
    customerAddress: 'Birch Rd. No 11',
    customerType   : 'HomeCatering',
    createdAt      : '20241107',
  },
  {
    customerID     : 'CU008',
    customerName   : 'Olivia Garcia',
    customerGender : 'Female',
    customerDOB    : '20000808',
    customerEmail  : 'oliviagarcia@mail.com',
    customerPhone  : '08129988776',
    customerAddress: 'Aspen St. No 19',
    customerType   : 'Personal',
    createdAt      : '20241108',
  },
  {
    customerID     : 'CU009',
    customerName   : 'Robert Taylor',
    customerGender : 'Male',
    customerDOB    : '19900202',
    customerEmail  : 'roberttaylor@mail.com',
    customerPhone  : '08123443210',
    customerAddress: 'Fir Ln. No 5',
    customerType   : 'Corporate',
    createdAt      : '20241109',
  },
  {
    customerID     : 'CU010',
    customerName   : 'Isabella Harris',
    customerGender : 'Female',
    customerDOB    : '19950819',
    customerEmail  : 'isabellaharris@mail.com',
    customerPhone  : '08122332112',
    customerAddress: 'Willow Blvd. No 18',
    customerType   : 'Personal',
    createdAt      : '20241110',
  },
];

export const MenuData: Menu[] = [
  {
    menuID: "MU0001",
    menuName: "Fried Chicken",
    menuDesc: "Crispy and juicy fried chicken with your choice of sauce.",
    menuPrice: 13000,
    menuType: "FOOD",
    menuCategoryID: "MC001",
    createdAt: '20241110'
  },
  {
    menuID: "MU0002",
    menuName: "Margherita Pizza",
    menuDesc: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
    menuPrice: 18000,
    menuType: "FOOD",
    menuCategoryID: "MC002",
    createdAt: '20241111'
  },
  {
    menuID: "MU0003",
    menuName: "Ice Lemon Tea",
    menuDesc: "Refreshing iced tea with a hint of lemon.",
    menuPrice: 8000,
    menuType: "DRINK",
    menuCategoryID: "MC003",
    createdAt: '20241112'
  },
  {
    menuID: "MU0004",
    menuName: "Beef Burger",
    menuDesc: "Juicy beef patty with lettuce, tomato, and cheese in a soft bun.",
    menuPrice: 15000,
    menuType: "FOOD",
    menuCategoryID: "MC001",
    createdAt: '20241113'
  },
  {
    menuID: "MU0005",
    menuName: "Cappuccino",
    menuDesc: "Rich and creamy espresso-based coffee with steamed milk.",
    menuPrice: 12000,
    menuType: "DRINK",
    menuCategoryID: "MC003",
    createdAt: '20241114'
  }
];
