import { Grid } from '@chakra-ui/react';
// @ts-ignore
import { HelloWorldButton } from 'pioneer-library-example';

import CTASection from './components/CTASection';
import SomeImage from './components/SomeImage';
import SomeText from './components/SomeText';

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
      <SomeImage />
      <CTASection />
      <HelloWorldButton />
    </Grid>
  );
};

export default Home;
