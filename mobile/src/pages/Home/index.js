import React from 'react';

import * as Styles from './styles';

import Image from '../../assets/svg/HomeImage';
import Search from '../../assets/svg/icons/Search';
import SellCar from '../../assets/svg/icons/SellCar';
import MyAdverts from '../../assets/svg/icons/MyAdverts';

export default () => (
    <Styles.Container>
        <Image />
        <Styles.Text>O que você quer fazer?</Styles.Text>

        <Styles.ScrollHorizontal horizontal showsHorizontalScrollIndicator={false}>

            <Styles.CardsContainer>
                <Styles.Card>
                    <Search />
                    <Styles.CardText>Quero comprar</Styles.CardText>
                </Styles.Card>

                <Styles.Card>
                    <SellCar />
                    <Styles.CardText>Quero vender</Styles.CardText>
                </Styles.Card>

                <Styles.Card>
                    <MyAdverts />
                    <Styles.CardText>Meus anúncios</Styles.CardText>
                </Styles.Card>
            </Styles.CardsContainer>

        </Styles.ScrollHorizontal>

    </Styles.Container>
);
