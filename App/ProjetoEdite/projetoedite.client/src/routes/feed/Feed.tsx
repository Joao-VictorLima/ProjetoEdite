import React, { useEffect, useState } from 'react';
import { List, Avatar, Button, Card, Input } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import api from '../../services/api';

const { TextArea } = Input;

interface Post {
    id: number;
    content: string;
    user: {
        name: string;
        avatar: string;
    };
    image?: string;
    comments: Comment[];
}

interface Comment {
    id: number;
    content: string;
    user: {
        name: string;
        avatar: string;
    };
}

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchMoreData();
    }, []);

    const fetchMoreData = () => {
        api.get('/posts')
            .then(response => {
                setPosts(response.data);
                setHasMore(response.data.length > 0);
            })
            .catch(error => {
                console.error("There was an error fetching the posts!", error);
            });
    };

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p style={{ textAlign: 'center' }}>No more posts</p>}
        >
            <List
                itemLayout="vertical"
                dataSource={posts}
                renderItem={post => (
                    <Card
                        style={{ marginBottom: 16 }}
                        title={<><Avatar src={post.user.avatar} /> {post.user.name}</>}
                        extra={<Button type="link">Like</Button>}
                    >
                        <p>{post.content}</p>
                        {post.image && <img src={post.image} alt="post" style={{ width: '100%' }} />}
                        <List
                            itemLayout="horizontal"
                            dataSource={post.comments}
                            renderItem={comment => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={comment.user.avatar} />}
                                        title={<a href="https://ant.design">{comment.user.name}</a>}
                                        description={comment.content}
                                    />
                                    <Button type="link">Like</Button>
                                </List.Item>
                            )}
                        />
                        <TextArea rows={2} placeholder="Add a comment" />
                        <Button type="primary" style={{ marginTop: 8 }}>Comment</Button>
                    </Card>
                )}
            />
        </InfiniteScroll>
    );
};

export default Feed;
