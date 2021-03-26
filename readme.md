Redux do shallow comparision for state changes i.e
shouldcomponentupdate by default it will perform.

But it performs rerender on following scenarios:

1.  Change in value of stateprops
2.  change in value of ownprops

It will call mapStatetoProps but not rerender,

Change in state
Change in ownprops

## Performance check

Note that returning a mutated object of the same reference is a common mistake that can result in your component not re-rendering when expected.

Even though new object or array returned but the value remains the same will cause rerender affects performance,

1. Creating new arrays with someArray.map() or someArray.filter()
2. Merging arrays with array.concat
3. Selecting portion of an array with array.slice
4. Copying values with Object.assign
5. Copying values with the spread operator { ...oldState, ...newData }

To Avoid unnecessary rerender use memoize:
