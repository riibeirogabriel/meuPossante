import React, { useState } from 'react';

import * as Styles from './styles';

import meuPossante from '../../assets/images/meuPossante.png';

export default () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Styles.Container>
            <Styles.Card>

                <Styles.CardImage source={meuPossante} />

                <Styles.Content>

                    <Styles.Title>
                        Audi A5
                    </Styles.Title>

                    <Styles.SubTitle>
                        2.0 TFSI SPORTBACK AMBITION PLUS 16V GASOLINA 4P S-TRONIC
                    </Styles.SubTitle>

                    <Styles.ContentWrapper>
                        <Styles.Value>
                            R$ 180.000,00
                        </Styles.Value>
                        <Styles.Year>
                            2017/2018
                        </Styles.Year>
                    </Styles.ContentWrapper>

                </Styles.Content>

                <Styles.CardButton>
                    <Styles.ButtonText>
                        Visualizar anúncio
                    </Styles.ButtonText>
                </Styles.CardButton>

            </Styles.Card>
        </Styles.Container>
    );
};
