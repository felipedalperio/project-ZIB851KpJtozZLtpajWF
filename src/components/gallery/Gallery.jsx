import React from 'react';

const Gallery = () => {
  return (
    function() {
      const borderRadiusClass = this.borderRadius ? `rounded-[${this.borderRadiusSize}]` : "rounded-none";
      return /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `
            w-full
            text-[${this.colors[1].color}]
            bg-[${[this.colors[0].color]}] ${paddingCreate(
            this.padding[0]
          )} ${marginCreate(this.margin[0])}
          flex flex-col justify-center items-center`,
          children: [
            /* @__PURE__ */ jsxDEV(
              "h2",
              {
                className: `${sizeCreate(
                  this.sizes[0]
                )} font-bold mb-4 text-center`,
                children: /* @__PURE__ */ jsxDEV(SafeText, { text: this.texts[0].txt }, void 0, false, {
                  fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                  lineNumber: 1348,
                  columnNumber: 13
                }, this)
              },
              void 0,
              false,
              {
                fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                lineNumber: 1343,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: `${sizeCreate(
                  this.sizes[1]
                )} mb-6 opacity-75 text-center`,
                children: /* @__PURE__ */ jsxDEV(SafeText, { text: this.texts[1].txt }, void 0, false, {
                  fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                  lineNumber: 1355,
                  columnNumber: 13
                }, this)
              },
              void 0,
              false,
              {
                fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                lineNumber: 1350,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: `
            grid gap-[${this.gap}]
            ${columnCreate(this.columns[0])}
          `,
                children: this.list.items.map(
                  (image, index) => /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: `relative flex group overflow-hidden ${borderRadiusClass} ${sizeCreate(
                        this.sizes[2]
                      )} ${sizeCreate(this.sizes[3])} ${sizeCreate(this.sizes[4])} ${sizeCreate(this.sizes[5] || "")}`,
                      children: [
                        /* @__PURE__ */ jsxDEV(
                          "img",
                          {
                            src: image.img[0],
                            alt: image.label[0],
                            loading: "lazy",
                            className: "w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
                          },
                          void 0,
                          false,
                          {
                            fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                            lineNumber: 1370,
                            columnNumber: 17
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center", children: image.label[0] }, void 0, false, {
                          fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                          lineNumber: 1377,
                          columnNumber: 17
                        }, this)
                      ]
                    },
                    index,
                    true,
                    {
                      fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                      lineNumber: 1364,
                      columnNumber: 11
                    },
                    this
                  )
                )
              },
              void 0,
              false,
              {
                fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
                lineNumber: 1357,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "E:/Users/User/Desktop/udemy/REACT - NEXT.JS/36 - GeradorSite/client/src/components.jsx",
          lineNumber: 1334,
          columnNumber: 7
        },
        this
      );
    }
  );
};

export default Gallery;