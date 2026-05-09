var y = function() {
  var t = this, n = t.$createElement, e = t._self._c || n;
  return e("button", {
    class: ["styled-btn", `styled-btn--${t.type}`],
    on: {
      click: function(s) {
        return t.$emit("click", s);
      }
    }
  }, [t._v(" " + t._s(t.text) + " ")]);
}, $ = [];
function m(t, n, e, s, a, u, l, _) {
  var r = typeof t == "function" ? t.options : t;
  n && (r.render = n, r.staticRenderFns = e, r._compiled = !0), s && (r.functional = !0), u && (r._scopeId = "data-v-" + u);
  var o;
  if (l ? (o = function(i) {
    i = i || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !i && typeof __VUE_SSR_CONTEXT__ < "u" && (i = __VUE_SSR_CONTEXT__), a && a.call(this, i), i && i._registeredComponents && i._registeredComponents.add(l);
  }, r._ssrRegister = o) : a && (o = _ ? function() {
    a.call(
      this,
      (r.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), o)
    if (r.functional) {
      r._injectStyles = o;
      var v = r.render;
      r.render = function(h, p) {
        return o.call(p), v(h, p);
      };
    } else {
      var c = r.beforeCreate;
      r.beforeCreate = c ? [].concat(c, o) : [o];
    }
  return {
    exports: t,
    options: r
  };
}
const C = {
  name: "StyledButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (t) => ["primary", "default"].includes(t)
    },
    text: {
      type: String,
      default: "Button"
    }
  }
}, d = {};
var S = /* @__PURE__ */ m(
  C,
  y,
  $,
  !1,
  g,
  null,
  null,
  null
);
function g(t) {
  for (let n in d)
    this[n] = d[n];
}
const b = /* @__PURE__ */ function() {
  return S.exports;
}();
var Y = function() {
  var t = this, n = t.$createElement, e = t._self._c || n;
  return e("div", {
    staticClass: "simple-counter"
  }, [e("button", {
    staticClass: "simple-counter__btn simple-counter__btn--minus",
    on: {
      click: t.decrement
    }
  }, [t._v("-")]), e("span", {
    staticClass: "simple-counter__value"
  }, [t._v(t._s(t.current))]), e("button", {
    staticClass: "simple-counter__btn simple-counter__btn--plus",
    on: {
      click: t.increment
    }
  }, [t._v("+")])]);
}, M = [];
const k = {
  name: "SimpleCounter",
  props: {
    initialValue: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      current: this.initialValue
    };
  },
  methods: {
    increment() {
      this.current += this.step, this.$emit("change", this.current);
    },
    decrement() {
      this.current -= this.step, this.$emit("change", this.current);
    }
  }
}, f = {};
var D = /* @__PURE__ */ m(
  k,
  Y,
  M,
  !1,
  R,
  null,
  null,
  null
);
function R(t) {
  for (let n in f)
    this[n] = f[n];
}
const N = /* @__PURE__ */ function() {
  return D.exports;
}();
function B(t, n = "YYYY-MM-DD") {
  const e = new Date(t);
  if (isNaN(e.getTime()))
    return "";
  const s = (l) => String(l).padStart(2, "0"), a = {
    YYYY: e.getFullYear(),
    MM: s(e.getMonth() + 1),
    DD: s(e.getDate()),
    HH: s(e.getHours()),
    mm: s(e.getMinutes()),
    ss: s(e.getSeconds())
  };
  let u = n;
  for (const [l, _] of Object.entries(a))
    u = u.replace(l, _);
  return u;
}
const T = {
  install(t) {
    t.component("StyledButton", b), t.component("SimpleCounter", N);
  }
};
export {
  N as SimpleCounter,
  b as StyledButton,
  T as default,
  B as formatDate
};
