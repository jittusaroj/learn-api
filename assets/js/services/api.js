import { PRODUCT_URL } from '../constants.js';
const headers={
        'Content-Type': 'application/json'
    };

function options(method, data) {
    if (method === "POST" || method === "PUT") {
        return { method, headers, body: JSON.stringify(data) };
    } else {
        return { method, headers };
    }
}

export async function handleService(URL, method="GET",data={}) {
    const response = await fetch(URL, options(method,data));
    return await response.json();
}


