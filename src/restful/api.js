import axios from 'axios'

let baseUrl = " http://localhost:8000";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseUrl;

export const register = params => {
    return axios.post('/api/register/', params).then(res => res.data)
};

export const login = params => {
    return axios.post('/api/login/', params).then(res => res.data)
};

export const addProject = params => {
    return axios.post('/api/fastrunner/project/', params).then(res => res.data)
};

export const deleteProject  = config => {
    return axios.delete('/api/fastrunner/project/', config).then(res => res.data)
};

export const getProjectList  = params => {
    return axios.get('/api/fastrunner/project/').then(res => res.data)
};

export const getProjectDetail  = pk => {
    return axios.get('/api/fastrunner/project/' + pk + '/').then(res => res.data)
};

export const getPagination  = url => {
    return axios.get(url).then(res => res.data)
};

export const updateProject = params => {
    return axios.patch('/api/fastrunner/project/', params).then(res => res.data)
};

export const addDataBase = params => {
    return axios.post('/api/fastrunner/database/', params).then(res => res.data)
};

export const getDataBaseList  = params => {
    return axios.get('/api/fastrunner/database/').then(res => res.data)
};

export const deleteDataBase  = pk => {
    return axios.delete('/api/fastrunner/database/' + pk + '/').then(res => res.data)
};

export const updateDataBase = (url, params) => {
    return axios.patch('/api/fastrunner/database/'+ url + '/', params).then(res => res.data)
};

export const getDebugtalk = url => {
    return axios.get('/api/fastrunner/debugtalk/'+ url + '/').then(res => res.data)
};

export const updateDebugtalk = params => {
    return axios.patch('/api/fastrunner/debugtalk/', params).then(res => res.data)
};

export const getTree = url => {
    return axios.get('/api/fastrunner/tree/'+ url + '/').then(res => res.data)
};

export const updateTree = (url, params) => {
    return axios.patch('/api/fastrunner/tree/'+ url + '/', params).then(res => res.data)
};

export const uploadFile  = url => {
    return baseUrl + '/api/fastrunner/file/'
};

export const addAPI = params => {
    return axios.post('/api/fastrunner/api/', params).then(res => res.data)
};

export const apiList = params => {
    return axios.get('/api/fastrunner/api/').then(res => res.data)
};

export const getPaginationBypage = url => {
    return axios.get('/api/fastrunner/api/?page='+url).then(res => res.data)
};

export const delAPI = url => {
    return axios.delete('/api/fastrunner/api/' + url + '/').then(res => res.data)
};

export const getAPISingle = url => {
    return axios.get('/api/fastrunner/api/' + url + '/').then(res => res.data)
};

export const addSuite = params => {
    return axios.post('/api/fastrunner/suite/', params).then(res => res.data)
};

export const getSuiteList = params => {
    return axios.get('/api/fastrunner/suite/').then(res => res.data)
};

export const getSuiteStep = url => {
    return axios.get('/api/fastrunner/suite_step/' + url + '/').then(res => res.data)
};

export const getSuitePaginationBypage = url => {
    return axios.get('/api/fastrunner/suite/?page='+url).then(res => res.data)
};

export const delSuite = url => {
    return axios.delete('/api/fastrunner/suite/' + url + '/').then(res => res.data)
};

