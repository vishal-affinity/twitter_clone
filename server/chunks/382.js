"use strict";
exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 2382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1042);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1954);
/* harmony import */ var _hooks_usePosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2402);
/* harmony import */ var _hooks_usePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4217);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9873);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8726);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__, _hooks_usePosts__WEBPACK_IMPORTED_MODULE_7__, _hooks_usePost__WEBPACK_IMPORTED_MODULE_8__, _Avatar__WEBPACK_IMPORTED_MODULE_9__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__, _hooks_usePosts__WEBPACK_IMPORTED_MODULE_7__, _hooks_usePost__WEBPACK_IMPORTED_MODULE_8__, _Avatar__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Form = ({ placeholder, isComment, postId })=>{
    const registerModal = (0,_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { data: currentUser } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { mutate: mutatePosts } = (0,_hooks_usePosts__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { mutate: mutatePost } = (0,_hooks_usePost__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(postId);
    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            setIsLoading(true);
            const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";
            await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(url, {
                body
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Tweet created");
            setBody("");
            mutatePosts();
            mutatePost();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }, [
        body,
        mutatePosts,
        isComment,
        postId,
        mutatePost
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "border-b-[1px] border-neutral-800 px-5 py-2",
        children: currentUser ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-row gap-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        userId: currentUser?.id
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            disabled: isLoading,
                            onChange: (event)=>setBody(event.target.value),
                            value: body,
                            className: " disabled:opacity-80 peer resize-none  mt-3  w-full  bg-black  ring-0  outline-none  text-[20px]  placeholder-neutral-500  text-white ",
                            placeholder: placeholder
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: " opacity-0  peer-focus:opacity-100  h-[1px]  w-full  border-neutral-800  transition"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-4 flex flex-row justify-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                disabled: isLoading || !body,
                                onClick: onSubmit,
                                label: "Tweet"
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "py-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-white text-2xl text-center mb-4 font-bold",
                    children: "Welcome to Twitter"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row items-center justify-center gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            label: "Login",
                            onClick: loginModal.onOpen
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            label: "Register",
                            onClick: registerModal.onOpen,
                            secondary: true
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;