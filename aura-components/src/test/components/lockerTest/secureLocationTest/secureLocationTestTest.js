({
    // LockerService not supported on IE
    // TODO(W-3674741): FF version in autobuilds is too far behind
    browsers: ["-IE8", "-IE9", "-IE10", "-IE11", "-FIREFOX"],

    setUp: function(cmp) {
        cmp.set("v.testUtils", $A.test);
    },

    testLocationAccessorsEquality: {
        test: function(cmp) {
            cmp.testLocationAccessorsEquality();
        }
    },

    testAssignJavascriptBypass: {
        test: function(cmp) {
            cmp.testAssignJavascriptBypass();
        }
    }
})