import Profile from './Profile';

const App = () => {
    return (
        <div>
            <h1>ユーザーリスト</h1>
            <Profile names='山田太郎' age={30} />
            <Profile names='鈴木花子' age={25} />
            <Profile names='田中一郎' age={35} />
        </div>
    );
};

export default App;

