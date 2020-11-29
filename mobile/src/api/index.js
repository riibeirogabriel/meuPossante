import request from './request';

export const getBrands = async () => {
    const { data } = await request.get('/marcas.json');
    const response = data.map((brand) => ({
        label: brand.name.replace('-', ''),
        value: brand.id,
    }));
    return response;
};

export const getBrandCars = async (brandId) => {
    const { data } = await request.get(`/veiculos/${brandId}.json`);
    const response = data.map((car) => ({ label: car.name, value: car.id }));
    return response;
};

export const getCarYears = async (brandId, carId) => {
    const { data } = await request.get(`/veiculo/${brandId}/${carId}.json`);
    const response = data.map((year) => ({ label: year.name, value: year.id }));
    return response;
};

export const getCar = async (brandId, carId, carYear) => {
    const { data } = await request.get(`/veiculo/${brandId}/${carId}/${carYear}.json`);
    return data;
};
