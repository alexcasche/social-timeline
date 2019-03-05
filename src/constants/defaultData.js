import moment from 'moment';

export default {
  settings: {
    user: 'aasche'
  },
  users: {
    aasche: {
      username: 'aasche',
      firstName: 'Alex',
      lastName: 'Asche',
      avatar: './avatar.png'
    }
  },
  posts: {
    1: {
      id: 1,
      author: 'aasche',
      date: moment(new Date()),
      text: 'My First Tweet!',
      retweets: 10,
      stars: 20
    }
  }
}