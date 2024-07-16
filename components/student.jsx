

const Student = (props) => {
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{props.gender}</td>
            </tr>
        </table>
    </div>

  )
}

Student.defaultProps={
   name:"no name",
   age:0,
   gender:"others"
}
export default Student