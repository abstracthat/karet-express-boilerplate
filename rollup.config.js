import babel       from "rollup-plugin-babel"
import builtins    from "rollup-plugin-node-builtins"
import commonjs    from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import replace     from "rollup-plugin-replace"
import uglify      from "rollup-plugin-uglify"

export default {
  plugins: [
    replace({
      "global.setTimeout": "window.setTimeout",
      "global.clearTimeout": "window.clearTimeout",
      "global.performance": "window.performance",
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    builtins(),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        "node_modules/react-dom/index.js": [
          "render",
        ],
        "node_modules/kefir/dist/kefir.js": [
          "Observable",
          "Property",
          "combine",
          "concat",
          "constant",
          "constantError",
          "fromEvents",
          "interval",
          "later",
          "merge",
          "never",
          "stream"
        ],
        "node_modules/ramda/index.js": [
          "F",
          "T",
          "__",
          "add",
          "addIndex",
          "adjust",
          "all",
          "allPass",
          "always",
          "and",
          "any",
          "anyPass",
          "ap",
          "aperture",
          "append",
          "apply",
          "applySpec",
          "ascend",
          "assoc",
          "assocPath",
          "binary",
          "both",
          "call",
          "chain",
          "clamp",
          "comparator",
          "complement",
          "compose",
          "concat",
          "cond",
          "construct",
          "constructN",
          "contains",
          "converge",
          "countBy",
          "curry",
          "curryN",
          "dec",
          "defaultTo",
          "descend",
          "difference",
          "differenceWith",
          "dissoc",
          "dissocPath",
          "divide",
          "drop",
          "dropLast",
          "dropLastWhile",
          "dropRepeats",
          "dropRepeatsWith",
          "dropWhile",
          "either",
          "empty",
          "eqBy",
          "eqProps",
          "equals",
          "evolve",
          "filter",
          "find",
          "findIndex",
          "findLast",
          "findLastIndex",
          "flatten",
          "flip",
          "fromPairs",
          "groupBy",
          "groupWith",
          "gt",
          "gte",
          "has",
          "hasIn",
          "head",
          "identical",
          "identity",
          "ifElse",
          "inc",
          "indexBy",
          "indexOf",
          "init",
          "insert",
          "insertAll",
          "intersection",
          "intersectionWith",
          "intersperse",
          "into",
          "invert",
          "invertObj",
          "invoker",
          "is",
          "isEmpty",
          "isNil",
          "join",
          "juxt",
          "keys",
          "keysIn",
          "last",
          "lastIndexOf",
          "length",
          "lt",
          "lte",
          "map",
          "mapAccum",
          "mapAccumRight",
          "mapObjIndexed",
          "match",
          "mathMod",
          "max",
          "maxBy",
          "mean",
          "median",
          "memoize",
          "merge",
          "mergeAll",
          "mergeWith",
          "mergeWithKey",
          "min",
          "minBy",
          "modulo",
          "multiply",
          "nAry",
          "negate",
          "none",
          "not",
          "nth",
          "nthArg",
          "objOf",
          "of",
          "omit",
          "or",
          "pair",
          "partial",
          "partialRight",
          "partition",
          "path",
          "pathEq",
          "pathOr",
          "pathSatisfies",
          "pick",
          "pickAll",
          "pickBy",
          "pipe",
          "pluck",
          "prepend",
          "product",
          "project",
          "prop",
          "propEq",
          "propIs",
          "propOr",
          "propSatisfies",
          "props",
          "range",
          "reduce",
          "reduceBy",
          "reduceRight",
          "reduceWhile",
          "reduced",
          "reject",
          "remove",
          "repeat",
          "replace",
          "reverse",
          "scan",
          "sequence",
          "slice",
          "sort",
          "sortBy",
          "sortWith",
          "split",
          "splitAt",
          "splitEvery",
          "splitWhen",
          "subtract",
          "sum",
          "symmetricDifference",
          "symmetricDifferenceWith",
          "tail",
          "take",
          "takeLast",
          "takeLastWhile",
          "takeWhile",
          "tap",
          "test",
          "times",
          "toLower",
          "toPairs",
          "toPairsIn",
          "toString",
          "toUpper",
          "transduce",
          "transpose",
          "traverse",
          "trim",
          "tryCatch",
          "type",
          "unapply",
          "unary",
          "uncurryN",
          "unfold",
          "union",
          "unionWith",
          "uniq",
          "uniqBy",
          "uniqWith",
          "unless",
          "unnest",
          "until",
          "update",
          "useWith",
          "values",
          "valuesIn",
          "when",
          "where",
          "whereEq",
          "without",
          "xprod",
          "zip",
          "zipObj",
          "zipWith"
        ]
      }
    }),
    babel(),
    process.env.NODE_ENV === "production" &&
      uglify()
  ].filter(x => x)
}
