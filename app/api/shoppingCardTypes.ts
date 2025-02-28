import lampeImage from "~/assets/images/lampe.png";
import armbandImage from "~/assets/images/armband.png";
import appImage from "~/assets/images/app.png";
import bundleImage from "~/assets/images/sleepSyncPoster.jpg";

export interface item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const lampe: item = {
  id: "sleepsync-lampe-001",
  name: "SleepSync Lampe",
  price: 99.99,
  quantity: 1,
  image: lampeImage,
};

const armband: item = {
  id: "sleepsync-armband-002",
  name: "SleepSync Armband",
  price: 79.99,
  quantity: 1,
  image: armbandImage,
};

const app: item = {
  id: "sleepsync-app-003",
  name: "SleepSync App",
  price: 29.99,
  quantity: 1,
  image: appImage,
};

const bundle: item = {
  id: "sleepsync-bundle-004",
  name: "SleepSync Bundle",
  price: 199.99,
  quantity: 1,
  image: bundleImage,
};

export const shopItems = {
  lampe,
  armband,
  app,
  bundle,
};
