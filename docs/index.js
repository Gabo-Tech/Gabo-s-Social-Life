import basicInfo from './basicInfo.js';
import posts from './posts.js';
import users from './users.js';
export default {
    ...basicInfo,
    paths: {
        ...users,
        ...posts,
    },
};
