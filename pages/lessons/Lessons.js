/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import Router from 'next/router';
import debounce from "lodash.debounce";

export default function Page({ list, fetchLessonsItemsRequest, hasMore, isLoading, page }) {

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (isLoading || hasMore === false) return;
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                fetchLessonsItemsRequest(page + 1);
            }
        }, 100);
    })

    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr onClick={() => Router.push(`/show-lessons?id=${item.id}`)} key={index}>
                                        <td>{item.multi_line_title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.name}</td>
                                        <td>{item.status === 1 ? "Active" : "InActive"}</td>
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