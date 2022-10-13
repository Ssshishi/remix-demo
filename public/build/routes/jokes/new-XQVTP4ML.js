import {
  require_db
} from "/build/_shared/chunk-GERDHSEI.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-3FTNTOIL.js";

// app/routes/jokes/new.tsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Index = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Add your own hilarious joke"
      }, void 0, false, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                children: [
                  "Name:",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
                    name: "name",
                    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name) || void 0,
                    "aria-errormessage": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.name) ? "name-error" : void 0
                  }, void 0, false, {
                    fileName: "app/routes/jokes/new.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 72,
                columnNumber: 11
              }, this),
              ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "form-validation-error",
                role: "alert",
                id: "name-error",
                children: actionData.fieldErrors.name
              }, void 0, false, {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this) : null
            ]
          }, void 0, true, {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                children: [
                  "Content:",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
                    name: "content",
                    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) || void 0,
                    "aria-errormessage": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0
                  }, void 0, false, {
                    fileName: "app/routes/jokes/new.tsx",
                    lineNumber: 103,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 101,
                columnNumber: 11
              }, this),
              ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "form-validation-error",
                role: "alert",
                id: "content-error",
                children: actionData.fieldErrors.content
              }, void 0, false, {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 118,
                columnNumber: 13
              }, this) : null
            ]
          }, void 0, true, {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 100,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "form-validation-error",
                role: "alert",
                children: actionData.formError
              }, void 0, false, {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 129,
                columnNumber: 15
              }, this) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "button",
                children: "Add"
              }, void 0, false, {
                fileName: "app/routes/jokes/new.tsx",
                lineNumber: 137,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 127,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
};
var new_default = Index;
export {
  new_default as default
};
//# sourceMappingURL=/build/routes/jokes/new-XQVTP4ML.js.map
