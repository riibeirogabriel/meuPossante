import React, { useMemo, useState } from 'react';

import * as Styles from './styles';

import ShowPassword from '../../assets/icons/ShowPassword';
import HidePassword from '../../assets/icons/HidePassword';

export default ({ secureTextEntry = false, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((value) => !value);

    const memoShowPassword = useMemo(() => (
        secureTextEntry ? !showPassword : secureTextEntry
    ), [showPassword]);

    return (
        <Styles.Container>
            <Styles.Wrapper>
                <Styles.Input {...rest} secureTextEntry={memoShowPassword} />
                {secureTextEntry
                    ? (
                        <Styles.WrapperIcon onPress={toggleShowPassword}>
                            {showPassword ? <HidePassword /> : <ShowPassword />}
                        </Styles.WrapperIcon>
                    )
                    : null}
            </Styles.Wrapper>
        </Styles.Container>
    );
};
