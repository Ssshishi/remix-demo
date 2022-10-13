var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-5SBMAFB3.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-5GXXNUSD.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-DWD3SAIK.css";

// app/root.tsx
var import_jsx_runtime = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: global_medium_default, media: "print,(min-width: 640px)" },
  { rel: "stylesheet", href: global_large_default, media: "screen and (min-width: 1024px)" }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
            charSet: "utf-8"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Links, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
            children: "Remix funny!"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.LiveReload, {})
        ]
      })
    ]
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links2
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-LKQEGIN4.css";

// app/routes/index.tsx
var import_jsx_runtime = require("react/jsx-runtime"), links2 = () => [{ rel: "stylesheet", href: styles_default }], routes_default = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
  className: "container",
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "content",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
        children: [
          "Remix ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            children: "Jokes!"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
              to: "jokes",
              children: "Read Jokes"
            })
          })
        })
      })
    ]
  })
});

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => Jokes,
  links: () => links3,
  loader: () => loader
});
var import_react4 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
db = new import_client.PrismaClient();

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-HMHWW3JD.css";

// app/routes/jokes.tsx
var import_jsx_runtime = require("react/jsx-runtime"), links3 = () => [{ rel: "stylesheet", href: jokes_default }], loader = async () => {
  let data = {
    jokesListItems: await db.joke.findMany({
      take: 5,
      orderBy: { createAt: "desc" }
    })
  };
  return (0, import_node2.json)(data);
};
function Jokes() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "jokes-layout",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
        className: "jokes-header",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "container",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            className: "home-link",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react4.Link, {
              to: "/",
              title: "Remix Jokes",
              "aria-label": "Remix Jokes",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "logo",
                  children: "\u{1F92A}"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "logo-medium",
                  children: "J\u{1F92A}KES"
                })
              ]
            })
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        className: "jokes-main",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "container",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "jokes-list",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react4.Link, {
                  to: ".",
                  children: "Get a random joke"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children: "Here are a few more jokes to check out:"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  children: data.jokesListItems.map((joke) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react4.Link, {
                      to: joke.id,
                      children: joke.name
                    })
                  }, joke.id))
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react4.Link, {
                  to: "new",
                  className: "button",
                  children: "Add your own"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "jokes-outlet",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react4.Outlet, {})
            })
          ]
        })
      })
    ]
  });
}

// app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  default: () => jokeId_default,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_runtime = require("react/jsx-runtime"), loader2 = async ({
  params
}) => {
  let joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Error("Joke not found");
  return (0, import_node3.json)({ joke });
}, Index = () => {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Here's your hilarious joke:"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: data.joke.content
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react5.Link, {
        to: ".",
        children: [
          data.joke.name,
          " Permalink"
        ]
      })
    ]
  });
}, jokeId_default = Index;

// app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => jokes_default2,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_jsx_runtime = require("react/jsx-runtime"), loader3 = async () => {
  let count = await db.joke.count(), randomRowNumber = Math.floor(Math.random() * count), [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber
  });
  return (0, import_node4.json)({ randomJoke });
}, Index2 = () => {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Here's a random joke:"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: data.randomJoke.content
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react6.Link, {
        to: data.randomJoke.id,
        children: [
          '"',
          data.randomJoke.name,
          '" Permalink'
        ]
      })
    ]
  });
}, jokes_default2 = Index2;

// app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => new_default
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_jsx_runtime = require("react/jsx-runtime");
function validateJokeContent(content) {
  if (content.length < 10)
    return "That joke is too short";
}
function validateJokeName(name) {
  if (name.length < 3)
    return "That joke's name is too short";
}
var badRequest = (data) => (0, import_node5.json)(data, { status: 400 }), action = async ({
  request
}) => {
  let form = await request.formData(), name = form.get("name"), content = form.get("content");
  if (typeof name != "string" || typeof content != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fieldErrors = {
    name: validateJokeName(name),
    content: validateJokeContent(content)
  }, fields = { name, content };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let joke = await db.joke.create({ data: fields });
  return (0, import_node5.redirect)(`/jokes/${joke.id}`);
}, Index3 = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react7.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Add your own hilarious joke"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                children: [
                  "Name:",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                    type: "text",
                    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
                    name: "name",
                    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name) || void 0,
                    "aria-errormessage": (_c = actionData == null ? void 0 : actionData.fieldErrors) != null && _c.name ? "name-error" : void 0
                  })
                ]
              }),
              (_d = actionData == null ? void 0 : actionData.fieldErrors) != null && _d.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "form-validation-error",
                role: "alert",
                id: "name-error",
                children: actionData.fieldErrors.name
              }) : null
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                children: [
                  "Content:",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
                    name: "content",
                    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) || void 0,
                    "aria-errormessage": (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.content ? "content-error" : void 0
                  })
                ]
              }),
              (_h = actionData == null ? void 0 : actionData.fieldErrors) != null && _h.content ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "form-validation-error",
                role: "alert",
                id: "content-error",
                children: actionData.fieldErrors.content
              }) : null
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "form-validation-error",
                role: "alert",
                children: actionData.formError
              }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                type: "submit",
                className: "button",
                children: "Add"
              })
            ]
          })
        ]
      })
    ]
  });
}, new_default = Index3;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9506c440", entry: { module: "/build/entry.client-NCTDFFJ2.js", imports: ["/build/_shared/chunk-I5WX6UCY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JUBU6AQN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WYKWE5GM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-PBTYUA3O.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$jokeId": { id: "routes/jokes/$jokeId", parentId: "routes/jokes", path: ":jokeId", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$jokeId-GSPJ2QO4.js", imports: ["/build/_shared/chunk-HRJ6YCJX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-QK4TQEAG.js", imports: ["/build/_shared/chunk-HRJ6YCJX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-UIDSH2RE.js", imports: ["/build/_shared/chunk-HRJ6YCJX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9506C440.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
