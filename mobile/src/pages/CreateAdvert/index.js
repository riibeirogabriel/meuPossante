import React, { useEffect, useMemo, useState } from 'react';

import * as Styles from './styles';

import Select from '../../components/Select';
import Button from '../../components/Button';
import UploadImage from '../../components/UploadImage';
import Input from '../../components/Input';

import * as API from '../../api';

export default () => {
    const [brands, setBrands] = useState([]);
    const [brandId, setBrandId] = useState(null);

    const [cars, setCars] = useState([]);
    const [carId, setCarId] = useState(null);

    const [carYears, setCarsYears] = useState([]);
    const [year, setYear] = useState(null);

    const [carValue, setCarValue] = useState(null);
    const [carColor, setCarColor] = useState(null);
    const [carKm, setCarKm] = useState(null);
    const [description, setDescription] = useState(null);

    const [page, setPage] = useState(0);

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

    const handleNext = () => {
        if (page === 1) alert(brandId, carId, year);
        else setPage((value) => value + 1);
    };

    const handlePrevious = () => {
        setPage((value) => value - 1);
        // console.log(brandId, carId, year);
    };

    const memoButtons = useMemo(() => {
        const disabled = page === 0
            ? !brandId && !carId && !year
            : !carValue && !carColor && !description;

        return (
            <Styles.ButtonContainer>
                {page !== 0
                    ? <Button onPress={handlePrevious} type="">Voltar</Button>
                    : null}
                <Button onPress={handleNext} disabled={disabled}>
                    {page === 0 ? 'Próximo' : 'Publicar'}
                </Button>
            </Styles.ButtonContainer>
        );
    }, [page, brandId, carId, year, carValue, carColor, description]);

    return (
        <Styles.Container>

            {page === 0
                ? (
                    <Styles.SelectContainer>
                        <UploadImage />
                        <Select items={brands} value={brandId} setValue={setBrandId} placeHolder="Marca" />
                        <Select items={cars} value={carId} setValue={setCarId} placeHolder="Modelo" enabled={!!brandId} />
                        <Select items={carYears} value={year} setValue={setYear} placeHolder="Ano" enabled={!!carId} />
                    </Styles.SelectContainer>
                ) : (
                    <Styles.SelectContainer>
                        <Input
                            placeholder="Valor"
                            onChangeText={carValue}
                            value={setCarValue}
                            keyboardType="numeric"
                        />
                        <Input
                            placeholder="Cor"
                            onChangeText={carColor}
                            value={setCarColor}
                            keyboardType="default"
                        />
                        <Input
                            placeholder="Quilometragem"
                            onChangeText={carKm}
                            value={setCarKm}
                            keyboardType="numeric"
                        />
                        <Input
                            placeholder="Descrição"
                            onChangeText={description}
                            value={setDescription}
                            keyboardType="default"
                        />
                    </Styles.SelectContainer>
                )}

            {memoButtons}

        </Styles.Container>
    );
};
