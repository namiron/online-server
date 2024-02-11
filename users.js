const { trimSt } = require('./utils')

let users = []

const addUser = (user) => {

    const isExist = findUser(user);

    !isExist && users.push(user)

    const currentUser = isExist || user

    return { isExist: !!isExist, user: currentUser }
}

const findUser = (user) => {
    const userName = trimSt(user.name)
    const userRoom = trimSt(user.room)

    return users.find((u) => trimSt(u.name) === userName && trimSt(u.room) === userRoom)
}

const getRoomUsers = (room) => users.filter((u) => u.room === room)

const removeUser = (user) => {
    const found = findUser(user)


    if (found) {
        users = users.filter(
            ({ room, name }) => room === found.room && name !== found.name)
    }
    return found
}

module.exports = { addUser, findUser, getRoomUsers, removeUser }
