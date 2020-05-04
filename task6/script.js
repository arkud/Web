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
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T18:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: ["#NeHochuSessiu"],
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
    var deletedPosts = [];

    function getPosts(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;

        var result = posts.slice();

        if (filterConfig.hashtags !== undefined && filterConfig.hashtags !== null) {
            result = posts.filter(function (item) {
                if(item.hashtags === null || item.hashtags === undefined)
                    return false;
                for(let i = 0;i < filterConfig.hashtags.length;i++){
                    if(item.hashtags.includes(filterConfig.hashtags[i]))
                        return true;
                }

            });
        }

        if (filterConfig.timeSort) {
            result = result.sort((a, b) => a.createdAt - b.createdAt);
        } else if (filterConfig.nameSort) {
            result = result.sort((a, b) => a.name > b.name);
        }

        console.log("get posts, skipping " + skip + ", getting " + top + ", filtered by: "
            + "name:" + filterConfig.nameSort + ", time:" + filterConfig.timeSort + ", with hashtags: " + (filterConfig.hashtags || "none") + "\n");
        return result.slice(skip, skip + top);
    }

    function getPost(id) {
        let result = posts.find(element => element.id === id);
        console.log("Find post with id:" + id + ", found: " + result + "\n");
        return result;
    }

    function validatePost(post) {
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

    function addPost(post) {
        if (validatePost(post)) {
            var re = /#.+ /;
            post.hashtags = re.exec(post.description);
            if (post.hashtags !== null)
                post.hashtags = post.hashtags.filter((elem, index) => post.hashtags
                    .indexOf(elem) === index);
            posts.push(post);
            console.log("Succesfully added new post");
            return true;
        }
        return false;
    }

    function editPost(id, post) {
        console.log("Change post with id:" + id);
        if (post.createdAt !== undefined || post.author !== undefined || post.name !== undefined || post.id !== undefined) {
            console.log("restricted fields cannot be changed");
            return false;
        }
        if (!validatePost(getPost(id)))
            return false;

        var index = posts.findIndex(element => element.id === id);
        if (post.description !== undefined) {
            posts[index].description = post.description;
            var re = /#.+ /;
            posts[index].hashtags = re.exec(post.description);
            if (posts[index].hashtags !== null)
                posts[index].hashtags = posts[index].hashtags.filter((elem, index) => posts[index].hashtags
                    .indexOf(elem) === index);
            console.log("description succesfully changed to: " + post.description.slice(0, 20) + "...");
            console.log("found hashtags " + posts[index].hashtags);
        }

        if (post.likes !== undefined) {
            posts[index].likes = post.likes;
            console.log("likes succesfully updated");
        }
        return true;
    }

    function removePost(id) {
        console.log("Remove post with id:" + id + ",");
        var index = posts.findIndex(element => element.id === id);
        if (index === -1) {
            console.log(" not found\n");
            return false;
        }
        deletedPosts.push(posts[index]);
        posts.splice(index, 1);
        console.log(" removed succesfully\n");
        return true;
    }


    getPost("1");
    removePost("1");
    getPost("1");
    addPost({id: "1", description: "zzz", createdAt: new Date(), author: "gtr", name: "You"});
    getPost("1");
    editPost("1", {description: "ddd"});
    editPost("1", {createdAt: new Date()});
    editPost("1", {likes: ["ar_kud"]});
    console.log(getPosts(undefined, undefined, {timeSort: true})[0].createdAt);
    console.log(getPosts(undefined, undefined, {nameSort: true})[0].name);
    console.log(getPosts(undefined, undefined, {hashtags: ["#NeHochuSessiu"]})[0].hashtags[0]);
}());
