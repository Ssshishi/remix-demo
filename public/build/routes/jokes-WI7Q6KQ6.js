import {
  Link,
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-3FTNTOIL.js";

// empty-module:../utils/db.server
var require_db = __commonJS({
  "empty-module:../utils/db.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/jokes.tsx
var import_db = __toESM(require_db());

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-HMHWW3JD.css";

// app/routes/jokes.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: jokes_default }];
};
function Jokes() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "jokes-layout",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "jokes-header",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "home-link",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              to: "/",
              title: "Remix Jokes",
              "aria-label": "Remix Jokes",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "logo",
                  children: "\u{1F92A}"
                }, void 0, false, {
                  fileName: "app/routes/jokes.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "logo-medium",
                  children: "J\u{1F92A}KES"
                }, void 0, false, {
                  fileName: "app/routes/jokes.tsx",
                  lineNumber: 41,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/jokes.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "jokes-main",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "jokes-list",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                to: ".",
                children: "Get a random joke"
              }, void 0, false, {
                fileName: "app/routes/jokes.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: "Here are a few more jokes to check out:"
              }, void 0, false, {
                fileName: "app/routes/jokes.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                children: data.jokesListItems.map((joke) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    to: joke.id,
                    children: joke.name
                  }, void 0, false, {
                    fileName: "app/routes/jokes.tsx",
                    lineNumber: 54,
                    columnNumber: 19
                  }, this)
                }, joke.id, false, {
                  fileName: "app/routes/jokes.tsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this))
              }, void 0, false, {
                fileName: "app/routes/jokes.tsx",
                lineNumber: 51,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                to: "new",
                className: "button",
                children: "Add your own"
              }, void 0, false, {
                fileName: "app/routes/jokes.tsx",
                lineNumber: 59,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  Jokes as default,
  links
};
//# sourceMappingURL=/build/routes/jokes-WI7Q6KQ6.js.map
