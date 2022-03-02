const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const createTableSQL = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment ,name VARCHAR(255), primary key(id))`
const sql = `INSERT INTO people(name) values('Wesley')`

connection.query(createTableSQL,(err) => {
    if (!err) connection.query(sql)

})



app.get('/', (req,res) => {
  
    const query = `SELECT * FROM people`
    connection.query(query,(err,results) => {


        if(!err){
            let resultsStr = results.map(p => p.name)
            let names = `<h1>Full Cycle</h1>
            - Nomes :
            <ul>
            `
            for (const str of resultsStr){
                 names = names +  `<li>${str}</li>`
            }
            names = names + `</ul>`
            res.send(names)
        }
      
    })
    
   
})

app.listen(port, ()=> {
   
})