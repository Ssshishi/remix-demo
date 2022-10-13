import {
  require_db
} from "/build/_shared/chunk-GERDHSEI.js";
import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-3FTNTOIL.js";

// app/routes/jokes/index.tsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Index = () => {
  const data = useLoaderData();
  console.log("data.randomJoke", data.randomJoke);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Here's a random joke:"
      }, void 0, false, {
        fileName: "app/routes/jokes/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: data.randomJoke.content
      }, void 0, false, {
        fileName: "app/routes/jokes/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: data.randomJoke.id,
        children: [
          '"',
          data.randomJoke.name,
          '" Permalink'
        ]
      }, void 0, true, {
        fileName: "app/routes/jokes/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
var jokes_default = Index;
export {
  jokes_default as default
};
//# sourceMappingURL=/build/routes/jokes/index-VG46FT3H.js.map
