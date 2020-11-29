import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
// import { useNavigation, useRoute } from '@react-navigation/native';

import * as Styles from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default () => {
    // const navigation = useNavigation();
    // const route = useRoute();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [hasWhatsapp, setHasWhatsapp] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {};

    return (
        <Styles.Container>
            <Styles.FormContainer>
                <Input
                    placeholder="Nome"
                    onChangeText={setName}
                    value={name}
                />
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
                    placeholder="Telefone"
                    onChangeText={setPhone}
                    value={phone}
                />
                <Input
                    placeholder="Senha"
                    onChangeText={setPassword}
                    value={password}
                    autoCompleteType="password"
                    textContentType="password"
                    secureTextEntry
                />
                <Input
                    placeholder="Repetir senha"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    autoCompleteType="password"
                    textContentType="password"
                    secureTextEntry
                />

                <Styles.HasWhatsappContainer>
                    <CheckBox
                        disabled={false}
                        value={hasWhatsapp}
                        onValueChange={setHasWhatsapp}
                        tintColors={{
                            true: '#F3123C',
                            false: '#B4B4B4',
                        }}
                    />
                    <Styles.HasWhatsappText>
                        Eu desejo usar o Whatsapp.
                    </Styles.HasWhatsappText>
                </Styles.HasWhatsappContainer>

            </Styles.FormContainer>

            <Button onPress={handleSignUp}>Cadastrar</Button>

        </Styles.Container>
    );
};
