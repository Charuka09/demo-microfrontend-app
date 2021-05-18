import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@charuka95/spa-demo-home",
  app: () => System.import("@charuka95/spa-demo-home"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@charuka95/header",
  app: () => System.import("@charuka95/header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@charuka95/test-page",
  app: () => System.import("@charuka95/test-page"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
