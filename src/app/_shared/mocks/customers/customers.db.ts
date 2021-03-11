import { ICustomer, CustomerLabel as L } from "./customer.interface";

export const customers: ICustomer[] = [
  {
    id: "injoker",
    name: "injoker",
    firstName: "Kael",
    lastName: "Injoker",
    photo: "assets/images/portrait.png",
    address: {
      city: "Tanggerang Selatan",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "injoker@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.NEW, L.LEAD],
    notes: "placeholder",
    createdAt: "2020-02-11T10:40:33.409Z"
  },
  {
    id: "lanaya",
    name: "lanaya",
    firstName: "Templar",
    lastName: "Assassins",
    photo: "assets/images/portrait.png",
    address: {
      city: "Radiant Utara",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "lanaya@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.LEAD, L.IN_PROGRESS, L.COMPLETED],
    notes: "placeholder",
    createdAt: "2019-03-11T10:40:33.409Z"
  },
  {
    id: "rylai",
    name: "rylai",
    firstName: "Crystal",
    lastName: "Maiden",
    photo: "assets/images/portrait.png",
    address: {
      city: "Radiant Tenggara",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "rylai@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.COMPLETED, L.LEAD],
    notes: "placeholder",
    createdAt: "2015-03-11T10:40:33.409Z"
  },
  {
    id: "lina",
    name: "lina",
    firstName: "Lina",
    lastName: "Slayer",
    photo: "assets/images/portrait.png",
    address: {
      city: "Dire Timur",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "lina@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.NEW, L.IN_PROGRESS],
    notes: "placeholder",
    createdAt: "2020-03-11T10:40:33.409Z"
  },
  {
    id: "void",
    name: "void",
    firstName: "Faceless",
    lastName: "Void",
    photo: "assets/images/portrait.png",
    address: {
      city: "Radiant Barat",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "void@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.NEW, L.IN_PROGRESS],
    notes: "placeholder",
    createdAt: "2016-03-11T10:40:33.409Z"
  },
  {
    id: "bristleback",
    name: "bristleback",
    firstName: "Bristle",
    lastName: "Back",
    photo: "assets/images/portrait.png",
    address: {
      city: "Roshan Selatan",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "bristleback@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.COMPLETED, L.LEAD],
    notes: "placeholder",
    createdAt: "2017-03-11T10:40:33.409Z"
  },
  {
    id: "Luna",
    name: "Luna",
    firstName: "Luna",
    lastName: "Moonrider",
    photo: "assets/images/portrait.png",
    address: {
      city: "Dire Tenggara",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "Luna@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.NEW, L.LEAD, L.IN_PROGRESS],
    notes: "placeholder",
    createdAt: "2021-01-11T10:40:33.409Z"
  },
  {
    id: "mirana",
    name: "mirana",
    firstName: "Mirana",
    lastName: "IDK",
    photo: "assets/images/portrait.png",
    address: {
      city: "Radiant Tenggara",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "mirana@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.NEW, L.IN_PROGRESS],
    notes: "placeholder",
    createdAt: "2021-04-11T10:40:33.409Z"
  },
  {
    id: "traxex",
    name: "traxex",
    firstName: "Traxex",
    lastName: "Drow Ranger",
    photo: "assets/images/portrait.png",
    address: {
      city: "Dire",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "traxex@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.COMPLETED, L.LEAD, L.NEW],
    notes: "placeholder",
    createdAt: "2019-09-11T10:40:33.409Z"
  },
  {
    id: "aleria",
    name: "aleria",
    firstName: "Aleria",
    lastName: "Windranger",
    photo: "assets/images/portrait.png",
    address: {
      city: "Radiant",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "aleria@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.COMPLETED],
    notes: "placeholder",
    createdAt: "2020-01-11T10:40:33.409Z"
  },
  {
    id: "io",
    name: "io",
    firstName: "Wisp",
    lastName: "Io",
    photo: "assets/images/portrait.png",
    address: {
      city: "Radiant Selatan",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "io@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.LEAD],
    notes: "placeholder",
    createdAt: "2018-03-11T10:40:33.409Z"
  },
  {
    id: "schendelzhare",
    name: "schendelzhare",
    firstName: "Vengeful",
    lastName: "Spirit",
    photo: "assets/images/portrait.png",
    address: {
      city: "Dire Utara",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "schendelzhare@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.NEW, L.IN_PROGRESS],
    notes: "placeholder",
    createdAt: "2014-03-11T10:40:33.409Z"
  },
  {
    id: "bloodseeker",
    name: "bloodseeker",
    firstName: "Strygwyr",
    lastName: "Bloodseeker",
    photo: "assets/images/portrait.png",
    address: {
      city: "Radiant Selatan",
      street: "548 Cypres Avenue",
      zipCode: 5498
    },
    contact: {
      email: "bloodseeker@test.com",
      phone: "+11 (977) 574-3636"
    },
    labels: [L.COMPLETED],
    notes: "placeholder",
    createdAt: "2020-07-11T10:40:33.409Z"
  },
];