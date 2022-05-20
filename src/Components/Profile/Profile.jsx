import React from 'react';
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";




export let Profile = (props) => {

    return <div>

        <ProfileInfo/>
        <MyPost postData={props.state.postData}/>

    </div>
}