import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("shop", "./routes/shop.tsx"),
  route("checkout", "./routes/checkout.tsx"),
  route("success", "./routes/success.tsx"),
  route("features", "./routes/features.tsx"),
  route("imprint", "./routes/imprint.tsx"),
  route("sleepfunction", "./routes/sleepfunction.tsx"),
  route("daynightrythmus", "./routes/daynightrythmus.tsx"),
  route("support", "./routes/support.tsx"),
  route("newsletter", "./routes/newsletter.tsx"),
  route("company", "./routes/company.tsx"),
  route("shipping", "./routes/shipping.tsx"),
] satisfies RouteConfig;
