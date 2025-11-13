type ProfileProps = {
    names: string;
    age: number;
}


const Profile = ({ names, age }: ProfileProps) => {
    return (
        <div style = {{ border: '1px solid #ccc', margin: '10px' , padding: '10px'}}>
        <h3>名前: {names}</h3>
        <p>年齢: {age}</p>
        </div>
    );
};
export default Profile;