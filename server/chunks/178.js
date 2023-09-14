exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 9873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Avatar = ({ userId, isLarge, hasBorder })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { data: fetchedUser } = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(userId);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event)=>{
        event.stopPropagation();
        const url = `/users/${userId}`;
        router.push(url);
    }, [
        router,
        userId
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            fill: true,
            style: {
                objectFit: "cover",
                borderRadius: "100%"
            },
            alt: "Avatar",
            onClick: onClick,
            src: fetchedUser?.profileImage || "/images/placeholder.png"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Button = ({ label, secondary, fullWidth, onClick, large, disabled, outline })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        disabled: disabled,
        onClick: onClick,
        className: `
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-sky-500"}
        ${secondary ? "text-black" : "text-white"}
        ${secondary ? "border-black" : "border-sky-500"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white" : ""}
        ${outline ? "text-white" : ""}
      `,
        children: label
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 8909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);




const ImageUpload = ({ onChange, label, value, disabled })=>{
    const [base64, setBase64] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(value);
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((base64)=>{
        onChange(base64);
    }, [
        onChange
    ]);
    const handleDrop = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((files)=>{
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (event)=>{
            setBase64(event.target.result);
            handleChange(event.target.result);
        };
        reader.readAsDataURL(file);
    }, [
        handleChange
    ]);
    const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_3__.useDropzone)({
        maxFiles: 1,
        onDrop: handleDrop,
        disabled,
        accept: {
            "image/jpeg": [],
            "image/png": []
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ...getRootProps({
            className: "w-full p-4 text-white text-center border-2 border-dotted rounded-md border-neutral-700"
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...getInputProps()
            }),
            base64 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: base64,
                    height: "100",
                    width: "100",
                    alt: "Uploaded image"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-white",
                children: label
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUpload);


/***/ }),

/***/ 405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Input = ({ placeholder, value, type = "text", onChange, disabled, label })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl text-white font-semibold mb-2",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                disabled: disabled,
                onChange: onChange,
                value: value,
                placeholder: placeholder,
                type: type,
                className: " w-full p-4  text-lg  bg-black  border-2 border-neutral-800  rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed "
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 2391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_FollowBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1797);
/* harmony import */ var _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_FollowBar__WEBPACK_IMPORTED_MODULE_2__, _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_3__]);
([_components_layout_FollowBar__WEBPACK_IMPORTED_MODULE_2__, _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Layout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-screen bg-black",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container h-full mx-auto xl:px-30 max-w-6xl",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-4 h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " col-span-3  lg:col-span-2  border-x-[1px]  border-neutral-800 ",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_FollowBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8726);




const Modal = ({ isOpen, onClose, onSubmit, title, body, actionLabel, footer, disabled })=>{
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (disabled) {
            return;
        }
        onClose();
    }, [
        onClose,
        disabled
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (disabled) {
            return;
        }
        onSubmit();
    }, [
        onSubmit,
        disabled
    ]);
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: " justify-center  items-center  flex  overflow-x-hidden  overflow-y-auto  fixed  inset-0  z-50  outline-none  focus:outline-none bg-neutral-800 bg-opacity-70 ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " h-full lg:h-auto border-0  rounded-lg  shadow-lg  relative  flex  flex-col  w-full  bg-black  outline-none  focus:outline-none ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " flex  items-center  justify-between  p-10  rounded-t ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-3xl font-semibold text-white",
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: " p-1  ml-auto border-0  text-white  hover:opacity-70 transition ",
                                    onClick: handleClose,
                                    "aria-label": "Close Modal",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineClose, {
                                        size: 20
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative p-10 flex-auto",
                            children: body
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-2 p-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    disabled: disabled,
                                    label: actionLabel,
                                    secondary: true,
                                    fullWidth: true,
                                    large: true,
                                    onClick: handleSubmit
                                }),
                                footer
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ 1797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _hooks_useUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9313);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useUsers__WEBPACK_IMPORTED_MODULE_1__, _Avatar__WEBPACK_IMPORTED_MODULE_2__]);
([_hooks_useUsers__WEBPACK_IMPORTED_MODULE_1__, _Avatar__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const FollowBar = ()=>{
    const { data: users = [] } = (0,_hooks_useUsers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    if (users.length === 0) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "px-6 py-4 hidden lg:block",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-neutral-800 rounded-xl p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-white text-xl font-semibold",
                    children: "Who to follow"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col gap-6 mt-4",
                    children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    userId: user.id
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-white font-semibold text-sm",
                                            children: user.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-neutral-400 text-sm",
                                            children: [
                                                "@",
                                                user.username
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, user.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1954);
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6726);
/* harmony import */ var _SidebarLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6520);
/* harmony import */ var _SidebarTweetButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__, _SidebarItem__WEBPACK_IMPORTED_MODULE_6__, _SidebarTweetButton__WEBPACK_IMPORTED_MODULE_8__]);
([_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__, _SidebarItem__WEBPACK_IMPORTED_MODULE_6__, _SidebarTweetButton__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Sidebar = ()=>{
    const { data: currentUser } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const items = [
        {
            icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsHouseFill,
            label: "Home",
            href: "/"
        },
        {
            icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsBellFill,
            label: "Notifications",
            href: "/notifications",
            auth: true,
            alert: currentUser?.hasNotification
        },
        {
            icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUser,
            label: "Profile",
            href: `/users/${currentUser?.id}`,
            auth: true
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-span-1 h-full pr-4 md:pr-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col items-end",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-2 lg:w-[230px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidebarLogo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidebarItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            alert: item.alert,
                            auth: item.auth,
                            href: item.href,
                            icon: item.icon,
                            label: item.label
                        }, item.href)),
                    currentUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidebarItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),
                        icon: react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiLogOut,
                        label: "Logout"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SidebarTweetButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1954);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SidebarItem = ({ label, icon: Icon, href, auth, onClick, alert })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: currentUser } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (onClick) {
            return onClick();
        }
        if (auth && !currentUser) {
            loginModal.onOpen();
        } else if (href) {
            router.push(href);
        }
    }, [
        router,
        href,
        auth,
        loginModal,
        onClick,
        currentUser
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: handleClick,
        className: "flex flex-row items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " relative rounded-full  h-14 w-14 flex items-center justify-center  p-4 hover:bg-slate-300  hover:bg-opacity-10  cursor-pointer  lg:hidden ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        size: 28,
                        color: "white"
                    }),
                    alert ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsDot, {
                        className: "text-sky-500 absolute -top-4 left-0",
                        size: 70
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " relative hidden  lg:flex  items-row  gap-4  p-4  rounded-full  hover:bg-slate-300  hover:bg-opacity-10  cursor-pointer items-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        size: 24,
                        color: "white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "hidden lg:block text-white text-xl",
                        children: label
                    }),
                    alert ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsDot, {
                        className: "text-sky-500 absolute -top-4 left-0",
                        size: 70
                    }) : null
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);



