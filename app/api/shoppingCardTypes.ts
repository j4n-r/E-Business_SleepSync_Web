export interface item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const lampe: item = {
  id: "sleepsync-lampe-001",
  name: "SleepSync Lampe",
  price: 99.99,
  quantity: 1,
};

const armband: item = {
  id: "sleepsync-armband-002",
  name: "SleepSync Armband",
  price: 79.99,
  quantity: 1,
};

const app: item = {
  id: "sleepsync-app-003",
  name: "SleepSync App",
  price: 29.99,
  quantity: 1,
};

const bundle: item = {
  id: "sleepsync-bundle-004",
  name: "SleepSync Bundle",
  price: 199.99,
  quantity: 1,
};

export const shopItems = {
  lampe,
  armband,
  app,
  bundle,
};
