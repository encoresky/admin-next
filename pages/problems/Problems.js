/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import Router from 'next/router';
import debounce from "lodash.debounce";

export default function Page({ list, fetchProblemsItemsRequest, hasMore, isLoading, page }) {

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (isLoading || hasMore === false) return;
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                fetchProblemsItemsRequest(page + 1);
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
                            <th>Format</th>
                            <th>Reference Number</th>
                            <th>Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr onClick={() => Router.push(`/show-problems?id=${item.id}`)} key={index}>
                                        <td>{item.active === 1 ? "True" : "False"}</td>
                                        <td>{item.format}</td>
                                        <td>{item.reference_number}</td>
                                        <td>{item.difficulty}</td>
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