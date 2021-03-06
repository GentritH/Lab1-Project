import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Activity } from '../models/activity';
import { Grupmoshat } from '../models/grupmoshat';
import { Ushtrimi } from '../models/ushtrimi';
import { Njoftim } from '../models/njoftim';
import { User, UserFormValues } from '../models/user';
import { Lojtaret, LojtariFormValues } from '../models/UserLojtari';
import { Trajneri, TrajneriFormValues } from '../models/UserTrajneri';
import { store } from '../stores/store';
import { raportet } from '../models/Raportet';
import { Orari } from '../models/orari';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response => {
    await sleep(1000);
    return response;
}, (error: AxiosError) => {
    const {data, status, config} = error.response!;
    switch (status) {
        case 400:
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                history.push('/not-found');
            }
            if (data.errors) {
                const modalStateErrors = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors.push(data.errors[key])
                    }
                }
                throw modalStateErrors.flat();
            } else {
                toast.error(data);
            }
            break;
        case 401:
            toast.error('unauthorised');
            break;
        case 404:
            history.push('/not-found');
            break;
        //case 500:
        //    store.commonStore.setServerError(data);
        //    history.push('/server-error');
        //    break;
    }
    return Promise.reject(error);
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
    list: () => requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => axios.post<void>('/activities', activity),
    update: (activity: Activity) => axios.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => axios.delete<void>(`/activities/${id}`)
}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/registerTrajneri', user)
}



const LojtariAccount = {
    current : () => requests.get<Lojtaret>('/lojtariaccount/currentLojtari'),
    login: (user : LojtariFormValues) => requests.post<Lojtaret>('/lojtariaccount/loginLojtari', user),
    register: (user: LojtariFormValues) => requests.post<Lojtaret>('/lojtariaccount/registerLojtari',user)

}

const TrajneriAccount = {
    current: () => requests.get<Trajneri>('/trajneriaccount/currentTrajneri'),
    login: (user: TrajneriFormValues) => requests.post<Trajneri>('/trajneriaccount/loginTrajneri', user),
    register: (user: TrajneriFormValues) => requests.post<Trajneri>('/trajneriaccount/registerTrajneri', user)
}


const Trajnerii = {
    
    list: () => requests.get<Trajneri[]>('/Trajneri'),
    details: (id: string) => requests.get<Trajneri>(`/Trajneri/${id}`),
    create: (trajneri: Trajneri) => axios.post<void>('/Trajneri', trajneri),
    update: (trajneri: Trajneri) => axios.put<void>(`/Trajneri/${trajneri.id}`, trajneri),
    delete: (id: string) => axios.delete<void>(`/Trajneri/${id}`)
}

const Lojtarett = {
    list: () => requests.get<Lojtaret[]>('/Lojtari'),
    details:(id: string) => requests.get<Lojtaret>(`/Lojtari/${id}`),
    create: (lojtari: Lojtaret) => axios.post<void>('/Lojtari', lojtari),
    update: (lojtari: Lojtaret) => axios.put<void>(`Lojtari/${lojtari.id}`, lojtari),
    delete: (id: string) => axios.delete<void>(`/Lojtari/${id}`)
}

const GrupmoshatT ={
    list: () => requests.get<Grupmoshat[]>('/grupmoshatT'),
    details: (id: string) => requests.get<Grupmoshat>(`/grupmoshatT/${id}`),
    create: (grupmoshat:Grupmoshat) => axios.post<void>('/grupmoshatT',grupmoshat),
    update: (grupmoshat:Grupmoshat) => axios.put<void>(`/grupmoshatT/${grupmoshat.id}`,grupmoshat),
    delete: (id: string) => axios.delete<void>(`/grupmoshatT/${id}`)
}

const Raportet ={
    list: () => requests.get<raportet[]>('/Raportet'),
    details: (id: string) => requests.get<raportet>(`/Raportet/${id}`),
    create: (raportet:raportet, UshtrimiId:string,GrupmoshaId:string,LojtariId:string) => 
    axios.post<void>(`/Raportet/${UshtrimiId},${GrupmoshaId},${LojtariId}`,raportet),
    update: (raportet:raportet) => 
    axios.put<void>(`/Raportet/${raportet.id}`,raportet),
    delete: (id: string) => axios.delete<void>(`/Raportet/${id}`)
}

const Oraret ={
    list: () => requests.get<Orari[]>('/Oraret'),
    details: (id: string) => requests.get<Orari>(`/Oraret/${id}`),
    create: (oraret:Orari, UshtrimiId: string, GrupmoshaId: string) => 
    axios.post<void>(`/Oraret/${GrupmoshaId},${UshtrimiId}`,oraret),
    update: (oraret:Orari) => 
    axios.put<void>(`/Oraret/${oraret.id}`,oraret),
    delete: (id: string) => axios.delete<void>(`/Oraret/${id}`)
}

const Ushtrimet ={
    list: () => requests.get<Ushtrimi[]>('/ushtrimet'),
    details: (id: string) => requests.get<Ushtrimi>(`/ushtrimet/${id}`),
    create: (ushtrimi:Ushtrimi) => axios.post<void>('/ushtrimet',ushtrimi),
    update: (ushtrimi:Ushtrimi) => axios.put<void>(`/ushtrimet/${ushtrimi.id}`,ushtrimi),
    delete: (id: string) => axios.delete<void>(`/ushtrimet/${id}`)


}

const Njoftimet = {
    list: () => requests.get<Njoftim[]>('/njoftimet'),
    details: (id: string) => requests.get<Njoftim>(`/njoftimet/${id}`),
    create: (njoftim: Njoftim) => axios.post<void>('/njoftimet', njoftim),
    update: (njoftim: Njoftim) => axios.put<void>(`/njoftimet/${njoftim.id}`, njoftim),
    delete: (id: string) => axios.delete<void>(`/njoftimet/${id}`)
}

const agent = {
    Activities,
    Account,
    LojtariAccount,
    TrajneriAccount,
    Trajnerii,
    Lojtarett,
    GrupmoshatT,
    Ushtrimet,
    Raportet,
    Oraret,
    Njoftimet
}

export default agent;