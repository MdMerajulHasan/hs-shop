import { Image } from 'expo-image';
import { ImageSourcePropType } from 'react-native';

type Props = {
    imgSource: ImageSourcePropType;
}

export default function ImageViewer ({imgSource}: Props){
    return (
        <Image
        style={{width: 24, height: 24, margin: 'auto'}}
         source={imgSource}
        ></Image>
    )
}