const SidebarLogo = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: ()=>router.push("/"),
        className: " rounded-full  h-14 w-14 p-4  flex  items-center  justify-center  hover:bg-blue-300  hover:bg-opacity-10  cursor-pointer ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsTwitter, {
            size: 28,
            color: "white"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarLogo);


/***/ }),

/***/ 8563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__]);
([_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SidebarTweetButton = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { data: currentUser } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!currentUser) {
            return loginModal.onOpen();
        }
        router.push("/");
    }, [
        loginModal,
        router,
        currentUser
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " mt-6 lg:hidden  rounded-full  h-14 w-14 p-4 flex items-center justify-center  bg-sky-500  hover:bg-opacity-80  transition  cursor-pointer ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFeather, {
                    size: 24,
                    color: "white"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " mt-6 hidden  lg:block  px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90  cursor-pointer ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: " hidden  lg:block  text-center font-semibold text-white  text-[20px] ",
                    children: "Tweet"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarTweetButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1954);
/* harmony import */ var _hooks_useEditModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4227);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1699);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(405);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7169);
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__, _hooks_useEditModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__, _hooks_useEditModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const EditModal = ()=>{
    const { data: currentUser } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { mutate: mutateFetchedUser } = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(currentUser?.id);
    const editModal = (0,_hooks_useEditModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const [profileImage, setProfileImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [coverImage, setCoverImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setProfileImage(currentUser?.profileImage);
        setCoverImage(currentUser?.coverImage);
        setName(currentUser?.name);
        setUsername(currentUser?.username);
        setBio(currentUser?.bio);
    }, [
        currentUser?.name,
        currentUser?.username,
        currentUser?.bio,
        currentUser?.profileImage,
        currentUser?.coverImage
    ]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            setIsLoading(true);
            await axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch("/api/edit", {
                name,
                username,
                bio,
                profileImage,
                coverImage
            });
            mutateFetchedUser();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Updated");
            editModal.onClose();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }, [
        editModal,
        name,
        username,
        bio,
        mutateFetchedUser,
        profileImage,
        coverImage
    ]);
    const bodyContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageUpload__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                value: profileImage,
                disabled: isLoading,
                onChange: (image)=>setProfileImage(image),
                label: "Upload profile image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageUpload__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                value: coverImage,
                disabled: isLoading,
                onChange: (image)=>setCoverImage(image),
                label: "Upload cover image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                placeholder: "Name",
                onChange: (e)=>setName(e.target.value),
                value: name,
                disabled: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                placeholder: "Username",
                onChange: (e)=>setUsername(e.target.value),
                value: username,
                disabled: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                placeholder: "Bio",
                onChange: (e)=>setBio(e.target.value),
                value: bio,
                disabled: isLoading
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        disabled: isLoading,
        isOpen: editModal.isOpen,
        title: "Edit your profile",
        actionLabel: "Save",
        onClose: editModal.onClose,
        onSubmit: onSubmit,
        body: bodyContent
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1042);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(405);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const LoginModal = ()=>{
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const registerModal = (0,_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        try {
            setIsLoading(true);
            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)("credentials", {
                email,
                password
            });
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Logged in");
            loginModal.onClose();
            window.location.href = "../users/UserBio.tsx";
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }, [
        email,
        password,
        loginModal
    ]);
    const onToggle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        loginModal.onClose();
        registerModal.onOpen();
    }, [
        loginModal,
        registerModal
    ]);
    const bodyContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                placeholder: "Email",
                onChange: (e)=>setEmail(e.target.value),
                value: email,
                disabled: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                placeholder: "Password",
                type: "password",
                onChange: (e)=>setPassword(e.target.value),
                value: password,
                disabled: isLoading
            })
        ]
    });
    const footerContent = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-neutral-400 text-center mt-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [
                "First time using Twitter?",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: onToggle,
                    className: " text-white  cursor-pointer  hover:underline ",
                    children: " Create an account"
                })
            ]
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        disabled: isLoading,
        isOpen: loginModal.isOpen,
        title: "Login",
        actionLabel: "Sign in",
        onClose: loginModal.onClose,
        onSubmit: onSubmit,
        body: bodyContent,
        footer: footerContent
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1042);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(405);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const RegisterModal = ()=>{
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const registerModal = (0,_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const onToggle = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (isLoading) {
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();
    }, [
        loginModal,
        registerModal,
        isLoading
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        try {
            setIsLoading(true);
            await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/register", {
                email,
                password,
                username,
                name
            });
            setIsLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Account created.");
            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)("credentials", {
                email,
                password
            });
            registerModal.onClose();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }, [
        email,
        password,
        registerModal,
        username,
        name
    ]);
    const bodyContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                placeholder: "Email",
                value: email,
                onChange: (e)=>setEmail(e.target.value),
                disabled: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                placeholder: "Name",
                value: name,
                onChange: (e)=>setName(e.target.value),
                disabled: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                placeholder: "Username",
                value: username,
                onChange: (e)=>setUsername(e.target.value),
                disabled: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                placeholder: "Password",
                type: "password",
                value: password,
                onChange: (e)=>setPassword(e.target.value),
                disabled: isLoading
            })
        ]
    });
    const footerContent = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-neutral-400 text-center mt-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [
                "Already have an account?",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: onToggle,
                    className: " text-white  cursor-pointer  hover:underline ",
                    children: " Sign in"
                })
            ]
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        isOpen: registerModal.isOpen,
        title: "Create an account",
        actionLabel: "Register",
        onClose: registerModal.onClose,
        onSubmit: onSubmit,
        body: bodyContent,
        footer: footerContent,
        disabled: isLoading
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useCurrentUser = ()=>{
    const { data, error, isLoading, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/api/current", _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrentUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useEditModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEditModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useLoginModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLoginModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1042:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useRegisterModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRegisterModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useUser = (userId)=>{
    const { data, error, isLoading, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(userId ? `/api/users/${userId}` : null, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useUsers = ()=>{
    const { data, error, isLoading, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/api/users", _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then((res)=>res.data);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2391);
/* harmony import */ var _components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3122);
/* harmony import */ var _components_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5087);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modals_EditModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__, _components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_4__, _components_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_5__, _components_modals_EditModal__WEBPACK_IMPORTED_MODULE_7__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__, _components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_4__, _components_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_5__, _components_modals_EditModal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {
        session: pageProps.session,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.Toaster, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_RegisterModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_EditModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;