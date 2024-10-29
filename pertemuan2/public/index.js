(() => {
  "use strict";
  const e = (e) =>
      React.createElement(
        "ul",
        null,
        [
          { title: "Product List", url: "/" },
          { title: "Todolist", url: "/todos" },
          { title: "Counter", url: "/counter" },
        ].map((t) =>
          React.createElement(
            "li",
            { onClick: () => e.onPathChange(t.url) },
            t.title
          )
        )
      ),
    t = () => {
      const {
        inputValue: e,
        setInputValue: t,
        isLoading: a,
        products: l,
      } = (() => {
        const [e, t] = React.useState(""),
          [a, l] = React.useState([]),
          [c, n] = React.useState(!1);
        return (
          React.useEffect(() => {
            n(!0);
            const t = setTimeout(() => {
              fetch(`https://dummyjson.com/products/search?q=${e}`)
                .then((e) => e.json())
                .then((e) => {
                  n(!1), l(e.products);
                });
            }, 500);
            return () => {
              clearTimeout(t);
            };
          }, [e]),
          { inputValue: e, setInputValue: t, products: a, isLoading: c }
        );
      })();
      return React.createElement(
        "div",
        null,
        React.createElement("input", {
          type: "text",
          value: e,
          onChange: (e) => {
            t(e.target.value);
          },
          placeholder: "search product",
        }),
        a
          ? React.createElement("p", null, "loading...")
          : React.createElement(
              "ol",
              null,
              l.map((e, t) => React.createElement("li", { key: t }, e.title))
            )
      );
    },
    a = (e) =>
      React.createElement(
        "button",
        {
          onClick: e.onClick,
          style: { backgroundColor: "blue", color: "white" },
        },
        e.title
      ),
    l = () => {
      const [e, t] = React.useState(""),
        [l, c] = React.useState(["mandi", "ngoding", "makan"]);
      return React.createElement(
        "div",
        null,
        React.createElement("input", {
          value: e,
          onChange: (e) => {
            t(e.target.value);
          },
          type: "text",
          placeholder: "input todo",
        }),
        React.createElement(a, {
          title: "reset",
          onClick: () => {
            t("");
          },
        }),
        React.createElement(a, {
          title: "submit",
          onClick: () => {
            c([...l, e]);
          },
        }),
        React.createElement(
          "ol",
          null,
          l.map((e, t) => React.createElement("li", { key: t }, e))
        )
      );
    },
    c = (e) => {
      const [t, l] = React.useState(e.counter);
      return React.createElement(
        "div",
        null,
        React.createElement(a, {
          title: "-",
          onClick: () => {
            l(t - 1);
          },
        }),
        React.createElement(a, {
          title: "+",
          onClick: () => {
            l(t + 1);
          },
        }),
        React.createElement(a, {
          title: "reset",
          onClick: () => {
            l(0);
          },
        }),
        React.createElement("p", { id: "counterDisplay" }, t)
      );
    },
    n = () => React.createElement("p", null, "404 Not Found"),
    r = () => {
      const [a, r] = React.useState(window.location.pathname);
      return (
        React.useEffect(() => {
          window.history.pushState(null, "", a);
        }, [a]),
        React.createElement(
          "div",
          null,
          React.createElement(e, {
            onPathChange: (e) => {
              r(e);
            },
          }),
          "/" === a
            ? React.createElement(t, null)
            : "/todos" === a
            ? React.createElement(l, null)
            : "/counter" === a
            ? React.createElement(
                "div",
                null,
                React.createElement(c, { counter: 1 })
              )
            : React.createElement(n, null)
        )
      );
    },
    u = document.getElementById("root");
  ReactDOM.render(React.createElement(r, null), u);
})();
