import React, { Component } from 'react';
import querystring from 'querystring';
import ws from './utils/ws';
import logo from '../public/svg/smashcast.svg';
import './App.css';
import Box from './components/Box';
import FlexBox from './components/FlexBox';
import Container from './components/Container';
import Reaction from './components/Reaction';

class App extends Component {

    state = {
        reactions: [
            { type: 'laugh', amount: 0 },
            { type: 'love', amount: 0 },
            { type: 'salt', amount: 0 },
            { type: 'cry', amount: 0 },
            { type: 'surprise', amount: 0 },
            { type: 'ujelly', amount: 0 },
        ],
        channel: '',
        query: {},
    };

    componentWillMount() {
        ws.on('open', this.handleConnect);
        ws.on('cheering.info', this.handleCheering);
    }

    handleConnect = () => {
        const search = location.search;
        const query = querystring.parse(search.substr(1));

        if (!query.channel) {
            return;
        }

        this.setState({
            channel: query.channel,
            query,
        });
        this.joinChannel();
    };

    handleCheering = data => {
        const payload = data.clicks;
        const reactions = [...this.state.reactions];

        reactions.forEach(reaction => {
            const target = payload.find(item => item.name === reaction.type);

            if (target) {
                reaction.amount = target.total;
            }
        });
        this.setState({
            reactions,
        });
    };

    joinChannel() {
        ws.sendMessage('cheering.joinChannel', {
            channel: this.state.channel,
            name: 'UnknownSoldier',
            token: '',
        });
    }

    render() {
        const {
            reactions,
            channel,
            query,
        } = this.state;

        if (query.transparent) {
            return (
                <Container>
                    <FlexBox>
                        {reactions.map(reaction => (
                            <Box
                                key={reaction.type}
                                transparent={query.transparent}
                                color={query.color}
                            >
                                <Reaction
                                    type={reaction.type}
                                    amount={reaction.amount}
                                />
                            </Box>
                        ))}
                    </FlexBox>
                </Container>
            )
        }
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Reactions for {channel}</h2>
                </div>
                <Container>
                    <FlexBox>
                        {reactions.map(reaction => (
                            <Box
                                key={reaction.type}
                            >
                                <Reaction
                                    type={reaction.type}
                                    amount={reaction.amount}
                                />
                            </Box>
                        ))}
                    </FlexBox>
                </Container>
            </div>
        );
    }
}

export default App;
