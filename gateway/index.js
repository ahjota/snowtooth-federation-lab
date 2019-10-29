const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
    serviceList: [
        {name: "lifts", url: "http://localhost:4001"},
        {name: "trails", url: "http://localhost:4002"},
    ]
});

const start = async() => {
    const { schema, executor } = await gateway.load();
    const server = new ApolloServer({ schema, executor });
    const { url } = await server.listen(4000);
    console.log(`gateway running at ${url}`);
};

start();