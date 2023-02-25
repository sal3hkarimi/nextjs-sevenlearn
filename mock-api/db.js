const { faker } = require('@faker-js/faker');

module.exports = function () {
    const data = { posts: [] }

    for (let i = 0; i < 20; i++) {
        data.posts.push({
            id: faker.datatype.uuid(),
            slug: faker.lorem.slug(),
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            date: faker.date.past().getTime(),
        })
    }

    return data
}