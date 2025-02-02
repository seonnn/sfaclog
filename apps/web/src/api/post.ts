import pb from '.';

export const getPostsbyUserId = async (userId: string, page: number) => {
  const perPage = 2;
  const records = await pb.collection('post').getList(page, perPage, {
    filter: `user_id = "${userId}"`,
  });

  return records;
};

export const getUserRelatedPostsByUserId = async (
  collection: string,
  userId: string,
  page: number,
) => {
  const perPage = 2;
  const records = await pb.collection(collection).getList(page, perPage, {
    filter: `user_id = "${userId}"`,
    expand: 'post_id',
    sort: '-created',
  });

  return records.items.map(({ expand }) => expand?.post_id);
};

export const getTagsByPostId = async (postId: string) => {
  const records = await pb
    .collection('post_tag')
    .getFullList({ filter: `post_id = "${postId}"`, expand: 'tag_id' });

  return records.map(tag => tag.expand?.tag_id.name);
};
