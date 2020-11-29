import React, { useEffect, useMemo, useState } from 'react';

import * as Styles from './styles';

import Select from '../../components/Select';
import Button from '../../components/Button';

import * as API from '../../api';

export default () => {
    const [brands, setBrands] = useState([]);
    const [brandId, setBrandId] = useState(null);

    const [cars, setCars] = useState([]);
    const [carId, setCarId] = useState(null);

    const [carYears, setCarsYears] = useState([]);
    const [year, setYear] = useState(null);

    useEffect(() => {
        (async () => {
            const _brands = await API.getBrands();
            setBrands(_brands);
        })();
    }, []);

    useEffect(() => {
        if (brandId) {
            (async () => {
                const _cars = await API.getBrandCars(brandId);
                setCars(_cars);
            })();
        }
    }, [brandId]);

    useEffect(() => {
        if (brandId && carId) {
            (async () => {
                const _carYears = await API.getCarYears(brandId, carId);
                setCarsYears(_carYears);
            })();
        }
    }, [carId]);

    const handleSearch = () => {
        // console.log(brandId, carId, year);
    };

    const memoButton = useMemo(() => {
        const text = brandId || carId || year ? 'Ver anúncios' : 'Ver todos anúncios';
        return <Button onPress={handleSearch}>{text}</Button>;
    }, [brandId, carId, year]);

    return (
        <Styles.Container>

            <Styles.SelectContainer>
                <Select items={brands} value={brandId} setValue={setBrandId} placeHolder="Marca" />
                <Select items={cars} value={carId} setValue={setCarId} placeHolder="Modelo" enabled={!!brandId} />
                <Select items={carYears} value={year} setValue={setYear} placeHolder="Ano" enabled={!!carId} />
            </Styles.SelectContainer>

            {memoButton}

        </Styles.Container>
    );
};
