export function fetchProblemsItems(page) {
    return fetch(`http://18.237.242.89/api/problems?page=${page}`).then(res => res.json())
}

export function fetchLessonsItems(page) {
    return fetch(`http://18.237.242.89/api/lessons?page=${page}`).then(res => res.json())
}

export function fetchPassagesItems(page) {
    return fetch(`http://18.237.242.89/api/passages?page=${page}`).then(res => res.json())
}