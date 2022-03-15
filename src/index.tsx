import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from 'react-router-dom';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    repository: {
                        merge(existing, incoming) {
                            return incoming;
                        }
                    },
                }
            }
        }
    }),
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