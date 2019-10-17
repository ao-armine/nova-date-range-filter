/* flatpickr v4.5.2, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.hy = {})));
}(this, (function (exports) { 'use strict';

    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
      l10ns: {}
    };
    var Armenian = {
      weekdays: {
        shorthand: ["ԿԻՐ", "ԵՐԿ", "ԵՐՔ", "ՉՈՐ", "ՀՆԳ", "ՈՒՐԲ", "ՇԲԹ"],
        longhand: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "ՈՒրբաթ", "Շաբաթ"]
      },
      months: {
        shorthand: ["Հուն", "Փետ", "Մարտ", "Ապր", "Մայ", "Հուն", "Հուլ", "Օգոս", "Սեպ", "Հոկ", "Նոյ", "Դեկ"],
        longhand: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"]
      },
      firstDayOfWeek: 1,
      ordinal: function ordinal() {
        return "";
      },
      rangeSeparator: " — ",
      weekAbbreviation: "Շաբ.",
      scrollTitle: "Ոլորել մեծացնելու համար",
      toggleTitle: "Սեխմեք փոխելու համար",
      amPM: ["ԿՀ", "ԿԱ"],
      yearAriaLabel: "Տարի"
    };
    fp.l10ns.hy = Armenian;
    var hy = fp.l10ns;

    exports.Armenian = Armenian;
    exports.default = hy;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
