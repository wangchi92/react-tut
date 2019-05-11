### React Router Tutorial Based on https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/

## Setup

npm install --save react-router-dom
(react-router-native for react native)

## The Router

- 2 choices: BrowserRouter(dynamic) / HashRouter(static)
- History: Each router has a History object

## Core Imports

- import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

## API

=>  Router   - use this to wrap 1 child element only
    => BrowserRouter - sync with URL (html5)
    => HashRouter    - /#/.. router, for static routes

        => BrowserRouter vs HashRouter:
           BrowserRouter sends entire url to server for request, HashRouter only send url before # for to server to request for file - server rendering

    => StaticRouter  - Server side rendering
    => MemoryRouter  - for testing and non-browser env
    => NativeRouter  - React native, renders MemoryRouter

=>  Route    - where to display the route is triggered
    - props : match, location, history
    => Route component - don't use this for inline function
    => Route render    - use this for inline function
    => Route children  - renders even when match is null
    => "exact"      - exact string
    => "strict"     - trailing slash
    => "sensitive   - case sensitive
    => location     - ??

=>  Switch   - wrap Routes to only trigger the first match

=>  Link     - navigate
    => NavLink  - styling when matching current render

=>  Redirect - redirect current location in history
    (like server side redirects)

=>  Prompt   - prompt user when navigating away
    <Prompt message="" when=True />
    Enclose in something like a <Form>

## Examples:

-   URL Parameters with regex: 
    <Route path = "/foo/:bar(regex) component={Component}/>

-   Redirects:
    <Redirect to={{ pathname: "/login",
                    state: from:{props.location}
                 }}
    />
    -   withRouter() => wrap when not using <Route /> to       access history, eg. history.push("/")

-   Custom Link
    <Route path={to} children={({ match }) => (
        <div className={match ? "active" : ""}>
          {match ? "> " : ""}
          <Link to={to}>{label}</Link>
        </div> )}
    />

-   Preventing Transitions
    <Form>
        <Prompt when={isBlocking} message={location =>
                    `Are you sure you want to go to ${location.pathname}`  }
        />
    </Form>

-   No Match (404)
    <Route> without path always renders, always use this to catch all unmatched combined with <Switch>

-   Sidebar
    <div style={{ display: "flex" }}>
        <div style={{width:"40%"}} />
        <div />
    </div>

-   Animated Transitions
    <TransitionGroup>, <CSSTransition> from "react-tranition-group'
    <TransitionGroup>
        <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
        />
    </TransitionGroup>

-   Route Config
    Possible to centralize all route configs in one json

-   Modal Gallery ??

-   Query Parameters ??


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).