import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("shop", "./routes/shop.tsx"),
    route("imprint", "./routes/imprint.tsx"),
    route("sleepfunction", "./routes/sleepfunction.tsx"),
    route("daynightrythmus", "./routes/daynightrythmus.tsx"),
] satisfies RouteConfig;
