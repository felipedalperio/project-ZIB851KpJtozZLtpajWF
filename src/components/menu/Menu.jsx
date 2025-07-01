import React from 'react';

const Menu = () => {
  return (
    function() {
      return /* @__PURE__ */ jsxDEV("header", { className: `w-full z-50 shadow-sm backdrop-blur-sm bg-[${this.colors[0].color}]`, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-4 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "#", className: "flex items-center", children: /* @__PURE__ */ jsxDEV("h1", { className: `text-2xl md:text-3xl font-playfair font-bold text-[${this.colors[4].color}]`, children: /* @__PURE__ */ jsxDEV(SafeText, { text: this.texts[0].txt }, void 0, false, {
            fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
            lineNumber: 585,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
            lineNumber: 584,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
            lineNumber: 583,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("nav", { className: "hidden md:flex space-x-8 items-center", children: [
            this.menuItems.map(
              (item, index) => /* @__PURE__ */ jsxDEV("a", { href: item.link, className: `font-medium transition-colors text-[${this.colors[1].color}]`, children: item.name }, void 0, false, {
                fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                lineNumber: 591,
                columnNumber: 13
              }, this)
            ),
            /* @__PURE__ */ jsxDEV("button", { className: `px-4 py-2 rounded bg-[${this.colors[4].color}] text-[${this.colors[3].color}]`, children: /* @__PURE__ */ jsxDEV(SafeText, { text: this.texts[1].txt }, void 0, false, {
              fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
              lineNumber: 594,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
              lineNumber: 593,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
            lineNumber: 589,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { id: "menu-toggle", className: "md:hidden", children: [
            /* @__PURE__ */ jsxDEV(
              "svg",
              {
                id: "menu-icon",
                xmlns: "http://www.w3.org/2000/svg",
                className: `h-6 w-6 text-[${this.colors[2].color}]`,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16M4 18h16"
                  },
                  void 0,
                  false,
                  {
                    fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                    lineNumber: 601,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                lineNumber: 599,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "svg",
              {
                id: "close-icon",
                xmlns: "http://www.w3.org/2000/svg",
                className: `h-6 w-6 hidden text-[${this.colors[2].color}]`,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12"
                  },
                  void 0,
                  false,
                  {
                    fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                    lineNumber: 606,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                lineNumber: 604,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
            lineNumber: 598,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
          lineNumber: 582,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("nav", { id: "mobile-menu", className: "md:hidden hidden flex-col bg-white border-t", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-4 flex flex-col space-y-4", children: [
          this.menuItems.map(
            (item, index) => /* @__PURE__ */ jsxDEV("a", { href: item.link, className: `font-medium py-2 text-[${this.colors[1].color}]`, children: item.name }, void 0, false, {
              fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
              lineNumber: 615,
              columnNumber: 13
            }, this)
          ),
          /* @__PURE__ */ jsxDEV("button", { className: `w-full py-2 rounded  bg-[${this.colors[4].color}] text-[${this.colors[3].color}]`, children: /* @__PURE__ */ jsxDEV(SafeText, { text: this.texts[1].txt }, void 0, false, {
            fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
            lineNumber: 618,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
            lineNumber: 617,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
          lineNumber: 613,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
          lineNumber: 612,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
        lineNumber: 581,
        columnNumber: 7
      }, this);
    }
  );
};

export default Menu;