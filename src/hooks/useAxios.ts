import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const useAxios = (API: string, payload?: any) => {
    const getCall = async () => {
        try {
            const options = {
                method: 'GET',
                url: API,
            }

            const res = await axiosInstance(options);
            return res.data
        } catch (error) {
            throw error;
        }
    }

    const postCall = async () => {
        try {
            const options = {
                method: 'POST',
                url: API,
                data: payload
            }

            const res = await axiosInstance(options);
            return res.data
        } catch (error) {
            throw error;
        }
    }

    const putCall = async () => {
        try {
            const options = {
                method: 'PUT',
                url: API,
                data: payload
            }
            const res = await axiosInstance(options);
            return res.data
        } catch (error) {
            throw error;
        }
    }

    const deleteCall = async () => {
        try {
            const options = {
                method: 'DELETE',
                url: API
            }

            const res = await axiosInstance(options);
            return res.data
        } catch (error) {
            throw error;
        }
    }

    return {getCall, postCall, putCall, deleteCall}
}