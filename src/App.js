import { Grid, View, useTheme } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function App() {
  const { tokens } = useTheme();
  return (
   <>
    <p>test</p>

    
    <Grid
      templateColumns="1fr 1fr"
      templateRows="10rem 10rem"
      gap={tokens.space.small}
    >
      <View backgroundColor={tokens.colors.blue[10]}><Button>Hello world</Button></View>
      <View backgroundColor={tokens.colors.blue[20]}></View>
      <View backgroundColor={tokens.colors.blue[40]}></View>
      <View backgroundColor={tokens.colors.blue[60]}></View>
    </Grid>
   </>
  );
}

export default App;
