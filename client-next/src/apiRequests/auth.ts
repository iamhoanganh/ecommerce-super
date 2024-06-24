import {LoginBodyType, LoginResType, RegisterBodyType, RegisterResType} from "@/schemaValidations/auth.schema";
import http from "@/lib/http";

const authApiRequest = {
    login: (body: LoginBodyType) => http.post<LoginResType>('/user/login', body),
    register: (body: RegisterBodyType) => http.post<RegisterResType>('/user/register', body),
    auth: (body: {sessionToken: string}) => http.post<any>('/api/auth', body, {
        baseUrl: ""
    }),
    logoutFromNextServerToServer: (sessionToken: string) => http.post('user/logout', {}, {
        headers: {
            Authorization: `Bearer ${sessionToken}`
        }
    }),
    logoutFormNextClientToNextServer: (sessionToken: string) => http.post('/api/auth/logout', {}, {
        baseUrl: "",
    })

}

export default authApiRequest