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
    headers: {"Authorization": "Bearer " + process.env.REACT_APP_NOT_SECRET_CODE}
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