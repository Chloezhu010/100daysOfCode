# Embedded javascript
- ejs: templating languages
- ejs tags
    - <% %>: js execute, but not give output, eg. console.log()
    - <%= %>: js output, eg. variable
    - <%- %>: render html, eg. html
    - <%# %>: for comment
    - <%% %>: to show <%>
    - <%- include("header.ejs")%>: js execute and not output
- passing data
    - res.render("index.ejs", {name: "John"})
    - locals: res.locals.name = "John"
- partials, layouts

