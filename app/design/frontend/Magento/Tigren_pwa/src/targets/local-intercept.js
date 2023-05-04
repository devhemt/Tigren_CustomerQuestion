module.exports = targets => {
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "CreateQuestion",
            pattern: "/tigren_question/create",
            path: require.resolve("../components/Tigren_question_create/create.js")
        });
        routes.push({
            name: "ShowQuestion",
            pattern: "/tigren_question/index",
            path: require.resolve("../components/Tigren_question_show/show.js")
        });
        routes.push({
            name: "ShowQuestion",
            pattern: "/tigren_question/edit/:id?",
            path: require.resolve("../components/Tigren_question_edit/edit.js")
        });
    });
};
