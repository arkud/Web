;(function () {
    var posts = [
        {
            id: '1',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!#NeHochuSessiu",
            createdAt: new Date('2020-05-03T19:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: ["#NeHochuSessiu"],
            likes: ["ar_kud"]
        },
        {
            id: '2',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть#NeHochuSessiu все свои долги#foo",
            createdAt: new Date('2020-05-03T18:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: ["#NeHochuSessiu","#foo"],
            likes: ["ar_kud"]
        },
        {
            id: '3',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '4',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T14:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            likes: ["ar_kud"],
            hashtags: []
        },
        {
            id: '5',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-04-03T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '6',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-04T14:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '7',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:20:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '8',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-05-03T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '9',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T07:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '10',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-05-11T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '11',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2018-05-03T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '12',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '13',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-12-03T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '14',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T18:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '15',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-05-21T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '16',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T13:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '17',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '18',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:31:30'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '19',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-06-03T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '20',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-01T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        }
    ];

    class ChirikList {

        constructor(posts) {
            this._posts = [];
            this._deletedPosts = [];
            posts.forEach((post) => {
                if (ChirikList.validatePost(post)) {
                    ChirikList.updateHashtags(post);
                    this._posts.push(post);
                }
            });
            console.log("New ChirikList object with " + this._posts.size + " elements");
        }

        addAll(posts) {
            let notValidPosts;
            posts.forEach((post) => {
                if (ChirikList.validatePost(post)) {
                    ChirikList.updateHashtags(post);
                    this._posts.push(post);
                } else
                    notValidPosts.push(post);
            });
            console.log("Added " + this._posts.size + " elements, " + notValidPosts.size + " elements not valid");

            return notValidPosts;
        }

        getPosts(skip, top, filterConfig) {
            skip = skip || 0;
            top = top || 10;

            let result = this._posts.slice();

            if (filterConfig.hashtags) {
                result = result.filter(function (item) {
                    if (!Array.isArray(item.hashtags))
                        return false;

                    return filterConfig.hashtags.some(function (hashtag){
                        return item.hashtags.includes(hashtag);
                    });
                });
            }

            if (filterConfig.timeSort) {
                result = result.sort((a, b) => a.createdAt - b.createdAt);
            } else if (filterConfig.nameSort) {
                result = result.sort((a, b) => (a.name > b.name));
            }

            console.log("get _posts, skipping " + skip + ", getting " + top + ", filtered by: "
                + "name:" + filterConfig.nameSort + ", time:" + filterConfig.timeSort +
                ", with hashtags: " + (filterConfig.hashtags || "none") + "\n");
            return result.slice(skip, skip + top);
        }

        getPost(id) {
            let result = this._posts.find(element => element.id === id);
            console.log("Find post with id:" + id + ", found: " + result + "\n");
            return result;
        }

        static validatePost(post) {
            console.log(post + " : ")
            if (post.id === undefined) {
                console.log("wrong id\n");
                return false;
            }
            if (post.description === undefined || post.description.length >= 200) {
                console.log("wrong description\n");
                return false;
            }
            if (post.createdAt === undefined || !(post.createdAt instanceof Date)) {
                console.log("wrong time\n");
                return false;
            }
            if (post.author === undefined) {
                console.log("wrong author\n");
                return false;
            }
            if (post.name === undefined) {
                console.log("wrong name\n");
                return false;
            }
            return true;
        }

        static updateHashtags(post) {
            let hashtagRegExp = /#\S+/g;
            post.hashtags = Array.from(post.description.matchAll(hashtagRegExp)).flat(1);
            if (post.hashtags)
                post.hashtags = post.hashtags.filter((elem, index) => post.hashtags
                    .indexOf(elem) === index);
        }

        addPost(post) {
            if (ChirikList.validatePost(post)) {
                ChirikList.updateHashtags(post);
                this._posts.push(post);
                console.log("Succesfully added new post");
                return true;
            }
            return false;
        }

        editPost(id, post) {
            console.log("Change post with id:" + id);
            if (post.createdAt || post.author || post.name || post.id) {
                console.log("restricted fields cannot be changed");
                return false;
            }

            let index = this._posts.findIndex(element => element.id === id);
            if (post.description) {
                this._posts[index].description = post.description;
                ChirikList.updateHashtags(this._posts[index]);
                console.log("description succesfully changed to: " + post.description.slice(0, 20) + "...");
                console.log("found hashtags " + this._posts[index].hashtags);
            }

            if (post.likes) {
                this._posts[index].likes = post.likes;
                console.log("likes succesfully updated");
            }
            return true;
        }

        removePost(id) {
            console.log("Remove post with id:" + id + ",");
            let index = this._posts.findIndex(element => element.id === id);
            if (index === -1) {
                console.log(" not found\n");
                return false;
            }
            this._deletedPosts.push(this._posts[index]);
            this._posts.splice(index, 1);
            console.log(" removed succesfully\n");
            return true;
        }

        clear() {
            this._posts = [];
            this._deleted_posts = [];
            console.log("Removed all elements");
        }
    }

    let test = new ChirikList(posts);
    test.getPost("1");
    test.removePost("1");
    test.getPost("1");
    test.addPost({id: "21", description: "#foo zzz#dll", createdAt: new Date(), author: "gtr", name: "You"});
    test.getPost("21");
    test.editPost("21", {description: "ddd"});
    test.editPost("21", {createdAt: new Date()});
    test.editPost("21", {likes: ["ar_kud"]});
    console.log(test.getPosts(undefined, undefined, {timeSort: true})[0].createdAt);
    console.log(test.getPosts(undefined, undefined, {nameSort: true})[0].name);
    console.log(test.getPosts(undefined, undefined, {hashtags: ["#NeHochuSessiu"]})[0].hashtags[0]);
    test.clear();
    test.getPost(0);
}());