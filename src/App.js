import {Menu, MenuItem} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Grid, View, useTheme} from '@aws-amplify/ui-react';


export const BasicExample = () => {
    return (
        <View width="4rem">
            <Menu>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </Menu>
        </View>
    );
};

function App() {
    const {tokens} = useTheme();
    return (
        <>
            <p>test</p>

            <BasicExample></BasicExample>


            <Grid
                templateColumns={{base: '1fr', large: '1fr 1fr'}}
                templateRows={{base: 'repeat(4, 10rem)', large: 'repeat(3, 10rem)'}}
                gap={tokens.space.small}
            >
                <View
                    columnSpan={[1, 1, 1, 2]}
                    backgroundColor={tokens.colors.pink[10]}
                ></View>
                <View
                    rowSpan={{base: 1, large: 2}}
                    backgroundColor={tokens.colors.pink[20]}
                ></View>
                <View backgroundColor={tokens.colors.pink[40]}></View>
                <View backgroundColor={tokens.colors.pink[60]}></View>
            </Grid>
        </>
    );
}

export default App;
