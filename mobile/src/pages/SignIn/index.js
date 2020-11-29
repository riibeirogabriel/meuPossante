import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Styles from './styles';

import LogoMedium from '../../assets/logo/Medium';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {};
    const handleSignUp = () => { navigation.navigate('SignUp'); };

    return (
        <Styles.Container>

            <Styles.Logo>
                <LogoMedium />
            </Styles.Logo>

            <Input
                placeholder="E-mail"
                onChangeText={setEmail}
                value={email}
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
            />
            <Input
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
                autoCompleteType="password"
                textContentType="password"
                secureTextEntry
            />

            <Button onPress={handleSignIn}>Entrar</Button>
            <Button type="clear" onPress={handleSignUp}>Cadastrar</Button>

        </Styles.Container>
    );
};
