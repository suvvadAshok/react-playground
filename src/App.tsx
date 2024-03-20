import logo from "./assets/react.svg";
import {
  Card,
  View,
  Image,
  Heading,
  Button,
  withAuthenticator,
} from "@aws-amplify/ui-react";

function App({ signOut }: { signOut: any }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} alt="logo" className="App-logo" />
        <Heading level={1}>we now have auth</Heading>
      </Card>
      <Button onClick={signOut}>Sign out</Button>
    </View>
  );
}

export default withAuthenticator(App);
