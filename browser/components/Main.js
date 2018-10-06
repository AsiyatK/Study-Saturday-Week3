import React from 'react'
import axios from 'axios'

export default class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            students: []
        }
    }

    async componentDidMount(){
        try{
        const res = await axios.get('/student')
        this.setState({students: res.data})
        } catch(err){
            console.log(err)
        }
    }

    render(){
        console.log('STATE', this.state)
        const { students } = this.state
        return (
            <div>
              <h1>Students</h1>
              <h3>Name</h3>
                {students.map(student => (
                  <div key={student.id}>{student.fullName} </div>
                ))}
            </div>
          ) 
    }
}