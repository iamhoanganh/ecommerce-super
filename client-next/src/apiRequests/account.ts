import http from "@/lib/http";
import {AccountResType} from "@/schemaValidations/account.schema";

const accountApiRequest = {
    me: (sessionToken: string) => http.get<AccountResType>('/user/current', {
        headers: {
            Authorization: `Bearer ${sessionToken}`,
        },
    }),
}
export default accountApiRequest