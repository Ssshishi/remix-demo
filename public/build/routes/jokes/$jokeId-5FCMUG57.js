import {
  require_db
} from "/build/_shared/chunk-GERDHSEI.js";
import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-3FTNTOIL.js";

// app/routes/jokes/$jokeId.tsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Index = () => {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Here's your hilarious joke:"
      }, void 0, false, {
        fileName: "app/routes/jokes/$jokeId.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: data.joke.content
      }, void 0, false, {
        fileName: "app/routes/jokes/$jokeId.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: ".",
        children: [
          data.joke.name,
          " Permalink"
        ]
      }, void 0, true, {
        fileName: "app/routes/jokes/$jokeId.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/jokes/$jokeId.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};
var jokeId_default = Index;
export {
  jokeId_default as default
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-5FCMUG57.js.map
