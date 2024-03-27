import axios from 'axios';

const API_URI = 'http://localhost:8000';

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { urlParams, body } = requestData;

    // Constructing URL with urlParams
    let url = `${API_URI}/${serviceUrlObject.endpoint}/${type}`;
    if (urlParams) {
        url += `/${urlParams}`;
    }

    try {
        const response = await axios({
            method: serviceUrlObject.method,
            url: url,
            data: body // Passing body instead of requestData
        });
        return response.data;
    } catch (error) {
        // Handle error here if needed
        console.error('Error in API_GMAIL:', error);
        throw error; // Rethrow error to be handled by the caller
    }
};

export default API_GMAIL;
