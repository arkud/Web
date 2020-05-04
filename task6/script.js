;(function () {
    var posts = [
        {
            id: '1',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!#NeHochuSessiu",
            createdAt: new Date('2020-05-03T19:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: ["NeHochuSessiu"],
            likes: ["ar_kud"]
        },
        {
            id: '2',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T18:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [],
            likes: ["ar_kud"]
        },
        {
            id: '3',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '4',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T14:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '5',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-04-03T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '6',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-04T14:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '7',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:20:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '8',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-05-03T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '9',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T07:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '10',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-05-11T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '11',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2018-05-03T17:31:00'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '12',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '13',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-12-03T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '14',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T18:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '15',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-05-21T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '16',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T13:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '17',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '18',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-03T17:31:30'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '19',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2019-06-03T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        },
        {
            id: '20',
            description: "Как же хорошо, что у меня наконец появилось время подтянуть все свои долги!",
            createdAt: new Date('2020-05-01T17:31:24'),
            author: "ar_kud",
            name: "Artsiom Kudryavtsev",
            photoLink: "zZuTNe0PW34.jpg",
            hashtags: [""],
            likes: ["ar_kud"]
        }
    ];
    alert("Im working");

    function getPosts(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        
    }
}());