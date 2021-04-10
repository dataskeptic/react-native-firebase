import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Container } from '../styles/FeedStyles';
import PostCard from '../components/PostCard';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

function HomeScreen () {

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const fetchPosts = async () => {
    try {

      const list = [];

      await firestore()
        .collection('posts')
        .orderBy('postTime', 'desc')
        .get()
        .then((querySnapShot) => {
          // console.log('Total posts ', querySnapShot.size);

          querySnapShot.forEach(doc => {
            const { userId, post, postImg, postTime, likes, comments } = doc.data();
            list.push({
              id: doc.id,
              userId,
              userName: 'Test Name',
              userImg: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
              postTime: postTime,
              post: post,
              postImg: postImg,
              liked: false,
              likes,
              comments,
            });
          })
        })

        setPosts(list);
        if(loading){
          setLoading(false);
        }

        console.log('Posts: ', list);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
    setDeleted(false);
  }, [deleted])

  const handleDelete = (postId) => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed!'),
          style: 'cancel'
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(postId),
        },
      ],
      {cancelable: false}
    )
  }

  const deletePost = (postId) => {

    firestore().collection('posts')
    .doc(postId)
    .get()
    .then(documentSnapshot => {
      if(documentSnapshot.exists){
        const { postImg } = documentSnapshot.data();

        if( postImg  != null ) {
          const storageRef = storage().refFromURL(postImg);
          const imageRef = storage().ref(storageRef.fullPath);

          imageRef
          .delete()
          .then(() => {
            console.log(`${postImg} has been delete!`);
            deleteFirestoreData(postId);
            setDeleted(true);
          })
          .catch((err) => {
            console.log('Error while deleting the image: ', err)
          })
        } 
        else {
          deleteFirestoreData(postId);
          setDeleted(true);
        } 
      }
    })
  }

  const deleteFirestoreData = (postId) => {
    firestore()
    .collection('posts')
    .doc(postId)
    .delete()
    .then(() => {
      Alert.alert(
        'Post deleted!!!',
        'Your post has been deleted successfuly',
      );
      console.log('Current id carai: ', postId);
    })
    .catch(err => console.log('Error deleting post: ', err));
  }
 
  const listHeader = () => {
    return null;
  } 

    return (
        <Container>
            <FlatList  
              data={posts}
              renderItem={({item}) => <PostCard item={item} onDelete={handleDelete}/>}
              keyExtractor={item => item.id}
                ListHeaderComponent={listHeader}
                  ListFooterComponent={listHeader}
              showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}

export default HomeScreen;
