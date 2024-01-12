import * as apiService from "../../../data";

const handleReformatData = (data) => {
    const reformatData = data.map((x) => ({ ...x, label: x.name, value: x.id }));

    return reformatData;
}

export const handleFetchLaundryPackages = async (search = '') => {
    let data = [];

    try {
        const payload = {
            limit: 10,
            page: 1,
            search,
        }

        const response = await apiService.getLaundryPackages(payload);

        ({ data } = response);
    } catch (e) {
        // TODO: show error notification
    }

    return handleReformatData(data);
};

export const handleFetchPaymentTypes = async (search = '') => {
    let data = [];

    try {
        const payload = {
            limit: 10,
            page: 1,
            search,
        }

        const response = await apiService.getPaymentTypes(payload);

        ({ data } = response);
    } catch (e) {
        // TODO: show error notification
    }

    return handleReformatData(data);
};
