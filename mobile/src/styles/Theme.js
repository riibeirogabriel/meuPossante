import normalize from 'react-native-normalize';

export const Theme = {
    colors: {
        background: '#F5F5F5',
        primary: '#F3123C',
        white: '#FFFFFF',
        black: '#404040',
        gray: '#B4B4B4',
        darkGray: '#808080',
    },
    fontSize: {
        xsmall: `${normalize(12)}px`,
        small: `${normalize(14)}px`,
        normal: `${normalize(15)}px`,
        medium: `${normalize(16)}px`,
        large: `${normalize(18)}px`,
        xlarge: `${normalize(20)}px`,
        xxlarge: `${normalize(32)}px`,
    },
    fontWeight: {
        light: 'Poppins_300Light',
        normal: 'Poppins_400Regular',
        medium: 'Poppins_500Medium',
        semiBold: 'Poppins_600SemiBold',
        bold: 'Poppins_700Bold',
        extraBold: 'Poppins_800ExtraBold',
        Black: 'Poppins_900Black',
    },
    spacing: {
        xsmall: `${normalize(4)}px`,
        small: `${normalize(8)}px`,
        normal: `${normalize(16)}px`,
        medium: `${normalize(24)}px`,
        large: `${normalize(32)}px`,
        xlarge: `${normalize(64)}px`,
        cards: {
            home: {
                width: `${normalize(128)}px`,
                height: `${normalize(128)}px`,
            },
        },
    },
    borderRadius: `${normalize(8)}px`,
};
