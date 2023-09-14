"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 1889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fposts_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fposts_2Findex_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/posts/index.ts
var posts_namespaceObject = {};
__webpack_require__.r(posts_namespaceObject);
__webpack_require__.d(posts_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./libs/serverAuth.ts
var serverAuth = __webpack_require__(5134);
// EXTERNAL MODULE: ./libs/prismadb.ts
var prismadb = __webpack_require__(3732);
;// CONCATENATED MODULE: ./pages/api/posts/index.ts


async function handler(req, res) {
    if (req.method !== "POST" && req.method !== "GET") {
        return res.status(405).end();
    }
    try {
        if (req.method === "POST") {
            const { currentUser } = await (0,serverAuth/* default */.Z)(req, res);
            const { body } = req.body;
            const post = await prismadb/* default */.Z.post.create({
                data: {
                    body,
                    userId: currentUser.id
                }
            });
            return res.status(200).json(post);
        }
        if (req.method === "GET") {
            const { userId } = req.query;
            console.log({
                userId
            });
            let posts;
            if (userId && typeof userId === "string") {
                posts = await prismadb/* default */.Z.post.findMany({
                    where: {
                        userId
                    },
                    include: {
                        user: true,
                        comments: true
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                });
            } else {
                posts = await prismadb/* default */.Z.post.findMany({
                    include: {
                        user: true,
                        comments: true
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                });
            }
            return res.status(200).json(posts);
        }
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fposts&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fposts%2Findex.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fposts_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fposts_2Findex_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(posts_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(posts_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/posts",
        pathname: "/api/posts",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: posts_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 5134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3732);
/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9025);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);



const serverAuth = async (req, res)=>{
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);
    if (!session?.user?.email) {
        throw new Error("Not signed in");
    }
    const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.user.findUnique({
        where: {
            email: session.user.email
        }
    });
    console.log(currentUser);
    if (!currentUser) {
        throw new Error("Not signed in");
    }
    return {
        currentUser
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,25], () => (__webpack_exec__(1889)));
module.exports = __webpack_exports__;

})();