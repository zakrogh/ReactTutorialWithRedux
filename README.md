As explained in the React Documentation, we can turn a functional component into a class-based component in five steps:

* Create an ES6 class with the same name that extends React.Component.
* Add a single empty method to it called render().
* Move the body of the function into the render() method.
* Replace any calls to props with this.props in the render() body. (And, calls to any event handlers should change from eventHandlerName to this.eventHandlerName).
* Delete the remaining empty function declaration.
