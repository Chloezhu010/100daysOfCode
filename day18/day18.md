# Build own APIs
- Rapid API: https://rapidapi.com/
- Current API monetization
    - data collection: large database
    - algo/ service: eg. chatgpt
    - simplified interface: 
- internal API: 
- REST API: 
    - http methods: GET, POST, PUT, PATCH, DELETE
    - json output
    - client, server separated: client sends request to server, server sends response
    - stateless: server does not store client info
    - resource-based: each resource is identified by a URI, and operations are performed on the resource
- JokeAPI: https://jokeapi.dev/
- Create get, post, put, patch, delete routes

# Database
- sql: structured query language
- sql vs nosql DB
    - sql: relational database, table, row, column
        - eg. mysql, postgres, sqlite, mssql
    - nosql: non-relational database, key-value pairs, document, graph, *can change data structure*
        - eg. mongodb, redis, dynamodb
    - advantages of nosql
        - flexible data structure
        - horizontal scaling
- sql tutorial
    - web3school: https://www.w3schools.com/sql/
    - create, read, update, destroy
    - create table table_name (
        colume1 data_type,
        colume2 data_type,
        colume3 data_type,
    )
    - insert into table_name (colume1, colume2, colume3) values (value1, value2, value3)
    - select
        - select * from table_name;
        - select colume1, colume2 from table_name;
        - select * from table_name where colume1 = value1;
    - update
        - update table_name set colume1 = value1 where colume2 = value2;
        - alter table table_name add colume_name data_type;
    - delete
        - delete from table_name where colume1 = value1;
    - relationship
        - foreign key
        - join
# PostgreSQL
- install
    - postgres server: https://www.postgresql.org/download/
    - pgadmin: https://www.pgadmin.org/download/
        - UI to run postgres server
- node pacage: node-postgres
    - https://www.npmjs.com/package/node-postgres
- create table
    - create table <name of tables> (
        <name of column> <datatype>,
        <name of column> <datatype>,
    )