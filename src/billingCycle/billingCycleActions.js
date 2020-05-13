import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api';
export function getList() {
    console.log(`${BASE_URL}/billingCycles`);
    const request = axios.get(`${BASE_URL}/billingCycles`) ;
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}