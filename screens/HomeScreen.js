import React from 'react';

import {Container, Card, UserInfo, UserImg} from '../styles/FeedStyles';

function HomeScreen () {
    return (
        <Container>
            <Card>
                <UserInfo>
                    <UserImg source={require('../assets/users/user-3.jpg')}></UserImg>
                </UserInfo>
            </Card>
        </Container>
    )
}

export default HomeScreen;
