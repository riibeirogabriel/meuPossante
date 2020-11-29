import React from 'react';
import { Picker } from '@react-native-picker/picker';

import * as Styles from './styles';

export default ({
    items = [], placeHolder = '', value, setValue, enabled = true,
}) => {
    const handleValueChange = (itemValue) => setValue(itemValue);

    return (
        <Styles.Container>
            <Styles.Wrapper>

                <Styles.Select
                    selectedValue={value}
                    onValueChange={handleValueChange}
                    enabled={enabled}
                >
                    <Picker.Item label={placeHolder} value="" color="#A0A0A0" />
                    {items.map((item) => (
                        <Picker.Item
                            key={item.value}
                            label={item.label}
                            value={item.value}
                        />
                    ))}
                </Styles.Select>

            </Styles.Wrapper>
        </Styles.Container>
    );
};
