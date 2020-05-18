import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITAL_VALUES = {}
export function getList() {
    console.log(`${BASE_URL}/billingCycles`);
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}
export function update(values){
    return submit(values, 'put');
}
export function remove(values){
    return submit(values, 'delete');
}
export function create(values) {
    return submit(values, 'post');
}
function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''; 
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso');
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }

}

/*export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}*/
export function focusTab(billingCycles, showTab, selTab){
    return[
        showTabs(...showTab),
        selectTab(selTab),
        initialize('billingCycleForm', billingCycles)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITAL_VALUES)
    ]
}