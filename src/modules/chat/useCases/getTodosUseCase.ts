import Axios from "axios"

export const getTodosUseCase = async () => {
    try {
        const config = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
            url: 'https://jsonplaceholder.typicode.com/todos'
        };
        const response = await Axios(config);
        return { data: response.data, status: response.status }
    } catch (error) {
        console.log(error);
    };
};