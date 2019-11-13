/* eslint-disable no-nested-ternary */
import React from 'react';
import Link from 'next/link';

export default function Page() {

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link href={"/"}>
                    <a className="navbar-brand" href="#">Logo</a>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href={"/problems"}>
                            <a className="nav-link" href="#">Problems</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={"/lessons"}>
                            <a className="nav-link" href="#">Lessons</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={"/passages"}>
                            <a className="nav-link" href="#">Passages</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}