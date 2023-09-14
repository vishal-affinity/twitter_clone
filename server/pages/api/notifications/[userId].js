"use strict";
(() => {
var exports = {};
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 9748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fnotifications_2F_5BuserId_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fnotifications_2F_5BuserId_5D_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/notifications/[userId].ts
var _userId_namespaceObject = {};
__webpack_require__.r(_userId_namespaceObject);
__webpack_require__.d(_userId_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./libs/prismadb.ts
var prismadb = __webpack_require__(3732);
;// CONCATENATED MODULE: ./pages/api/notifications/[userId].ts

async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }
    try {
        const { userId } = req.query;
        if (!userId || typeof userId !== "string") {
            throw new Error("Invalid ID");
        }
        const notifications = await prismadb/* default */.Z.notification.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        await prismadb/* default */.Z.user.update({
            where: {
                id: userId
            },
            data: {
                hasNotification: false
            }
        });
        return res.status(200).json(notifications);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fnotifications%2F%5BuserId%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fnotifications%2F%5BuserId%5D.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fnotifications_2F_5BuserId_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fnotifications_2F_5BuserId_5D_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_userId_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_userId_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/notifications/[userId]",
        pathname: "/api/notifications/[userId]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: _userId_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 3732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(9748)));
module.exports = __webpack_exports__;

})();