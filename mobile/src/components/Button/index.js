import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Styles from './styles';

export default ({
    children, loading = false, type = 'solid', ...rest
}) => (
    <Styles.Container>
        <Styles.Button activeOpacity={0.8} type={type} {...rest}>
            {loading
                ? <ActivityIndicator color="white" size="small" />
                : <Styles.ButtonText type={type}>{children}</Styles.ButtonText>}
        </Styles.Button>
    </Styles.Container>
);
