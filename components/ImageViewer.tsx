import { Image } from 'expo-image';
import { ImageSourcePropType } from 'react-native';

type Props = {
    imgSource: ImageSourcePropType;
    notBottom?: boolean;
}

export default function ImageViewer ({imgSource, notBottom}: Props){
    return (
        <Image
        style={{width: 24, 
            height: 24,
            tintColor: notBottom? "#272727" : "#F5F5F5"
        }}
         source={imgSource}
        ></Image>
    )
}