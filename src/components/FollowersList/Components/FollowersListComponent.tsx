import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";



interface IFollowers{
    followers:Array<any>
}

function FollowersListComponent({followers}:IFollowers) {
console.log("2");

    return (

        <div className="followerslist-container">
            
            <div>
                {followers.map((follower, index) => (
                    <div className="follower-item" data-testid={`follower-card-${index}`} key={`follower-card-${index}`}>
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link href="/" >Go Back</Link>
            </div>
        </div>
    );
}

export default FollowersListComponent;




export const getServerSideProps: GetServerSideProps<any> = async (ctx:GetServerSidePropsContext) => {
    console.log("enter  the  get side");
    
    try {
    if(ctx.req.method="GET"){
          const  {data} = await axios.get(`https://randomuser.me/api/?results=5`);


          return {
            props: {
                followers: (data)  as  Array<any>
            }
        }
        
    }else{
        return {
            props: {
                followers: []
            }
        }
    }
} catch(e){
    throw new Error("there  some  error")
}
}