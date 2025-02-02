import BackgroundContainer from './component/background';
import CenteredImage from './component/logo';
export default function Home() {

  return (
      <div>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <BackgroundContainer sourceName="/heart-animation.gif">
          <CenteredImage src="/logo.png" /> 
        </BackgroundContainer>
      </div>
  );
}
