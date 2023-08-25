var users = ids.map((id) => {
    return usersMockup.find((user) => {
        return user.id == id;
    });
});
