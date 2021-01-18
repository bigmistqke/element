// Do you feel it is strange that this file is named "jsx-runtime" although
// there is no runtime and it exports only types?
//
// You are not alone!
//
// This is how TypeScript chose for JSX to operate: not only is `import {JSX}`
// not supported (JSX expressions will fail to see the JSX type as noted in
// https://github.com/microsoft/TypeScript/issues/41813) but jsx-runtime (which
// we are required to use instead of import syntax) is the required file that
// `jsxImportSource` looks for in the directory that you supply to it the
// `jsxImportSource` option.

// So, we re-export jsx-runtime from solid-js so that lume/element users can
// point their `jsxImportSource` options to `@lume/element/dist`
export type {JSX} from 'solid-js/jsx-runtime'
