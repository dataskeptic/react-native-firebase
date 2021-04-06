import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { 
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

const PostCard = ({item}) => {

    let likeIcon = item.liked ? 'heart' : 'heart-o';
    let likeIconColor = item.liked ? '#2e64e5' : '#333';
    let likeText;
    let commentText;
    if (item.likes == 1) {
        likeText = '1 Like';
      } else if (item.likes > 1) {
        likeText = item.likes + ' Likes';
      } else {
        likeText = 'Like';
      }
    
      if (item.comments == 1) {
        commentText = '1 Comment';
      } else if (item.comments > 1) {
        commentText = item.comments + ' Comments';
      } else {
        commentText = 'Comment';
      }

    return (
            <Card key={item.id}>
                <UserInfo>
                    <UserImg source={item.userImg}></UserImg>
                    <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.postTime}</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>{item.post}</PostText>
                {item.postImg != 'none' ? <PostImg source={item.postImg}/> : <Divider />} 

                <InteractionWrapper>
                    <Interaction active={item.liked}>
                        <FontAwesome name={likeIcon} size={25} color={likeIconColor}></FontAwesome>
                        <InteractionText active={item.liked}>{likeText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <FontAwesome name="comment-o" size={25}></FontAwesome>
                        <InteractionText>{commentText}</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>
    )
}

export default PostCard;
