/* eslint-disable no-nested-ternary */
import React from 'react';
import { useRouter } from 'next/router';

export default function Page({ list }) {
    const router = useRouter();
    const itemID = router && router.query && router.query.id
    const targetItem = itemID && Array.isArray(list) && list.find(item => item.id === itemID);

    return (
        <>
            <div className="container">
                {
                    !targetItem ? "loading..." : (
                        <>
                            <ul className="list-group">
                                {
                                    Object.keys(targetItem).map((item, index) => {
                                        if(typeof targetItem[item] === "string" && item !== "text"){
                                            return (
                                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                    { item.toUpperCase() }
                                                    <span className="">{ targetItem[item] }</span>
                                                </li>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </ul>
                        </>
                    )
                }
            </div>
        </>
    );
}