import { Container, Title, Icon} from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
    title: string;
}

export function Groupcard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}