import React, { useContext } from 'react';

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
import { AuthContext } from '../navigation/AuthProvider';

const PostCard = ({item, onDelete}) => {

  const {user, logout} = useContext(AuthContext);

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
                    <UserImg source={{uri: item.userImg}}></UserImg>
                    <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.postTime.toString()}</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>{item.post}</PostText>
                {item.postImg != null ? <PostImg source={{uri: item.postImg}}/> : <Divider />} 

                <InteractionWrapper>
                    <Interaction active={item.liked}>
                        <FontAwesome name={likeIcon} size={25} color={likeIconColor}></FontAwesome>
                        <InteractionText active={item.liked}>{likeText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <FontAwesome name="comment-o" size={25}></FontAwesome>
                        <InteractionText>{commentText}</InteractionText>
                    </Interaction>
                    {user.uid == item.userId ?
                      <Interaction onPress={() => onDelete(item.id)}>
                        <FontAwesome name="trash-o" size={25}></FontAwesome>
                      </Interaction> : null
                    }
                </InteractionWrapper>
            </Card>
    )
}

export default PostCard;
