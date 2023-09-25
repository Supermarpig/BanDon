import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

type I_FetchParams = {
    url: string;
    method?: 'GET' | 'POST';
    data?: any;
    headers?: Record<string, string>;
};

interface I_FetchResponse {
    data: any;
    status: number;
}

async function fetchAPI({ url, method = 'GET', data, headers }: I_FetchParams): Promise<I_FetchResponse | null> {
    const config: AxiosRequestConfig = {
        method,
        url,
        data,
        headers,
    };

    try {
        const response: AxiosResponse = await axios(config);

        return {
            data: response.data,
            status: response.status,
        };
    } catch (error:any) {
        if (error.isAxiosError) {
            const axiosError = error as AxiosError;
            console.error(`${url} Axios Error =>`, axiosError);

            // 处理其他错误或抛出异常
            return null;
        } else {
            console.error(`${url} Exception =>`, error);
            // 处理其他错误或抛出异常
            return null;
        }
    }
}

export default fetchAPI;
