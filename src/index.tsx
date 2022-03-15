import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from 'react-router-dom';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {"Authorization": "Bearer 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"}
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);