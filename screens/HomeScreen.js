import React from 'react';
import {Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Container, 
        Card, 
        UserInfo, 
        UserImg,
        UserName,
        UserInfoText,
        PostTime,
        PostText,
        PostImg,
        Interaction,
        InteractionText,
        InteractionWrapper,
        Divider
        } from '../styles/FeedStyles';

function HomeScreen () {
    return (
        <Container>
            <Card>
                <UserInfo>
                    <UserImg source={require('../assets/users/user-3.jpg')}></UserImg>
                    <UserInfoText>
                    <UserName>Jenny Doe</UserName>
                    <PostTime>4 hours ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Hello this is a teste</PostText>
                <PostImg source={require('../assets/posts/post-img-1.jpg')}></PostImg>
                <InteractionWrapper>
                    <Interaction>
                        <FontAwesome name="heart-o" size={25}></FontAwesome>
                        <InteractionText>Like</InteractionText>
                    </Interaction>
                    <Interaction>
                        <FontAwesome name="comment-o" size={25}></FontAwesome>
                        <InteractionText>Comment</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>

            <Card>
                <UserInfo>
                    <UserImg source={require('../assets/users/user-1.jpg')}></UserImg>
                    <UserInfoText>
                    <UserName>Jenny Doe</UserName>
                    <PostTime>4 hours ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Hello this is a teste</PostText>
                <Divider/>
                <InteractionWrapper>
                    <Interaction active>
                        <FontAwesome name="heart" size={25} color="#2e65e5"></FontAwesome>
                        <InteractionText>Like</InteractionText>
                    </Interaction>
                    <Interaction>
                        <FontAwesome name="comment-o" size={25}></FontAwesome>
                        <InteractionText>Comment</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>

        </Container>
    )
}

export default HomeScreen;
