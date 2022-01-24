import PropTypes from"prop-types";

function User({name,surname,isloggedIn,friends,adress}) {//gönderdiğimiz bütün propertyler burda proğs olarak geçer
console.log({name,surname,isloggedIn,friends})//props yazmak yerine değişken isimlerini yazdık
    return(
        <>
        <h3>{name}</h3>  
        <h3>{surname} {isloggedIn}</h3>
        <h3>{adress.title} {adress.zip}</h3>
        { isloggedIn ? `${name} ${surname}`:"giriş yapamadınız" };
       {
        friends.map((friend)=>(
        <div key={friend.id}>{friend.name}</div>)
       )
       }
        </>
    )
}

User.propTypes={
    name: PropTypes.string.isRequired,//name değişkeni string olmalı ve var olması gerekli
    surname: PropTypes.oneOfType(PropTypes.string,PropTypes.array),
    isloggedIn: PropTypes.bool,
    friends: PropTypes.array,
    adress:PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    })

}

User.defaultProps={//isloggedIn gönderilmemişse varsayılan olarak false atansın
    isloggedIn:false
}
export default User;