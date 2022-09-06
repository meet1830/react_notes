function MyComponent() {
    return <div>Hello World! This is my component</div>
}

export default MyComponent;
// export means export the mycomponent function. this allows the component to be used somewhere else or gives error. any file can use this component from the whole machine

// there are two types of export -> normal export and special export
// we can export variables, data structure, functions

// cannot have multiple special exports, only single time

const myName = 'John Doe';
const myAge = 22;

export {myName, myAge};

export const what = 'anything';
// normal export

// can export multiple times
// have to match the export expression in the import syntax for it to work

export const value = '536';
// can do normal export multiple times