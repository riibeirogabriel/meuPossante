import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Styles from './styles';

import Image from '../../assets/svg/HomeImage';
import Search from '../../assets/icons/Search';
import SellCar from '../../assets/icons/SellCar';
import MyAdverts from '../../assets/icons/MyAdverts';

export default () => {
    const navigation = useNavigation();

    const handleBuy = () => navigation.navigate('Search');
    const handleSell = () => navigation.navigate('CreateAdvert');
    const handleMyAdverts = () => navigation.navigate('SignIn');

    return (
        <Styles.Container>
            <Image />
            <Styles.Text>O que você quer fazer?</Styles.Text>

            <Styles.ScrollHorizontal horizontal showsHorizontalScrollIndicator={false}>

                <Styles.CardsContainer>
                    <Styles.Card onPress={handleBuy}>
                        <Search />
                        <Styles.CardText>Quero comprar</Styles.CardText>
                    </Styles.Card>

                    <Styles.Card onPress={handleSell}>
                        <SellCar />
                        <Styles.CardText>Quero vender</Styles.CardText>
                    </Styles.Card>

                    <Styles.Card onPress={handleMyAdverts}>
                        <MyAdverts />
                        <Styles.CardText>Meus anúncios</Styles.CardText>
                    </Styles.Card>
                </Styles.CardsContainer>

            </Styles.ScrollHorizontal>

        </Styles.Container>
    );
};
