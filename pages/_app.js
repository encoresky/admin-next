import React from "react";

import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { PersistGate as PersistGateClient } from 'redux-persist/integration/react';

import { configureStore } from "../store";

import Header from "../components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchProblemsItemsRequest } from "../store/actions/problems";
import { fetchPassagesItemsRequest } from "../store/actions/passages";
import { fetchLessonsItemsRequest } from "../store/actions/lessons";

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    componentDidMount(){
        const { store } = this.props
        store.subscribe(() => {
            const initialState = store.getState()
            if (!this.isInitialized && initialState && initialState._persist && initialState._persist.rehydrated) {
                this.isInitialized = true;
                this.props.store.dispatch(fetchProblemsItemsRequest(0))
                this.props.store.dispatch(fetchLessonsItemsRequest(0))
                this.props.store.dispatch(fetchPassagesItemsRequest(0))
            } 
        });
    }

    render() {
        const {Component, pageProps, store, isServer} = this.props;
        return (
            <Provider store={store}>
                <PersistGateClient persistor={store.__PERSISTOR} loading={null}>
                    <Header />
                    <div style={{ paddingTop: 20 }}>
                        <Component {...pageProps} />
                    </div>
                </PersistGateClient>
            </Provider>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));