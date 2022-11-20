import './App.css';
import logo from "./outrigger_paddle.png";
import "@aws-amplify/ui-react/styles.css";

import {
    withAuthenticator,
    Button,
    View,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
    return (
        <View className="App">
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        We are now authenticated
                    </p>
                    <a
                        className="App-link"
                        href="https://www.instagram.com/katya_horton/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        InstaPaddle for Kots
                    </a>
                </header>
            </div>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
}

export default withAuthenticator(App);

