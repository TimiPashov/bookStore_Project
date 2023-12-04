const baseURL = 'http://localhost:3030/data/purchases';

export async function getAllpurchases() {
    const response = await fetch(baseURL);
    const purchases = await response.json();
    return purchases;
}

export async function addPurchase(values, token) {

    const response = await fetch(baseURL, {
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        },
        method: 'post',
        body: JSON.stringify(values)
    });
    const purchase = await response.json();
    return purchase;

}