/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import Router from 'next/router';
import debounce from "lodash.debounce";

export default function Page({ list, fetchPassagesItemsRequest, hasMore, isLoading, page }) {

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (isLoading || hasMore === false) return;
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                fetchPassagesItemsRequest(page + 1);
            }
        }, 100);
    })

    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Active</th>
                            <th>Title</th>
                            <th>Reference Number</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr onClick={() => Router.push(`/show-passages?id=${item.id}`)} key={index}>
                                        <td>{item.active === 1 ? "True" : "False"}</td>
                                        <td>{item.title}</td>
                                        <td>{item.reference_id}</td>
                                        <td>{item.notes}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                { isLoading && "Loading" }
            </div>
        </>
    );
}